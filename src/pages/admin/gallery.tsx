import Link from 'next/link'
import axios from 'axios'
import useSwr from 'swr'
import { v4 as uuidv4 } from 'uuid'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Gallery() {
  const { data, error } = useSwr('/api/images', fetcher)
  // s3 upload
  const uploadPhoto = async (e: any) => {
    const file = e.target.files[0]
    const filename = encodeURIComponent(file.name)
    const res = await fetch(`/api/upload-url?file=${filename}`)
    const { url, fields } = await res.json()
    const formData = new FormData()

    Object.keys(fields).forEach((key) => {
      formData.append(key, fields[key])
    })
    formData.append('file', file)

    const upload = await fetch(url, {
      method: 'POST',
      body: formData,
    })

    if (upload.ok) {
      const result = await fetch('/api/upload-images', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({ id: uuidv4(), name: filename }),
      })
      console.log('Uploaded successfully!', result)
    } else {
      console.error('Upload failed.')
    }
  }

  if (error) return <div>Failed to load images</div>
  if (!data) return <div>Loading...</div>

  return (
    <article className="container mx-auto py-24">
      <Link href="/admin">
        <span className="text-left cursor-pointer block">Admin</span>
      </Link>

      <input
        className="mt-12"
        onChange={uploadPhoto}
        type="file"
        accept="image/png, image/jpeg"
      />

      <h1>Gallery</h1>
      <div className="flex flex-wrap">
        {data.length > 0 &&
          data.map((image: any) => {
            return (
              <section key={image.id} className='w-1/4 p-2'>
                <img src={`${process.env.NEXT_PUBLIC_S3_HOST}${image.name}`} alt="image" />
                <p className='py-1'>{image.name}</p>
              </section>
            )
          })}
      </div>
    </article>
  )
}

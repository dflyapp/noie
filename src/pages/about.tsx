import useSwr from 'swr'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function About() {
  const { data, error } = useSwr('/api/todo', fetcher)

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
      console.log('Uploaded successfully!')
      const result = await fetch('/api/image-upload', {
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
      console.log(result)
    } else {
      console.error('Upload failed.')
    }
  }

  if (error) return <div>Failed to load user</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <div>{data[0].task}</div>
      <p>Upload a .png or .jpg image (max 1MB).</p>
      <input
        onChange={uploadPhoto}
        type="file"
        accept="image/png, image/jpeg"
      />
      <p>image goes here </p>
      <img
        style={{ width: '500px' }}
        src="https://freedb-s3.s3.ap-southeast-1.amazonaws.com/vim-inspire.jpeg"
        alt="naruto"
      />
      <Image
        src="https://i.ytimg.com/vi/XsGoGbTVBoo/maxresdefault.jpg"
        width={600}
        height={400}
      />
    </>
  )
}

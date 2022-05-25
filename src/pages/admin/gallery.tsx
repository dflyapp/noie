import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'
import useSwr, { useSWRConfig } from 'swr'
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image'
import toast, { Toaster } from 'react-hot-toast'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Gallery() {
  const { data, error } = useSwr('/api/images', fetcher)
  const { mutate } = useSWRConfig()
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
      axios.post('/api/image-upload', {
        id: uuidv4(),
        name: filename,
      })

      mutate('/api/images')
      toast.success('Uploaded successfully!')
    } else {
      console.error('Upload failed.')
      toast.error('Upload failed.')
    }
  }

  if (error) return <div>Failed to load images</div>
  if (!data) return <div>Loading...</div>

  return (
    <article className="container mx-auto py-24">
      <Head>
        <title>Admin - Gallery</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Toaster />
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
              <section key={image.id} className="w-1/4 p-2 mb-4">
                <div className="border p-2">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3_HOST}${image.name}`}
                    alt="image"
                    layout="responsive"
                    width={400}
                    height={400}
                  />
                  <p className="py-1">{image.name}</p>
                  <button
                    className="text-xs border bg-gray-200 px-2 py-1 rounded-md hover:opacity-50"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `${process.env.NEXT_PUBLIC_S3_HOST}${image.name}`
                      )
                      toast.success('URL is copied!')
                    }}
                  >
                    copy
                  </button>
                  <button
                    onClick={async () => {
                      await axios.delete(`/api/image/${image.id}`)
                      mutate('/api/images')
                      toast.success('Image deleted!')
                    }}
                    className="text-xs bg-red-600 text-white px-2 py-1 ml-2 rounded-md hover:opacity-90"
                  >
                    delete
                  </button>
                </div>
              </section>
            )
          })}
      </div>
    </article>
  )
}

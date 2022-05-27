import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'
import useSwr, { useSWRConfig } from 'swr'
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image'
import toast, { Toaster } from 'react-hot-toast'
import { useRef, useState, useContext } from 'react'

import { LoadingContext } from 'context/loading'
import IsAdmin from 'layouts/IsAdmin'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Gallery() {
  const [file, setFile] = useState<any>()
  const ref = useRef<HTMLInputElement>(null)
  const { data, error } = useSwr('/api/image/postgres', fetcher)
  const { mutate } = useSWRConfig()
  const Loading = useContext(LoadingContext)

  const selectFile = (e: any) => {
    setFile(e.target.files[0])
  }

  function formatString(s: string): string {
    return s.toLowerCase().replaceAll(' ', '-')
  }

  // s3 upload
  const uploadPhoto = async (e: any) => {
    if (file === undefined || file === null) {
      toast.error('Please select a file')
      return
    }
    Loading?.setLoading(true)

    // step 1: get url and authen info (S3)
    const { data } = await axios.post('/api/image/s3', {
      name: formatString(file.name),
      type: file.type,
    })

    // step 2: put file data to remote url (S3)
    await axios.put(data.url, file)

    // step 3: save file to database (Postgres)
    await axios.post('/api/image/postgres', {
      id: uuidv4(),
      name: formatString(file.name),
    })

    // UI for better experience
    ref.current ? (ref.current.value = '') : ''
    toast.success('Image uploaded!')
    mutate('/api/image/postgres')
    setFile(null)
    Loading?.setLoading(false)
  }

  if (error) return <div>Failed to load images</div>
  if (!data) return <div>Loading...</div>

  return (
    <IsAdmin>
      <article className="container mx-auto py-12">
        <Head>
          <title>Admin - Gallery</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Toaster />
        <Link passHref href="/admin">
          <span className="text-left cursor-pointer block underline text-red-500">
            Admin
          </span>
        </Link>

        <h1>Gallery</h1>

        <section className="border p-2">
          <input ref={ref} type="file" onChange={(e) => selectFile(e)} />
          <button
            onClick={uploadPhoto}
            className="bg-red-500 text-white py-1 px-2 rounded-sm shadow-md hover:bg-red-800 transition-all"
          >
            upload
          </button>
        </section>

        <div className="flex flex-wrap">
          {data.length > 0 &&
            data.map((image: any) => {
              return (
                <section key={image.id} className="w-1/4 py-2 mb-4">
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
                        Loading?.setLoading(true)
                        await axios.delete(`/api/image/postgres/${image.id}`)
                        await axios.delete(`/api/image/s3/${image.name}`)
                        mutate('/api/image/postgres')
                        toast.success('Image deleted!')
                        Loading?.setLoading(false)
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
    </IsAdmin>
  )
}

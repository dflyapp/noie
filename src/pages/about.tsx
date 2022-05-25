import useSwr from 'swr'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { useState, useRef } from 'react'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function About() {
  const { data, error } = useSwr('/api/todo', fetcher)
  const [file, setFile] = useState<any>()
  const ref = useRef<HTMLInputElement>(null)

  const selectFile = (e: any) => {
    setFile(e.target.files[0])
  }

  const uploadFile = async () => {
    let { data } = await axios.post('/api/image/s3', {
      name: file.name,
      type: file.type,
    })
    await axios.put(data.url, file)
    ref.current ? ref.current.value = '' : ''
    setFile(null)
  }

  if (error) return <div>Failed to load user</div>
  if (!data) return <div>Loading...</div>

  return (
    <article className="container mx-auto py-24">
      <div>{data[0].task}</div>
      <p>Please select a file to upload</p>
      <input ref={ref} type="file" onChange={(e) => selectFile(e)} />
      <button
        onClick={uploadFile}
        className="bg-red-500 text-white p-2 rounded-sm shadow-md hover:bg-red-700 transition-all"
      >upload</button>
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
    </article>
  )
}

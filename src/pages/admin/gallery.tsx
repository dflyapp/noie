import Link from 'next/link'
import axios from 'axios'
import useSwr from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Gallery() {
  const { data, error } = useSwr('/api/images', fetcher)

  if (error) return <div>Failed to load images</div>
  if (!data) return <div>Loading...</div>
  return (
    <article className="container mx-auto py-24">
      <Link href="/admin">
        <span className="text-left cursor-pointer">Admin</span>
      </Link>

      <h1>Gallery</h1>
      {data.length > 0 && data.map((image: any) => {
        return <p>{image.name}</p>
      })}
    </article>
  )
}

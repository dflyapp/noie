import useSwr from 'swr'
import { useSession } from 'next-auth/react'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function About() {
  const { data, error } = useSwr('/api/animal', fetcher)
  const { data: session } = useSession()

  if (error) return <div>Failed to load animal</div>
  if (!data) return <div>Loading...</div>
  if (session && !session.isAdmin) return <div>not admin...</div>

  return (
    <>
      <div>{data[0].name}</div>
    </>
  )
}

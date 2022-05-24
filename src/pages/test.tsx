import useSwr from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function About() {
  const { data, error } = useSwr('/api/images', fetcher)

  if (error) return <div>Failed to load user</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <div>{data[0].name}</div>
    </>
  )
}

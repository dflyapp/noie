import useSwr from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function About() {
  const { data, error } = useSwr('/api/animal', fetcher)

  if (error) return <div>Failed to load animal</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <div>{data[0].name}</div>
    </>
  )
}

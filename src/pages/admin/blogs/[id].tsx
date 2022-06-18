import Head from 'next/head'
import Link from 'next/link'
import useSwr from 'swr'
import { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/router'

// slate
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { useCallback, useMemo } from 'react'
import axios from 'axios'
import IsAdmin from 'layouts/IsAdmin'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Blogs() {
  const router = useRouter()
  // const { data, error } = useSwr(`/api/blogs/${router.query.id}`, fetcher)
  const id = router.query.id
  const { data, error } = useSwr(
    id ? `/api/blogs/${router.query.id}` : null,
    id ? fetcher : null
  )

  // slate
  const editor = useMemo(() => withReact(createEditor()), [])
  // const renderElement = useCallback(({ attributes, children, element }) => {
  //   switch (element.type) {
  //     case 'quote':
  //       return <blockquote {...attributes}>{children}</blockquote>
  //     case 'link':
  //       return (
  //         <a {...attributes} href={element.url}>
  //           {children}
  //         </a>
  //       )
  //     default:
  //       return <p {...attributes}>{children}</p>
  //   }
  // }, [])

  if (error) return <div>Failed to load blog</div>
  if (!data) return <div>Loading...</div>

  return (
    <IsAdmin>
      <article className="container mx-auto py-12 px-2 sm:px-0">
        <Head>
          <title>Admin - Blogs</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Toaster />
        <nav className="flex">
          <Link passHref href="/admin">
            <span className="block cursor-pointer text-left text-red-500 underline">
              Admin
            </span>
          </Link>
          <Link passHref href="/admin/blogs">
            <span className="ml-4 block cursor-pointer text-left text-red-500 underline">
              Blogs
            </span>
          </Link>
        </nav>
        <h1>Blog page</h1>
        <h3>{data.title}</h3>
        <p>{data.slug}</p>
        <p>{data.description}</p>

        {/* {data.content && (
      <Slate editor={editor}>
        <Editable renderElement={renderElement} value={data.content} />
      </Slate>
    )} */}
        <div>{JSON.stringify(data.content)}</div>

        <button
          onClick={() => {
            axios
              .delete(`/api/blogs/${data.id}`)
              .then(() => {
                router.push('/admin/blogs')
              })
              .catch(() => {
                alert('something went wrong...')
              })
          }}
          className="mt-8 rounded-md bg-red-500 px-2 py-2 text-white"
        >
          delete this blog
        </button>
      </article>
    </IsAdmin>
  )
}

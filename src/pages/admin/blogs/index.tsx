import Head from 'next/head'
import Link from 'next/link'
import { Toaster } from 'react-hot-toast'
import useSwr from 'swr'

import IsAdmin from 'layouts/IsAdmin'

type Blog = {
  id: string
  title: string
  slug: string
  description: string
  content: any
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Blogs() {
  const { data, error } = useSwr('/api/blogs', fetcher)
  if (error) return <div>Failed to load blogs</div>
  if (!data) return <div>Loading...</div>

  return (
    <IsAdmin>
      <article className="container mx-auto py-12">
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
            <span className="text-left cursor-pointer block underline text-red-500">
              Admin
            </span>
          </Link>
          <Link passHref href="/admin/blogs/create">
            <span className="ml-4 text-left cursor-pointer block underline text-red-500">
              Create new blog
            </span>
          </Link>
        </nav>

        <div className="w-full md:w-1/2">
          <h1>Blogs</h1>
          {data.length > 0 &&
            data.map((blog: Blog) => {
              return (
                <section key={blog.id} className="flex justify-between items-center">
                  <Link passHref href={`/admin/blogs/${blog.id}`}>
                    <h3 className="hover:underline cursor-pointer">
                      {blog.title}
                    </h3>
                  </Link>

                  <Link passHref href={`/admin/blogs/${blog.id}`}>
                    <a className="underline text-red-500">visit</a>
                  </Link>
                </section>
              )
            })}
        </div>
      </article>
    </IsAdmin>
  )
}

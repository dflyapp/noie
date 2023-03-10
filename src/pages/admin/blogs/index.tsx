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
          <Link passHref href="/admin/blogs/create">
            <span className="ml-4 block cursor-pointer text-left text-red-500 underline">
              Create new blog
            </span>
          </Link>
        </nav>

        <div className="w-full md:w-1/2">
          <h1>Blogs</h1>
          {data.length > 0 &&
            data.map((blog: Blog) => {
              return (
                <section
                  key={blog.id}
                  className="flex items-center justify-between"
                >
                  <Link passHref href={`/admin/blogs/${blog.id}`}>
                    <h3 className="cursor-pointer hover:underline">
                      {blog.title}
                    </h3>
                  </Link>

                  <Link passHref href={`/admin/blogs/${blog.id}`}>
                    <a className="text-red-500 underline">visit</a>
                  </Link>
                </section>
              )
            })}
        </div>
      </article>
    </IsAdmin>
  )
}

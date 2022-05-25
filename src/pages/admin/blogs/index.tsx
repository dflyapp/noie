import Head from 'next/head'
import Link from 'next/link'
import { Toaster } from 'react-hot-toast'

export default function Blogs() {
  return (
    <article className="container mx-auto py-12">
      <Head>
        <title>Admin - Blogs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Toaster />
      <Link href="/admin">
        <span className="text-left cursor-pointer block underline text-red-500">
          Admin
        </span>
      </Link>
    </article>
  )
}

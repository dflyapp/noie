import Head from 'next/head'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Admin() {
  const { data: session } = useSession()

  return (
    <article className="py-24">
      <Head>
        <title>Admin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <article className="container mx-auto">
        <h1 className="text-left">Admin Page</h1>
        {session ? (
          <>
            Signed in as {session?.user?.email} <br />
            <button
              className="bg-red-500 text-white rounded-md px-2 py-1 hover:opacity-80"
              onClick={() => signOut()}
            >
              Sign out
            </button>
            <div className='mt-8'>
              <Link href="/admin/gallery">
                <a className="block text-lg text-red-500 underline hover:opacity-80">
                  1. Gallery
                </a>
              </Link>
              <Link href="/admin/blogs">
                <a className="mt-4 block text-lg text-red-500 underline hover:opacity-80">
                  2. Blogs
                </a>
              </Link>
            </div>
          </>
        ) : (
          <>
            Not signed in <br />
            <button
              className="bg-red-500 text-white rounded-md px-2 py-1 hover:opacity-80"
              onClick={() => signIn()}
            >
              Sign in
            </button>
          </>
        )}
      </article>
    </article>
  )
}

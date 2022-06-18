import Head from 'next/head'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useEffect, useContext } from 'react'
import axios from 'axios'

import { UserContext } from 'context/user'
import IsAdmin from 'layouts/IsAdmin'

export default function Admin() {
  const { data: session } = useSession()
  const userEmail = session?.user?.email
  const userContext = useContext(UserContext)

  useEffect(() => {
    if (userEmail) {
      // get user info here and add to context
      axios.get(`/api/auth/user/${userEmail}`).then((res) => {
        console.log('useEffect is call ', res.data)
        userContext?.setUser(res.data)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userEmail])

  return (
    <article className="py-24">
      <Head>
        <title>Admin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <IsAdmin>
        <article className="container mx-auto px-2 sm:px-0">
          <h1 className="text-left">Admin Page</h1>
          <p>Hello {session?.user?.name}!</p>
          <div className="flex items-center">
            <p>Signed in as {userEmail} </p>
            <button
              className="rounded-md bg-white px-2 py-1 text-sm text-red-500 hover:opacity-80"
              onClick={() => signOut()}
            >
              (Sign out)
            </button>
          </div>
          <div className="mt-8">
            <Link passHref href="/admin/gallery">
              <a className="block text-lg text-red-500 underline hover:opacity-80">
                1. Gallery
              </a>
            </Link>
            <Link passHref href="/admin/blogs">
              <a className="mt-4 block text-lg text-red-500 underline hover:opacity-80">
                2. Blogs
              </a>
            </Link>
          </div>
        </article>
      </IsAdmin>
    </article>
  )
}

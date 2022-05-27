import Head from 'next/head'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useEffect, useContext } from 'react'
import axios from 'axios'

import { UserContext } from 'context/user'

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

      <article className="container mx-auto">
        <h1 className="text-left">Admin Page</h1>
        {session ? (
          session?.isAdmin ? (
            <>
              <p>Hello {session?.user?.name}</p>
              <p>Signed in as {userEmail} </p>
              <br />
              <button
                className="bg-red-500 text-white rounded-md px-2 py-1 hover:opacity-80"
                onClick={() => signOut()}
              >
                Sign out
              </button>
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
            </>
          ) : (
            <>
              <p>You are not admin user</p>
              <button
                className="bg-red-500 text-white rounded-md px-2 py-1 hover:opacity-80"
                onClick={() => signOut()}
              >
                Sign out
              </button>
            </>
          )
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

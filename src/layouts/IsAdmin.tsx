import { useSession, signIn, signOut } from 'next-auth/react'

export default function IsAdmin({children}: JSX.ElementChildrenAttribute) {
  const { data: session } = useSession()

  return (
    <>
      {session ? (
        session?.isAdmin ? (
          <>{children}</>
        ) : (
          <div className='container mx-auto py-24'>
            <p>You are not admin user, {session?.user?.name}</p>
            <button
              className="bg-red-500 text-white rounded-md px-2 py-1 hover:opacity-80"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </div>
        )
      ) : (
        <div className='container mx-auto py-24'>
          Not signed in <br />
          <button
            className="bg-red-500 text-white rounded-md px-2 py-1 hover:opacity-80"
            onClick={() => signIn()}
          >
            Sign in
          </button>
        </div>
      )}
    </>
  )
}

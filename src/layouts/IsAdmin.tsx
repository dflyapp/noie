import { useSession, signIn, signOut } from 'next-auth/react'

export default function IsAdmin({ children }: JSX.ElementChildrenAttribute) {
  const { data: session } = useSession()

  return (
    <>
      {session ? (
        session?.isAdmin ? (
          <>{children}</>
        ) : (
          <div className="container mx-auto py-24 px-2 md:px-0">
            <p>You are not admin user, {session?.user?.name}</p>
            <button
              className="rounded-md bg-red-500 px-2 py-1 text-white hover:opacity-80"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </div>
        )
      ) : (
        <div className="container mx-auto py-24 px-2 md:px-0">
          Not signed in <br />
          <button
            className="rounded-md bg-red-500 px-2 py-1 text-white hover:opacity-80"
            onClick={() => signIn()}
          >
            Sign in
          </button>
        </div>
      )}
    </>
  )
}

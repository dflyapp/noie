import { useSession, signIn, signOut } from 'next-auth/react'

export default function IsAdmin({ children }: JSX.ElementChildrenAttribute) {
  const { data: session } = useSession()

  return (
    <div className="container mx-auto w-full py-12 px-2 md:w-1/2 md:px-0">
      {session ? (
        session?.isAdmin ? (
          <>{children}</>
        ) : (
          <div>
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
        <div>
          Not signed in <br />
          <button
            className="rounded-md bg-red-500 px-2 py-1 text-white hover:opacity-80"
            onClick={() => signIn()}
          >
            Sign in
          </button>
        </div>
      )}
    </div>
  )
}

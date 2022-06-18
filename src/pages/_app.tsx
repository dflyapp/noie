import type { AppProps } from 'next/app'
import { useState } from 'react'
import { SessionProvider } from 'next-auth/react'

import 'styles/global.css'
import { LoadingContext } from 'context/loading'
import { UserContext } from 'context/user'
import styled from 'styled-components'

const LoadingWrapper = styled.section`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0.4;
  display: flex;
  align-items: center;
  justify-content: center;
`

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [loading, setLoading] = useState<boolean>(false)
  const [user, setUser] = useState<Record<string, unknown> | null>(null)

  return (
    <SessionProvider session={session}>
      <UserContext.Provider value={{ user, setUser }}>
        <LoadingContext.Provider value={{ loading, setLoading }}>
          <Component {...pageProps} />
          {loading && (
            <LoadingWrapper>
              <div className="text-white">Loading...</div>
            </LoadingWrapper>
          )}
        </LoadingContext.Provider>
      </UserContext.Provider>
    </SessionProvider>
  )
}

export default MyApp

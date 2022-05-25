import type { AppProps } from 'next/app'
import { useState } from 'react'

import 'styles/global.css'
import { LoadingContext } from 'context/loading'
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

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <>
      <LoadingContext.Provider value={{ loading, setLoading }}>
        <Component {...pageProps} />
        {loading && (
          <LoadingWrapper>
            <div className="text-white">Loading...</div>
          </LoadingWrapper>
        )}
      </LoadingContext.Provider>
    </>
  )
}

export default MyApp

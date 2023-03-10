import type { NextPage } from 'next'
import Head from 'next/head'

import styled from 'styled-components'

import Header from 'layouts/Header'
import Cover from 'components/Cover'
import Footer from 'layouts/Footer'

const Red = styled.p`
  color: grey;
`

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NOIE Architect</title>
        <meta name="description" content="Tư vấn thiết kế và thi công nhà ở" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Cover />
        <Footer />
      </main>
    </div>
  )
}

export default Home

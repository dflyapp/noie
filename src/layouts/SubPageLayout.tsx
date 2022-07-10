import { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

interface LayoutProps {
  children: ReactNode
  metaTitle: string
  metaDescription: string
}

export default function SubPageLayout({
  children,
  metaTitle,
  metaDescription,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>

      <h1 className="text-center text-brown">
        <Link href="/">Logo</Link>
      </h1>
      <div className="h-screen bg-gray-500 pt-12">
        <div className="mx-24 bg-white py-4 opacity-80">
          <h1 className="text-center uppercase">{metaDescription}</h1>
        </div>
      </div>
      {children}
      <footer className="py-12">
        <div className="flex justify-center">
          <button className="bg-brown px-4 py-2 uppercase text-white">
            Đăng ký tư vấn
          </button>
        </div>
      </footer>
    </>
  )
}

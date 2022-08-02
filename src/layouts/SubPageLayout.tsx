import { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import SubPageLogo from 'assets/subpage/logo.png'
import Page1LogoSquare from 'assets/subpage/page1-logo-square.png'
import Cover1 from 'assets/subpage/cover1.jpg'
import Cover2 from 'assets/subpage/cover2.jpg'
import Cover3 from 'assets/subpage/cover3.jpg'

interface LayoutProps {
  children: ReactNode
  metaTitle: string
  metaDescription: string
  coverTitle: string
  coverDescription?: string
  pageNumber: number
}

export default function SubPageLayout({
  children,
  metaTitle,
  metaDescription,
  coverTitle,
  coverDescription,
  pageNumber,
}: LayoutProps) {
  let backgroundLink: string = ''

  if (pageNumber === 1) {
    backgroundLink = `url(${Cover1.src})`
  }

  if (pageNumber === 2) {
    backgroundLink = `url(${Cover2.src})`
  }

  if (pageNumber === 3) {
    backgroundLink = `url(${Cover3.src})`
  }

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>

      <div className="text-center text-brown w-72 mx-auto my-12">
        <Link className="cursor-pointer" href="/" passHref>
          <Image
            className="cursor-pointer"
            src={SubPageLogo}
            alt="logo"
          />
        </Link>
      </div>
      <div
        className="h-screen bg-gray-500 pt-12"
        style={{ backgroundSize: 'cover', backgroundImage: backgroundLink }}
      >
        <div className="-mt-4 mb-4 flex items-center justify-center">
          <Image src={Page1LogoSquare} alt="image" width={150} height={150} />
        </div>
        <div className="mx-auto w-fit bg-white px-24 py-4 opacity-80">
          <h1 className="text-center uppercase tracking-widest">
            {coverTitle}
          </h1>
          {coverDescription && (
            <p className="text-center uppercase tracking-widest">
              {coverDescription}
            </p>
          )}
          <div
            className="mx-auto mb-8"
            style={{ width: '80px', height: '2px', background: 'black' }}
          ></div>
        </div>
      </div>
      {children}
      <footer className="bg-gray-200 py-12">
        <div className="flex justify-center">
          <h3
            className="inline-block w-fit bg-brown py-2 px-12 text-center text-2xl text-white"
            style={{ letterSpacing: '5px' }}
          >
            ĐĂNG KÝ TƯ VẤN
          </h3>
        </div>
        <div className="mt-8 text-center text-gray-800">
          <p>
            Địa chỉ: ADAM REAL TOWER Số 9 Võ Thị Sáu, Phường Đa Kao, Quận 1,
            Thành Phố Hồ Chí Minh
          </p>
          <p>Hotline: 0931 266 890</p>
        </div>
      </footer>
    </>
  )
}

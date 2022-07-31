import { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import SubPageLogo from 'assets/subpage/logo.svg'
import SubPageLogoSquare from 'assets/subpage/logo-square.svg'
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

      <h1 className="text-center text-brown">
        <Link className="cursor-pointer" href="/" passHref>
          <Image
            className="cursor-pointer"
            src={SubPageLogo}
            alt="logo"
            width={300}
            height={100}
          />
        </Link>
      </h1>
      <div
        className="h-screen bg-gray-500 pt-12"
        style={{ backgroundSize: 'cover', backgroundImage: backgroundLink }}
      >
        <div className="my-12 flex items-center justify-center">
          <Image src={SubPageLogoSquare} alt="image" />
        </div>
        <div className="mx-auto w-fit bg-white px-24 py-4 opacity-80">
          <h1 className="text-center uppercase tracking-widest">
            {coverTitle}
          </h1>
          {coverDescription && <p className="text-center uppercase tracking-widest">{coverDescription}</p>}
          <div
            className="mx-auto mb-8"
            style={{ width: '80px', height: '2px', background: 'black' }}
          ></div>
        </div>
      </div>
      {children}
      <footer className="py-12 bg-gray-200">
        <div className="flex justify-center">
          <h3 className="text-2xl py-2 inline-block w-fit bg-brown px-12 text-center text-white">
            ĐĂNG KÝ TƯ VẤN
          </h3>
        </div>
        <div className="text-center text-gray-800 mt-8">
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

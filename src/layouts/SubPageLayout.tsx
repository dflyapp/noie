import { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import Hamburger from './Hamburger'
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

      <div className="mx-auto my-12 hidden w-72 text-center text-brown lg:block">
        <Link className="cursor-pointer" href="/" passHref>
          <Image className="cursor-pointer" src={SubPageLogo} alt="logo" />
        </Link>
      </div>

      {/* mobile */}
      <div className="mx-auto my-12 block flex items-center justify-between px-4 lg:hidden">
        <Link className="cursor-pointer" href="/" passHref>
          <Image className="cursor-pointer" src={SubPageLogo} alt="logo" />
        </Link>
        <div className="ml-12 sm:ml-24">
          <Hamburger className="text-brown" />
        </div>
      </div>

      <div
        className="h-screen bg-gray-500 pt-12"
        style={{ backgroundSize: 'cover', backgroundImage: backgroundLink }}
      >
        <div className="-mt-4 mb-4 flex items-center justify-center">
          <Image
            placeholder="blur"
            src={Page1LogoSquare}
            alt="image"
            width={150}
            height={150}
          />
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
          <a
            href="tel:+0931266890"
            className="inline-block w-fit cursor-pointer bg-brown py-2 px-12 text-center text-2xl text-white"
            style={{ letterSpacing: '5px' }}
          >
            ĐĂNG KÝ TƯ VẤN
          </a>
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

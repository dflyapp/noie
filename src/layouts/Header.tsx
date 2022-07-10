import styled from 'styled-components'
import { useEffect, useState } from 'react'
import Link from 'next/link'

import Logo from 'assets/logo.webp'

const Menu = styled.ul`
  li {
    padding: 0 1.5rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    &:hover {
      opacity: 0.5;
    }
  }
`

const Register = styled.a`
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`

const Wrapper = styled.header`
  &.is-scrolled {
    background: rgba(0, 0, 0, 0.9);
  }
`

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const listenScrollEvent = (e: any) => {
    if (window.scrollY > 400) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  }, [])
  return (
    <Wrapper
      className={`z-90 fixed top-0 left-0 z-10 flex w-full items-center justify-between px-2 ${
        scrolled ? 'is-scrolled py-2' : 'pt-4 pb-8 '
      }`}
    >
      <div className="ml-2 lg:ml-12">
        <a className="cursor-pointer text-white">
          <img src={Logo.src} className={scrolled ? 'w-12' : 'w-24'} />
        </a>
      </div>
      <div>
        <Menu className="hidden uppercase text-white lg:flex">
          <li>
            <Link href="/gioi-thieu">
              <a>giới thiệu</a>
            </Link>
          </li>
          <li>
            <Link href="/quy-trinh-thiet-ke">
              <a>quy trình thiết kế</a>
            </Link>
          </li>
          <li>
            <Link href="/quy-trinh-thi-cong">
              <a>quy trình thi công</a>
            </Link>
          </li>
        </Menu>
      </div>
      <div className="mr-2 lg:mr-12">
        <Register className="uppercase text-white">Đăng ký tư vấn</Register>
      </div>
    </Wrapper>
  )
}

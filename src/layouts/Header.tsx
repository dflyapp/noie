import styled from 'styled-components'
import { useEffect, useState } from 'react'

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
  background-color: rgba(0,0,0, 0.3);
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`

const Wrapper = styled.header`
  &.is-scrolled {
    background: rgba(0,0,0,0.4);
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
    <Wrapper className={`z-90 fixed top-0 w-full left-0 pt-4 pb-8 z-10 px-2 flex justify-between items-center ${scrolled && 'is-scrolled'}`}>
      <div className='ml-2 lg:ml-12'>
        <a className='text-white cursor-pointer'>
          <img src={Logo.src} width="120"/>
        </a>
      </div>
      <div>
        <Menu className='text-white uppercase hidden lg:flex'>
          <li>giới thiệu</li>
          <li>dịch vụ</li>
          <li>dự án</li>
          <li>câu chuyện</li>
          <li>liên hệ</li>
        </Menu>
      </div>
      <div className='mr-2 lg:mr-12'>
        <Register className='uppercase text-white'>Đăng ký tư vấn</Register>
      </div>
    </Wrapper>
  )
}
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import styled from 'styled-components'

import Moon from 'assets/svg/horizon-moon.svg'
import Plus from 'assets/svg/plus.svg'
import FooterRightLogo from 'assets/footer-right-logo.webp'
import Logo from 'assets/logo.webp'
import FooterBg from 'assets/footer-bg.webp'

const BackgroundImage = styled.div`
  background-image: url(${FooterBg.src});
  background-size: cover;
  background-position: center;
`

export default function Footer() {
  return (
    <>
      <section className="pt-48">
        <div className="container relative mx-auto mt-24">
          <img
            className="l-0 r-0 absolute ml-auto mr-auto text-center"
            style={{ left: 0, right: 0, top: '-100px' }}
            src={Moon.src}
            alt="moon"
          />

          <p className="mx-auto w-10/12 text-center text-4xl uppercase text-brown">
            <span className="relative">
              NOIE
              <img
                className="l-0 t-0 absolute hidden lg:block"
                style={{ left: '-50px', top: '-50px' }}
                src={Plus.src}
                alt="plug"
              />
            </span>{' '}
            VIỆT NAM cam kết đồng hành cùng gia chủ để xây dựng nên những không
            gian sống trãi nghiệm tối ưu nhất.
          </p>

          <div className="mt-12 flex items-center justify-between">
            <h1 className="ml-4 mt-0 text-2xl uppercase text-gray-400 lg:ml-24 lg:text-4xl">
              Thông tin
            </h1>
            <div>
              <Image
                src={FooterRightLogo}
                alt="right logo"
                width={200}
                height={30}
              />
            </div>
          </div>
        </div>
      </section>
      {/* background image */}
      <BackgroundImage className="bg-gray-300 pb-48">
        <div className="container mx-auto flex justify-between">
          <div className="text-center uppercase text-white">
            <h1 className="font-bold">Hãy liên hệ với chúng tôi</h1>
            <p className="font-light">info.noie@gmail.com</p>
            <div className="mt-24 text-center">
              <p className="font-light">
                Địa chỉ: ADAM REAL TOWER Số 9 Võ Thị Sáu, Phường Đa Kao, Quận 1,
                Thành Phố Hồ Chí Minh
              </p>
              <p className="font-light">Hotline: 0931266890</p>
            </div>
          </div>
          {/* logo */}
          <div className="pt-12">
            <Image src={Logo} alt="logo" width={150} height={130} />
          </div>
        </div>
      </BackgroundImage>
    </>
  )
}

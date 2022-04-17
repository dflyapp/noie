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
        <div className="mt-24 container mx-auto relative">
          <img
            className="absolute text-center l-0 r-0 ml-auto mr-auto"
            style={{ left: 0, right: 0, top: '-100px' }}
            src={Moon.src}
            alt="moon"
          />

          <p className="text-brown text-center uppercase text-4xl w-10/12 mx-auto">
            <span className='relative'>
              NOIE
              <img
                className="absolute l-0 t-0 hidden lg:block"
                style={{ left: '-50px', top: '-50px' }}
                src={Plus.src}
                alt="plug"
              />
            </span>{' '}
            VIỆT NAM cam kết đồng hành cùng gia chủ để xây dựng nên những không
            gian sống trãi nghiệm tối ưu nhất.
          </p>

          <div className="flex justify-between items-center mt-12">
            <h1 className="text-2xl lg:text-4xl text-gray-400 uppercase ml-4 lg:ml-24 mt-0">Thông tin</h1>
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
          <div className="text-white uppercase text-center">
            <h1 className="font-bold">Hãy liên hệ với chúng tôi</h1>
            <p className="font-light">info.noie@gmail.com</p>
            <div className="text-center mt-24">
              <p className="font-light">Địa chỉ</p>
              <p className="font-light">Hotline</p>
              <p className="font-bold">Mạng xã hội</p>
            </div>
          </div>
          {/* logo */}
          <div className='pt-12'>
            <Image src={Logo} alt="logo" width={150} height={130} />
          </div>
        </div>
      </BackgroundImage>
    </>
  )
}

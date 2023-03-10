/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import styled from 'styled-components'
import { useRef } from 'react'

import HomeBg from '../assets/home_bg.jpg'
import BigN from '../assets/logo-n.webp'
import Logo from 'assets/logo.webp'
import HL from 'assets/highlight.svg'

import Detail1a from 'assets/Detail1a.webp'
import Detail2a from 'assets/Detail2a.webp'
import Detail2b from 'assets/Detail2b.webp'
import Detail3a from 'assets/Detail3a.webp'
import Detail3b from 'assets/Detail3b.webp'
import Detail4a from 'assets/Detail4a.webp'
import Detail5a from 'assets/Detail5a.webp'

import DetailAbout2 from 'assets/DetailAbout2.webp'
import DetailAbout3 from 'assets/DetailAbout3.webp'

import { useOnScreen } from 'hooks/useOnScreen'

const CoverWrapper = styled.section`
  background-image: url(${HomeBg.src});
`
const Features = styled.ul`
  li {
    text-transform: uppercase;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.2rem;
  }
`

export default function Cover() {
  const ref1a = useRef(null)
  const isVisible1a = useOnScreen(ref1a)

  const ref2a = useRef(null)
  const isVisible2a = useOnScreen(ref2a)

  const ref3a = useRef(null)
  const isVisible3a = useOnScreen(ref3a)

  const ref4a = useRef(null)
  const isVisible4a = useOnScreen(ref4a)

  const ref5a = useRef(null)
  const isVisible5a = useOnScreen(ref5a)

  return (
    <>
      <CoverWrapper className="relative h-screen w-screen bg-gray-200">
        <div className="absolute bottom-16 pl-4 lg:pl-48">
          <h1 className="relative z-0 text-4xl uppercase text-brown lg:text-8xl">
            <img
              src={BigN.src}
              alt="logo"
              className="absolute z-10 hidden lg:block"
              style={{ width: '220px', left: '-140px', top: '-130px' }}
            />
            <span className="relative z-20">NOIE Việt Nam</span>
          </h1>
          <span className="font-light text-white">
            Chuyên gia SÁNG TẠO - THIẾT KẾ TRẢI NGHIỆM KHÔNG GIAN và THI CÔNG
            <br /> Thuộc Công ty TNHH Kiến Trúc Xây Dựng NOIE Việt Nam
          </span>
        </div>
      </CoverWrapper>

      {/* about 1 */}
      <section className="flex flex-wrap-reverse items-start lg:flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="mt-12 flex items-center justify-center bg-gray-300 p-2 lg:mt-0 lg:p-48">
            <Image src={Logo} alt="logo" />
          </div>
          <img
            alt="dich vu"
            className="mt-12 hidden w-full lg:block"
            src={DetailAbout2.src}
          />
          <img
            alt="dich vu"
            className="mt-12 hidden w-full lg:block"
            src={DetailAbout3.src}
          />
        </div>

        <div className="top-24 flex w-full items-center px-4 pt-24 lg:sticky lg:w-1/2">
          <div className="px-2 lg:px-12">
            <h2 className="text-bold uppercase text-brown">Về chúng tôi</h2>
            <div className="font-light">
              <p className="mt-2">
                Tại NOIE Việt Nam, chúng tôi xác định rõ trách nhiệm đồng hành
                cùng gia chủ trong quá trình thiết kế và thi công, xây dựng môi
                trường chuyên nghiệp hóa hình ảnh chúng tôi trong mắt đối tác.
              </p>
              <p className="mt-2">
                Chúng tôi mong muốn tạo ra những không gian đề cao tính hợp lý,
                thông qua những trãi nghiệm - việc nghiên cứu và nắm bắt nhu cầu
                của từng chủ nhà. Từ đó tạo ra những giải pháp trong SÁNG TẠO -
                THIẾT KẾ TRÃI NGHIỆM KHÔNG GIAN và THI CÔNG.
              </p>
              <p className="mt-2">
                Chúng tôi luôn tin rằng thông qua những giải pháp đó, NOIE Việt
                Nam sẽ phần nào giúp truyền tải mong muốn, sở thích và các giá
                trị cốt lõi cũng như cá tính hóa hình ảnh của gia chủ theo một
                cách tối ưu nhất.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 1a */}
      <section className="flex flex-wrap items-start">
        <div className="top-24 mt-12 flex w-full items-center px-4 pt-0 lg:sticky lg:mt-0 lg:w-1/2 lg:pt-24">
          <div className="px-2 text-right lg:px-12">
            <strong className="uppercase">Dịch vụ</strong>
            <h2 className="text-bold mt-3 uppercase text-brown">
              TƯ VẤN THIẾT KẾ VÀ THI CÔNG
            </h2>
            <div className="font-light">
              <div className="mt-2 flex items-end justify-end">
                <p className="w-full text-justify leading-6 lg:w-1/2">
                  Với quy trình tập trung vào khai thác yếu tố khác biệt, cá
                  tính hóa của từng gia chủ, chúng tối luôn đồng hành cùng khách
                  hàng để tạo ra những không gian tối ưu nhất về công năng, thẩm
                  mỹ cũng như chi phí tốt.
                </p>
              </div>
              <p className="mt-2 hidden lg:block">
                Dịch vụ của chúng tôi bao gồm:
              </p>
              <Features className="hidden lg:block ">
                <li className="relative z-0">
                  {isVisible1a && (
                    <img
                      alt="dich vu"
                      src={HL.src}
                      className="absolute right-0 z-20"
                      style={{ height: '30px', right: '-40px' }}
                    />
                  )}
                  <span className="relative z-30">Thiết kế kiến trúc +</span>
                </li>
                <li className="relative z-0">
                  {isVisible2a && (
                    <img
                      alt="dich vu thiet ke kien truc"
                      src={HL.src}
                      className="absolute right-0 z-20"
                      style={{ height: '30px', right: '-40px' }}
                    />
                  )}
                  <span className="relative z-30">Thiết kế nội thất +</span>
                </li>
                <li className="relative z-0">
                  {isVisible3a && (
                    <img
                      alt="dich vu thiet ke noi that"
                      src={HL.src}
                      className="absolute right-0 z-20"
                      style={{ height: '30px', right: '-40px' }}
                    />
                  )}
                  <span className="relative z-30">Thi công phần thô +</span>
                </li>
                <li className="relative z-0">
                  {isVisible4a && (
                    <img
                      alt="dich vu thi cong phan tho"
                      src={HL.src}
                      className="absolute right-0 z-20"
                      style={{ height: '30px', right: '-40px' }}
                    />
                  )}
                  <span className="relative z-30">
                    Thi công phần hoàn thiện +
                  </span>
                </li>
                <li className="relative z-0">
                  {' '}
                  {isVisible5a && (
                    <img
                      alt="dich vu thi cong hoan thien"
                      src={HL.src}
                      className="absolute right-0 z-20"
                      style={{ height: '30px', right: '-40px' }}
                    />
                  )}
                  <span className="relative z-30">
                    Thi công phần phần nội thất +
                  </span>
                </li>
              </Features>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="mt-24 block text-center lg:hidden">
            Thiết kế kiến trúc
          </h2>
          <div ref={ref1a}>
            <img className="mt-12 w-full" src={Detail1a.src} alt="1a" />
          </div>
          <h2 className="mt-24 block text-center lg:hidden">
            Thiết kế nội thất
          </h2>
          <div ref={ref2a}>
            <img className="mt-12 w-full" src={Detail2a.src} alt="2a" />
          </div>
          <img alt="dich vu" className="mt-12 w-full" src={Detail2b.src} />
          <h2 className="mt-24 block text-center lg:hidden">
            Thi công phần thô
          </h2>
          <div ref={ref3a}>
            <img className="mt-12 w-full" src={Detail3a.src} alt="3a" />
          </div>
          <img alt="dich vu" className="mt-12 w-full" src={Detail3b.src} />
          <h2 className="mt-24 block text-center lg:hidden">
            Thi công phần hoàn thiện
          </h2>
          <div ref={ref4a}>
            <img className="mt-12 w-full" src={Detail4a.src} alt="4a" />
          </div>
          <h2 className="mt-24 block text-center lg:hidden">
            Thi công phần nội thất
          </h2>
          <div ref={ref5a}>
            <img className="mt-12 w-full" src={Detail5a.src} alt="5a" />
          </div>
        </div>
      </section>
    </>
  )
}

import Image from 'next/image'
import styled from 'styled-components'

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
  return (
    <>
      <CoverWrapper className="h-screen w-screen relative bg-gray-200">
        <div className="pl-4 lg:pl-48 absolute bottom-16">
          <h1 className="text-brown text-4xl lg:text-8xl uppercase relative z-0">
            <img
              src={BigN.src}
              alt="logo"
              className="hidden lg:block absolute z-10"
              style={{ width: '220px', left: '-140px', top: '-130px' }}
            />
            <span className="relative z-20">NOIE Việt Nam</span>
          </h1>
          <span className="text-white font-light">
            Chuyên gia SÁNG TẠO - THIẾT KẾ TRẢI NGHIỆM KHÔNG GIAN và THI CÔNG
            <br /> Thuộc Công ty TNHH Kiến Trúc Xây Dựng NOIE Việt Nam
          </span>
        </div>
      </CoverWrapper>

      {/* about 1 */}
      <section className="flex flex-wrap items-start">
        <div className="w-full lg:w-1/2">
          <div className="p-2 lg:p-48 bg-gray-300 flex justify-center items-center">
            <Image src={Logo} alt="logo" />
          </div>
          <img className="mt-12 w-full" src={DetailAbout2.src} />
          <img className="mt-12 w-full" src={DetailAbout3.src} />
        </div>

        <div className="w-full lg:w-1/2 px-4 flex items-center sticky top-24 pt-24">
          <div className="px-2 lg:px-12">
            <h2 className="uppercase text-brown text-bold">Về chúng tôi</h2>
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
        <div className="w-full lg:w-1/2 px-4 flex items-center sticky top-24 pt-24">
          <div className="px-2 lg:px-12 text-right">
            <strong className="uppercase">Dịch vụ</strong>
            <h2 className="mt-3 uppercase text-brown text-bold">
              TƯ VẤN THIẾT KẾ VÀ THI CÔNG
            </h2>
            <div className="font-light">
              <div className="mt-2 flex items-end justify-end">
                <p className="text-justify leading-6 w-full lg:w-1/2">
                  Với quy trình tập trung vào khai thác yếu tố khác biệt, cá
                  tính hóa của từng gia chủ, chúng tối luôn đồng hành cùng khách
                  hàng để tạo ra những không gian tối ưu nhất về công năng, thẩm
                  mỹ cũng như chi phí tốt.
                </p>
              </div>
              <p className="mt-2">Dịch vụ của chúng tôi bao gồm:</p>
              <Features>
                <li className="relative">
                  <img
                    src={HL.src}
                    className="absolute right-0 z-20 hidden lg:block"
                    style={{ height: '24px', right: '-100px' }}
                  />
                  <span className="relative z-30">Thiết kế kiến trúc +</span>
                </li>
                <li className="relative">Thiết kế nội thất +</li>
                <li>Thi công phần thô +</li>
                <li>Thi công phần hoàn thiện +</li>
              </Features>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img className="mt-12" src={Detail1a.src} />
          <img className="mt-12" src={Detail2a.src} />
          <img className="mt-12" src={Detail2b.src} />
          <img className="mt-12" src={Detail3a.src} />
          <img className="mt-12" src={Detail3b.src} />
          <img className="mt-12" src={Detail4a.src} />
          <img className="mt-12" src={Detail5a.src} />
        </div>
      </section>
    </>
  )
}

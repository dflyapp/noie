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

const About2 = styled.div`
  background-image: url(${DetailAbout2.src});
  background-size: cover;
  background-position: center;
`

const About3 = styled.div`
  background-image: url(${DetailAbout3.src});
  background-size: cover;
  background-position: center;
`

const RightBlock1a = styled.div`
  background-image: url(${Detail1a.src});
`
const RightBlock2a = styled.div`
  background-image: url(${Detail2a.src});
  background-size: cover;
  background-position: center;
`

const RightBlock2b = styled.div`
  background-image: url(${Detail2b.src});
`
const RightBlock5a = styled.div`
  background-image: url(${Detail5a.src});
`
const RightBlock3a = styled.div`
  background-image: url(${Detail3a.src});
`
const RightBlock3b = styled.div`
  background-image: url(${Detail3b.src});
`
const RightBlock4a = styled.div`
  background-image: url(${Detail4a.src});
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
            <img src={BigN.src} alt="logo" className='hidden lg:block absolute z-10' style={{width: '220px', left: '-140px', top: '-130px'}} />
            <span className='relative z-20'>NOIE Việt Nam</span>
          </h1>
          {/* <img src={HomeBg.src} /> */}
          <span className="text-white font-light">
            Chuyên gia SÁNG TẠO - THIẾT KẾ TRẢI NGHIỆM KHÔNG GIAN và THI CÔNG
            <br /> Thuộc Công ty TNHH Kiến Trúc Xây Dựng NOIE Việt Nam
          </span>
        </div>
      </CoverWrapper>

      {/* about 1 */}
      <section className="h-auto lg:h-screen flex flex-wrap">
        <div className="w-full lg:w-1/2 px-2 lg:px-48 bg-gray-300 flex justify-center items-center">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="w-full lg:w-1/2 px-4 flex items-center ">
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

      {/* about 2 */}
      <section className="h-auto lg:h-screen flex flex-wrap">
        <About2 className="w-full lg:w-1/2 px-2 lg:px-48 bg-gray-300" />
        <div className="w-full lg:w-1/2 px-4 flex items-center ">
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

      {/* about 3 */}
      <section className="h-auto lg:h-screen flex flex-wrap">
        <About3 className="w-full lg:w-1/2 px-2 lg:px-48 bg-gray-300" />
        <div className="w-full lg:w-1/2 px-4 flex items-center ">
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
      <section className="h-auto lg:h-screen flex flex-wrap">
        <div className="w-full lg:w-1/2 px-4 flex items-center ">
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
        <RightBlock1a className="w-full lg:w-1/2" />
      </section>
      {/* 2a */}
      <section className="mt-12 h-auto lg:h-screen flex flex-wrap">
        <div className="w-full lg:w-1/2 px-4 flex items-center ">
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
                <li>Thiết kế kiến trúc +</li>
                <li className="relative">
                  <img
                    src={HL.src}
                    className="absolute right-0 z-20 hidden lg:block"
                    style={{ height: '24px', right: '-100px' }}
                  />
                  <span className="relative z-30">Thiết kế nội thất +</span>
                </li>
                <li>Thi công phần thô +</li>
                <li>Thi công phần hoàn thiện +</li>
                <li>Thi công phần nội thất +</li>
              </Features>
            </div>
          </div>
        </div>
        <RightBlock2a className="w-full lg:w-1/2" />
      </section>
      {/* 2a */}
      <section className="mt-12 h-auto lg:h-screen flex flex-wrap">
        <div className="w-full lg:w-1/2 px-4 flex items-center ">
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
                <li>Thiết kế kiến trúc +</li>
                <li className="relative">
                  <img
                    src={HL.src}
                    className="absolute right-0 z-20 hidden lg:block"
                    style={{ height: '24px', right: '-100px' }}
                  />
                  <span className="relative z-30">Thiết kế nội thất +</span>
                </li>
                <li>Thi công phần thô +</li>
                <li>Thi công phần hoàn thiện +</li>
                <li>Thi công phần nội thất +</li>
              </Features>
            </div>
          </div>
        </div>
        <RightBlock2b className="w-full lg:w-1/2" />
      </section>
      {/* 3a */}
      <section className="mt-12 h-auto lg:h-screen flex flex-wrap">
        <div className="w-full lg:w-1/2 px-4 flex items-center ">
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
                <li>Thiết kế kiến trúc +</li>
                <li>Thiết kế nội thất +</li>
                <li className="relative">
                  <img
                    src={HL.src}
                    className="absolute right-0 z-20 hidden lg:block"
                    style={{ height: '24px', right: '-100px' }}
                  />
                  <span className="relative z-30">Thi công phần thô +</span>
                </li>

                <li>Thi công phần hoàn thiện +</li>
                <li>Thi công phần nội thất +</li>
              </Features>
            </div>
          </div>
        </div>
        <RightBlock3a className="w-full lg:w-1/2" />
      </section>
      {/* 3b */}
      <section className="mt-12 h-auto lg:h-screen flex flex-wrap">
        <div className="w-full lg:w-1/2 px-4 flex items-center ">
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
                <li>Thiết kế kiến trúc +</li>
                <li>Thiết kế nội thất +</li>
                <li className="relative">
                  <img
                    src={HL.src}
                    className="absolute right-0 z-20 hidden lg:block"
                    style={{ height: '24px', right: '-100px' }}
                  />
                  <span className="relative z-30">Thi công phần thô +</span>
                </li>

                <li>Thi công phần hoàn thiện +</li>
                <li>Thi công phần nội thất +</li>
              </Features>
            </div>
          </div>
        </div>
        <RightBlock3b className="w-full lg:w-1/2" />
      </section>
      {/* 4a */}
      <section className="mt-12 h-auto lg:h-screen flex flex-wrap">
        <div className="w-full lg:w-1/2 px-4 flex items-center ">
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
                <li>Thiết kế kiến trúc +</li>
                <li>Thiết kế nội thất +</li>
                <li>Thi công phần thô +</li>
                <li className="relative">
                  <img
                    src={HL.src}
                    className="absolute right-0 z-20 hidden lg:block"
                    style={{ height: '24px', right: '-100px' }}
                  />
                  <span className="relative z-30">
                    Thi công phần hoàn thiện +
                  </span>
                </li>
                <li>Thi công phần nội thất +</li>
              </Features>
            </div>
          </div>
        </div>
        <RightBlock4a className="w-full lg:w-1/2" />
      </section>
      {/* 5a */}
      <section className="mt-12 mb-12 h-auto lg:h-screen flex flex-wrap">
        <div className="w-full lg:w-1/2 px-4 flex items-center ">
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
                <li>Thiết kế kiến trúc +</li>
                <li>Thiết kế nội thất +</li>
                <li>Thi công phần thô +</li>
                <li>Thi công phần hoàn thiện +</li>
                <li className="relative">
                  <img
                    src={HL.src}
                    className="absolute right-0 z-20 hidden lg:block"
                    style={{ height: '24px', right: '-100px' }}
                  />
                  <span className="relative z-30">
                    Thi công phần nội thất +
                  </span>
                </li>
              </Features>
            </div>
          </div>
        </div>
        <RightBlock5a className="w-full lg:w-1/2" />
      </section>

      {/* about us */}
      {/* <div className="flex flex-wrap">
        <div className="w-1/2 px-4">
          <h1>heading 1</h1>
        </div>
        <div className="w-1/2 px-4">
          <h2 className="text-primary mt-12">+ VỀ CHÚNG TÔI</h2>
          <p className="mt-8">
            Tại DPLUS Việt Nam, chúng tôi xác định rõ trách nhiệm đồng hành cùng
            doanh nghiệp trong quá trình thiết kế, xây dựng môi trường làm việc
            nhằm phát triển sự gắn kết của nhân viên cũng như chuyên nghiệp hóa
            hình ảnh của doanh nghiệp trong mắt đối tác.
          </p>
          <p className="mt-8">
            Chúng tôi mong muốn tạo ra những không gian làm việc đề cao tính hợp
            lý, thông qua việc nghiên cứu và nắm bắt nhu cầu của doanh nghiệp.
            Từ đó chuyển hóa thành những giải pháp trong SÁNG TẠO &amp; THIẾT KẾ
            TRẢI NGHIỆM KHÔNG GIAN LÀM VIỆC
          </p>
          <p className="mt-8">
            Chúng tôi luôn tin rằng thông qua những giải pháp đó, DPLUS sẽ phần
            nào giúp truyền tải tầm nhìn, sứ mệnh và các giá trị cốt lõi của
            doanh nghiệp cũng như cá tính hóa những hình ảnh của doanh nghiệp
            theo một cách tối ưu nhất.
          </p>
        </div>
      </div> */}

      {/* about us */}
      {/* <div className="flex flex-wrap">
        <div className="w-1/2" px-4>
          <h2 className="text-primary mt-12">+ VỀ CHÚNG TÔI</h2>
          <p className="mt-8">
            Tại DPLUS Việt Nam, chúng tôi xác định rõ trách nhiệm đồng hành cùng
            doanh nghiệp trong quá trình thiết kế, xây dựng môi trường làm việc
            nhằm phát triển sự gắn kết của nhân viên cũng như chuyên nghiệp hóa
            hình ảnh của doanh nghiệp trong mắt đối tác.
          </p>
          <p className="mt-8">
            Chúng tôi mong muốn tạo ra những không gian làm việc đề cao tính hợp
            lý, thông qua việc nghiên cứu và nắm bắt nhu cầu của doanh nghiệp.
            Từ đó chuyển hóa thành những giải pháp trong SÁNG TẠO &amp; THIẾT KẾ
            TRẢI NGHIỆM KHÔNG GIAN LÀM VIỆC
          </p>
          <p className="mt-8">
            Chúng tôi luôn tin rằng thông qua những giải pháp đó, DPLUS sẽ phần
            nào giúp truyền tải tầm nhìn, sứ mệnh và các giá trị cốt lõi của
            doanh nghiệp cũng như cá tính hóa những hình ảnh của doanh nghiệp
            theo một cách tối ưu nhất.
          </p>
        </div>
        <div className="w-1/2 px-4">
          <img
            className="mt-8"
            src="https://dplusvn.com/wp-content/uploads/2019/07/dplusnew.png"
            alt="plus"
          />
          <img
            className="mt-8"
            src="https://dplusvn.com/wp-content/uploads/2020/01/dstudio-cong-ty-thiet-ke-van-phong-dep-uy-tin.jpg"
            alt="plus"
          />
          <img
            className="mt-8"
            src="https://dplusvn.com/wp-content/uploads/2022/01/cong-ty-kien-truc-thiet-ke-dplus.jpg"
            alt="plus"
          />
        </div>
      </div> */}

      {/* headline */}
      {/* <h1 className="w-2/3 mx-auto text-center text-gray-500 my-48">
        DPLUS cam kết đồng hành cùng doanh nghiệp để xây dựng hình ảnh và môi
        trường làm việc chuyên nghiệp nhất.
      </h1> */}

      {/* banner */}
      {/* <section className='bg-gray-200 py-24'>
        <div className='w-1/2 mx-auto p-12 bg-primary'>
          <p className='text-white text-center'>
            Chúng tôi luôn tâm niệm: Bản chất của thiết kế vốn là chăm chút cho
            từng chi tiết nhỏ nhất của mỗi sản phẩm được tạo ra. Chúng tôi muốn
            khẳng định rằng, DPLUS không chỉ dừng lại ở các bản thiết kế trên
            giấy mà còn quan tâm nhiều đến giá trị thật của mỗi sản phẩm khi ứng
            dụng ngoài cuộc sống.
          </p>
        </div>
      </section> */}
    </>
  )
}

import Image from 'next/image'

import SubPageLayout from 'layouts/SubPageLayout'
import Page2Bottom from 'assets/subpage/page2-bottom.jpg'
import Icon from './Icon'

export default function QuyTrinhThietKe() {
  return (
    <SubPageLayout
      metaTitle="NOIE - Thiết kế"
      metaDescription="Thiết kế"
      pageNumber={2}
      coverTitle="QUY TRÌNH THIẾT KẾ"
      coverDescription="TRÃI NGHIỆM KHÔNG GIAN"
    >
      {/* 6 steps */}
      <section className="my-24 mx-auto text-center">
        {[
          {
            id: 1,
            title: 'TƯ VẤN QUA ĐIỆN THOẠI',
            desc: 'Khi nhận được thông tin yêu cầu tư vấn từ khách hàng, chúng tôi sẽ tư vấn sơ bộ qua điện thoại cho khách hàng về phong cách kiến trúc, nhu cầu công năng và quy trình thiết kế xây dựng công trình nhà ở chuyên nghiệp.',
          },
          {
            id: 2,
            title: 'TƯ VẤN TRỰC TIẾP',
            desc: 'Khi nhận được thông tin yêu cầu tư vấn từ khách hàng, chúng tôi sẽ tư vấn sơ bộ qua điện thoại cho khách hàng về phong cách kiến trúc, nhu cầu công năng và quy trình thiết kế xây dựng công trình nhà ở chuyên nghiệp.',
          },
          {
            id: 3,
            title: 'KHẢO SÁT & ĐO ĐẠT',
            desc: 'Khi nhận được thông tin yêu cầu tư vấn từ khách hàng, chúng tôi sẽ tư vấn sơ bộ qua điện thoại cho khách hàng về phong cách kiến trúc, nhu cầu công năng và quy trình thiết kế xây dựng công trình nhà ở chuyên nghiệp.',
          },
          {
            id: 4,
            title: 'KÝ KẾT HỢP ĐỒNG',
            desc: 'Khi nhận được thông tin yêu cầu tư vấn từ khách hàng, chúng tôi sẽ tư vấn sơ bộ qua điện thoại cho khách hàng về phong cách kiến trúc, nhu cầu công năng và quy trình thiết kế xây dựng công trình nhà ở chuyên nghiệp.',
          },
          {
            id: 5,
            title: 'THIẾT KẾ Ý TƯỞNG',
            desc: 'Khi nhận được thông tin yêu cầu tư vấn từ khách hàng, chúng tôi sẽ tư vấn sơ bộ qua điện thoại cho khách hàng về phong cách kiến trúc, nhu cầu công năng và quy trình thiết kế xây dựng công trình nhà ở chuyên nghiệp.',
          },
          {
            id: 6,
            title: 'THIẾT KẾ CHI TIẾT',
            desc: 'Khi nhận được thông tin yêu cầu tư vấn từ khách hàng, chúng tôi sẽ tư vấn sơ bộ qua điện thoại cho khách hàng về phong cách kiến trúc, nhu cầu công năng và quy trình thiết kế xây dựng công trình nhà ở chuyên nghiệp.',
          },
        ].map((e, index) => {
          return (
            <div key={index} className="mx-auto mt-8 w-72 px-1">
              <div className="flex">
                <span className="h-24 w-24 bg-gray-800 p-4 text-left text-white">
                  <Icon id={e.id} />
                </span>
                <h4 className="bg-gray-600 py-2 px-4 text-white">{e.title}</h4>
              </div>
              <p>{e.desc}</p>
            </div>
          )
        })}
      </section>

      {/* bottom cover */}
      <section className="bg-gray-200 p-12">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <Image src={Page2Bottom} alt="bottom cover" layout="responsive" />
          </div>
          <div className="flex w-full items-center justify-center bg-white pr-2 lg:w-1/2">
            <div className="p-8 text-center">
              <p className="text-xl">LỢI ÍCH CỦA QUY TRÌNH </p>
              <h3 style={{ letterSpacing: '5px' }}>TƯ VẤN THIẾT KẾ</h3>
              <div className="mt-4 flex justify-center">
                <div
                  className="bg-gray-900"
                  style={{ width: '80px', height: '2px' }}
                />
              </div>
              <ul className="mt-4 text-sm">
                <li>- ĐÚNG TIẾN ĐỘ</li>
                <li>- THỦ TỤC HÀNH CHÍNH DỄ</li>
                <li>- CHUYÊN MÔN ĐẢM BẢO</li>
                <li>- CHẤT LƯỢNG TỐI ƯU</li>
                <li>- CHI PHÍ XÂY DỰNG BIẾT TRƯỚC</li>
                <li>- LÃNG PHÍ XÂY DỰNG GIẢM</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SubPageLayout>
  )
}

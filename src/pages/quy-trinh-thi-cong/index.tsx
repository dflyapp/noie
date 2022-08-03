import Image from 'next/image'

import SubPageLayout from 'layouts/SubPageLayout'
import PageCover1 from 'assets/subpage/page3-cover1.png'
import PageCover2 from 'assets/subpage/page3-cover2.png'
import PageCover3 from 'assets/subpage/page3-cover3.png'
import Page3Art from 'assets/subpage/page3-art.webp'

export default function QuyTrinhThiCong() {
  return (
    <SubPageLayout
      metaTitle="NOIE - Thi công"
      metaDescription="Thi công"
      pageNumber={3}
      coverTitle="QUY TRÌNH THI CÔNG"
      coverDescription="CHẤT LƯỢNG VÀ TỐI ƯU"
    >
      <article className="bg-gray-200 py-12">
        <h2 className="text-center">QUY TRÌNH THI CÔNG XÂY DỰNG</h2>
        <p className="mx-auto mt-8 w-2/3 text-left">
          Để một công trình có quá trình thi công xây dựng ít xảy ra sai xót
          nhất thì cần có một quy trình rõ ràng, chặt chẽ
        </p>
        <div className="container mx-auto p-12">
          <Image
            placeholder="blur"
            src={Page3Art}
            alt="progress"
            layout="intrinsic"
          />
        </div>

        <div className="container mx-auto flex flex-wrap text-center">
          <div className="w-full px-4 lg:w-1/3">
            <Image placeholder="blur" src={PageCover1} alt="cover1" layout="responsive" />
            <h3 className="mt-12 mb-4">ĐI THÉP SÀN</h3>
            <p>
              Bố trí thép sàn đúng tiêu chuẩn dựa theo nguyên tắc làm việc của
              kết cấu là yếu tố quyết định đến khả năng chịu lực của sàn. Tấm
              sàn được đan thép đúng cách sẽ giúp sàn nhà không bị{' '}
            </p>
          </div>
          <div className="w-full px-4 lg:w-1/3">
            <Image placeholder="blur" src={PageCover2} alt="cover2" layout="responsive" />
            <h3 className="mt-12 mb-4">XÂY TÔ MẶT NGOÀI</h3>
            <p>
              Có rất nhiều công trình chỉ quan tâm đến tiến độ. Mà bỏ qua nhưng
              chi tiết trong quá trình xây dựng. Nhiều nơi không thực sự quan
              tâm đến chất lượng tô tường. Đặc biệt là các công trình nhà ở
              trong thành phố. Việc này sẽ xảy gây ra những vấn đề nghiêm trọng
              sau này
            </p>
          </div>
          <div className="w-full px-4 lg:w-1/3">
            <Image placeholder="blur" src={PageCover3} alt="cover3" layout="responsive" />
            <h3 className="mt-12 mb-4">THI CÔNG NỘI THẤT</h3>
            <p>
              Một căn nhà đẹp ngoài nền tảng thiết kế vững chắc còn phải qua
              nhiều công đoạn khi thi công. Bất kỳ công đoạn nào cũng quan trọng
              như nhau, chỉ cần một công đoạn sơ sài sẽ ảnh hưởng đến kết quả
              cuối cùng. Vậy nên, trước tiên bạn cần hiểu rõ những hạng mục thi
              công nội thất để có cái nhìn tổng quát hơn trước khi bắt tay vào
              cải tạo, xây mới.
            </p>
          </div>
        </div>
      </article>
    </SubPageLayout>
  )
}

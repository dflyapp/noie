import Image from 'next/image'

export default function Cover() {
  return (
    <>
      <section className="h-screen relative bg-gray-200">
        <div className="absolute bottom-16">
          <h1>NOIE Việt Nam</h1>
          <strong>
            <span>
              Chuyên gia SÁNG TẠO và THIẾT KẾ TRẢI NGHIỆM KHÔNG GIAN LÀM VIỆC
              <br /> Thuộc Công ty cổ phần đầu tư kiến trúc D+ Việt Nam
            </span>
          </strong>
        </div>
      </section>

      {/* about us */}
      <div className="flex flex-wrap">
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
      </div>

      {/* about us */}
      <div className="flex flex-wrap">
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
      </div>

      {/* headline */}
      <h1 className="w-2/3 mx-auto text-center text-gray-500 my-48">
        DPLUS cam kết đồng hành cùng doanh nghiệp để xây dựng hình ảnh và môi
        trường làm việc chuyên nghiệp nhất.
      </h1>

      {/* banner */}
      <section className='bg-gray-200 py-24'>
        <div className='w-1/2 mx-auto p-12 bg-primary'>
          <p className='text-white text-center'>
            Chúng tôi luôn tâm niệm: Bản chất của thiết kế vốn là chăm chút cho
            từng chi tiết nhỏ nhất của mỗi sản phẩm được tạo ra. Chúng tôi muốn
            khẳng định rằng, DPLUS không chỉ dừng lại ở các bản thiết kế trên
            giấy mà còn quan tâm nhiều đến giá trị thật của mỗi sản phẩm khi ứng
            dụng ngoài cuộc sống.
          </p>
        </div>
      </section>
    </>
  )
}

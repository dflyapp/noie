export default function Footer() {
  return (
    <section className="bg-primary pt-48">
      <div className="container mx-auto">
        <p className="text-white text-5xl">
          Bất cứ điều gì bạn cần hỗ trợ.
          <br /> Hãy liên hệ với chúng tôi
        </p>

        <div className="w-full md:w-3/4">
          <div className="flex flex-wrap">
            <div className="w-1/2 px-4 text-white">
              <h3 className="mt-12">Miền bắc</h3>
              <p>
                Địa chỉ: Tầng 4, sảnh B tòa nhà AZ Sky Tower Định Công, Hoàng
                Mai, Hà Nội
              </p>
              <h3 className="mt-12">Miền nam</h3>
              <p>
                Địa chỉ: Tầng 4, sảnh B tòa nhà AZ Sky Tower Định Công, Hoàng
                Mai, Hà Nội
              </p>
            </div>
            <div className="w-1/2 px-4 text-white">
              <h3 className="mt-12">Mạng xã hội</h3>
              <p>
                Địa chỉ: Tầng 4, sảnh B tòa nhà AZ Sky Tower Định Công, Hoàng
                Mai, Hà Nội
              </p>
              <h3 className="mt-12">Chính sách</h3>
              <ul>
                <li>Điều khoản sử dụng</li>
                <li>Chính sách bảo mật</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-12" />
      <div className="container mx-auto text-white">
        <p className="pt-4 pb-8 uppercase text-center text-xs">
          © 2021 d+ studio | ĐKKD số: 0106850575 - Sở kế hoạch và đầu tư thành
          phố Hà Nội cấp ngày 18/05/2015
        </p>
      </div>
    </section>
  )
}

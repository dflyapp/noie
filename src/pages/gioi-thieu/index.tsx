import SubPageLayout from 'layouts/SubPageLayout'

export default function GioiThieu() {
  return (
    <SubPageLayout
      metaTitle="NOIE - Giới thiệu"
      metaDescription="Giới thiệu"
      pageNumber={1}
      coverTitle="Giới thiệu"
    >
      <h1 className="text-center">GIỚI THIỆU VỀ NOIE VIỆT NAM</h1>
      <div className="container mx-auto">
        <p>
          Tại NOIE Việt Nam, chúng tôi xác định rõ trách nhiệm đồng hành cùng
          gia chủ trong quá trình thiết kế và thi công, xây dựng không gian sống
          tối ưu nhất với từng gia chủ.
        </p>
        <p>
          Chúng tôi mong muốn tạo ra những không gian đề cao tính hợp lý, thông
          qua những trãi nghiệm - việc nghiên cứu và nắm bắt nhu cầu của từng
          chủ nhà. Từ đó tạo ra những giải pháp trong SÁNG TẠO - THIẾT KẾ TRÃI
          NGHIỆM KHÔNG GIAN và THI CÔNG.
        </p>
        <p>
          Chúng tôi luôn tin rằng thông qua những giải pháp đó, NOIE Việt Nam sẽ
          phần nào giúp truyền tải mong muốn, sở thích và các giá trị cốt lõi
          cũng như cá tính hóa hình ảnh của gia chủ theo một cách tối ưu nhất.
        </p>
      </div>

      <div className="flex justify-center">
        <h1 className="mx-auto inline-block bg-brown px-12 pt-2 pb-4 text-center text-white">
          DỊCH VỤ TẠI NOIE VIỆT NAM
        </h1>
      </div>

      <article className="container mx-auto flex flex-wrap bg-gray-200 py-12 text-gray-800">
        <div className="w-full px-12 md:w-1/2">
          <section className="block lg:hidden my-8 text-center">
            <h3>THI CÔNG</h3>
            <h4>KIẾN TRÚC - NỘI THẤT</h4>
          </section>
          <section>
            <p>
              Để mang lại cho khách hàng những sản phẩm nội thất chất lượng và
              thẩm mỹ cao cùng với giá thành hợp lý, NOiE VIỆT NAM đã đầu tư nhà
              xưởng, máy móc, trang thiêt bị..cùng với đội ngũ thợ lành nghề
              được đào tạo bài bản để có thể thực hiện được những tiêu chuẩn
              hoàn thiện, thi công nội thất nghiêm ngặt cũng như yêu cầu khắt
              khe, ngày một cao của khách hàng.
            </p>
            <p>
              Toàn bộ các dịch vụ thiết kế, thi công đều dựa trên nhu cầu của
              từng quý khách hàng được NOiE VIỆT NAM chia ra với 2 hạng mục
              chính: thi công phần thô đến khi thi công hoàn thiện kiến trúc và
              thi công nội thất. Trong thi công nội thất có thêm dịch vụ thiết
              kế thi công nội thất trọn gói.
            </p>
          </section>
          <section className="hidden lg:block mt-8 text-center">
            <h3>THI CÔNG</h3>
            <h4>KIẾN TRÚC - NỘI THẤT</h4>
          </section>
        </div>

        <div className="w-full px-12 md:w-1/2">
          <section className="mt-24 mb-8 text-center lg:mt-0">
            <h3>THIẾT KẾ</h3>
            <h4>TRÃI NGHIỆM KHÔNG GIAN</h4>
          </section>
          <section>
            <p>
              Thiết kế là phần không thể thiếu của một công trình dù công trình
              lớn hay nhỏ.
            </p>
            <p>
              Thiết kế nội thất giúp chủ đầu tư nhìn thấy trước sản phẩm của
              mình sau khi thi công, hạn chế rủi ro và giúp chủ đầu thư hoàn
              thiện công trình của mình hài lòng nhất. Chúng ta muốn cảm nhận
              một không gian sang trọng, hoành tráng, hay nhẹ nhàng, trẻ trung…
            </p>
            <p>
              Phong cách mà chúng ta chọn ở giai đoạn này sẽ quyết định điều đó.
              Các nhà thiết kế sẽ nắm bắt phong cách của chủ đầu tư để thiết kế
              một công trình mang đậm chất của chủ đầu tư, về phong cách thiết
              kế thì có rất nhiều loại khác nhau ví dụ như : cổ điển, tân cổ
              điển, hiện đại, hiện đại pha mộc,..
            </p>
          </section>
        </div>
      </article>

      <section className="mt-24 bg-brown px-2 py-12 text-center text-white lg:px-24">
        <div className="flex flex-wrap">
          <div className="w-full px-2 md:w-1/2 lg:w-1/4">
            <div className="mt-8 flex justify-center md:mt-4 lg:-mt-24">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M80 40C80 62.0949 62.0896 80 40 80C17.9051 80 0 62.0949 0 40C0 17.9104 17.9051 -1.4433e-06 40 -1.4433e-06C62.0896 -1.4433e-06 80 17.9104 80 40Z"
                  fill="white"
                />
                <path
                  d="M24.4816 37.8096H42.0631V39.8727H24.4816V37.8096ZM24.4816 30.0292H57.2792V32.087H24.4816V30.0292ZM24.4816 22.2434H57.2792V24.3065H24.4816V22.2434ZM42.498 55.4229C56.3352 54.5797 67.2872 43.6913 67.2872 30.3898C67.2872 16.5367 55.4124 5.30362 40.769 5.30362C26.1204 5.30362 14.2509 16.5367 14.2509 30.3898C14.2509 40.9281 21.1191 49.9443 30.8459 53.6621L26.4863 69.4829L42.498 55.4229Z"
                  fill="#CBA75F"
                />
              </svg>
            </div>
            <h4 className="my-4">
              THÔNG TIN <br /> HOẠT ĐỘNG
            </h4>
            <p>
              Chúng tôi tự hào là đơn vị hàng đầu trong thiết kế thi công với
              nhiều năm kinh nghiệm và đội ngũ chuyên nghiệp có chuyên môn cao
            </p>
          </div>
          <div className="w-full px-2 md:w-1/2 lg:w-1/4">
            <div className="mt-8 flex justify-center md:mt-4 lg:-mt-24">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 40C0 62.0949 17.9051 80 40 80C62.0949 80 80 62.0949 80 40C80 17.9104 62.0949 -1.4433e-06 40 -1.4433e-06C17.9051 -1.4433e-06 0 17.9104 0 40Z"
                  fill="white"
                />
                <path
                  d="M19.6659 17.843C13.4977 17.843 8.48049 22.8549 8.48049 29.023C8.48049 35.1912 13.4977 40.2137 19.6659 40.2137C23.6807 40.2137 27.1917 38.0763 29.17 34.8942C27.6213 32.3802 25.6218 27.835 27.9766 21.5714C25.9294 19.2856 22.97 17.843 19.6659 17.843Z"
                  fill="#DCAD59"
                />
                <path
                  d="M27.3285 38.6533C27.1907 38.7594 27.0209 38.8814 26.8353 39.014C25.7428 41.9203 22.9424 43.9941 19.6542 43.9941C16.3341 43.9941 13.5179 41.8885 12.4359 38.9503C12.0912 38.701 11.826 38.4889 11.6669 38.3563C11.6139 38.3086 11.5502 38.2608 11.4972 38.2078L11.4017 38.298C4.44337 44.3123 4.53884 54.8506 4.54414 55.2961L4.54945 55.6727H22.2636C22.5341 51.5836 23.7433 44.3176 28.6173 38.9503C28.2673 38.6268 27.9703 38.3987 27.7741 38.2661C27.6733 38.351 27.5778 38.4412 27.4771 38.5313L27.3285 38.6533Z"
                  fill="#DCAD59"
                />
                <path
                  d="M45.5572 47.3184L40.7627 44.8734L35.9735 47.3184V41.3836L40.7627 43.9453L45.5572 41.3836V47.3184ZM50.2986 37.8832C50.1872 37.9787 50.0706 38.0795 49.9592 38.1749C49.9008 38.2227 49.8478 38.2704 49.7895 38.3181C48.6969 39.1879 46.183 40.8214 42.8629 41.3518C42.5341 41.3942 42.2053 41.4473 41.8711 41.4685C41.5847 41.4844 41.3036 41.495 41.0173 41.495C39.9724 41.495 38.9594 41.373 37.9783 41.1503C34.8916 40.36 32.5314 38.5462 31.8579 37.9787C31.7995 37.9257 31.7306 37.8726 31.6669 37.8143L31.5556 37.9098C23.5842 44.7992 23.6956 56.8649 23.7062 57.3741L23.7115 57.8037H57.8245L57.8086 57.3529C57.2411 43.4149 51.6669 38.8061 50.2986 37.8832Z"
                  fill="#DCAD59"
                />
                <path
                  d="M28.2684 27.145C28.2684 34.2041 34.0175 39.9533 41.0819 39.9533H41.0872C44.5028 39.9533 47.7168 38.6168 50.1405 36.193C52.5643 33.7692 53.9008 30.5552 53.8955 27.1344C53.8955 20.0752 48.1464 14.3261 41.0819 14.3261C34.0122 14.3261 28.2684 20.0752 28.2684 27.145Z"
                  fill="#DCAD59"
                />
                <path
                  d="M59.1063 55.0252L73.4845 55.0305L73.4898 54.6964C73.4951 54.2933 73.3572 45.3461 67.1042 39.9363L67.0193 39.8621C66.8178 40.0477 66.6057 40.228 66.3935 40.3978L61.9438 49.0586L61.1535 43.9777L62.4211 41.9305C61.6149 42.1214 60.7717 42.2275 59.9019 42.2275C59.6791 42.2275 59.4564 42.2222 59.2336 42.2063C58.8252 42.1798 58.4275 42.132 58.0297 42.0631C57.8812 42.0366 57.7274 42.0048 57.5736 41.9729L58.8199 43.9777L57.9926 48.8146C58.6608 51.1747 58.9631 53.4606 59.1063 55.0252Z"
                  fill="#DCAD59"
                />
                <path
                  d="M60.3336 40.8543C65.8759 40.8596 70.384 36.3463 70.3893 30.8093C70.3893 25.2723 65.8812 20.7589 60.3389 20.7589C58.0849 20.7589 56.0006 21.5067 54.3193 22.7637C54.8444 24.2009 55.1308 25.7496 55.1308 27.3672C55.1308 30.735 53.8897 33.8058 51.8478 36.1712C53.6298 38.9822 56.7643 40.8543 60.3336 40.8543Z"
                  fill="#DCAD59"
                />
              </svg>
            </div>
            <h4 className="my-4">
              ĐỘI NGŨ <br /> NHÂN SỰ
            </h4>
            <p>
              NOIE VIỆT NAM đã xây dựng được đội ngũ kiến trúc sư, các nhà thiết
              kế có tầm đầy sáng tạo. Cùng với đó là đội ngũ thợ sản xuất – thi
              công tay nghề cao cùng với cái tâm tận tụy.
            </p>
          </div>
          <div className="w-full px-2 md:w-1/2 lg:w-1/4">
            <div className="mt-8 flex justify-center md:mt-4 lg:-mt-24">
              <svg
                width="82"
                height="81"
                viewBox="0 0 82 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.858032 40.3894C0.858032 62.6994 18.9374 80.7787 41.2474 80.7787C63.5574 80.7787 81.6368 62.6994 81.6368 40.3894C81.6368 18.0847 63.5574 2.06606e-06 41.2474 2.06606e-06C18.9374 2.06606e-06 0.858032 18.0847 0.858032 40.3894Z"
                  fill="white"
                />
                <path
                  d="M50.6909 60.0065H66.3604V31.1898H50.6909V60.0065Z"
                  fill="#DCAD59"
                />
                <path
                  d="M32.3116 60.0065H47.9865V39.4209H32.3116V60.0065Z"
                  fill="#DCAD59"
                />
                <path
                  d="M13.9324 60.0065H29.6019V46.281H13.9324V60.0065Z"
                  fill="#DCAD59"
                />
                <path
                  d="M48.0792 13.8805L53.1131 15.8513C42.2794 36.4637 14.3464 34.6696 14.3464 34.6696C41.4922 39.4144 52.1438 28.0666 58.8914 18.8716L63.8236 21.244L61.3227 9.3714L48.0792 13.8805Z"
                  fill="#DCAD59"
                />
                <path
                  d="M10.7996 64.2371H69.7824V61.9504H10.7996V64.2371Z"
                  fill="#DCAD59"
                />
              </svg>
            </div>
            <h4 className="my-4">XƯỞNG TRỰC TIẾP SẢN XUẤT</h4>
            <p>
              NOIE đảm bảo nguồn hàng sản xuất trực tiếp không qua trung gian sẽ
              đảm bảo được về mặt thương hiệu và chất lượng, cũng như giá thành
              sản phẩm cạnh tranh và điều quan trọng là chế độ hậu mãi bảo hành
              sẽ được đảm bảo.
            </p>
          </div>
          <div className="w-full px-2 md:w-1/2 lg:w-1/4">
            <div className="mt-8 flex justify-center md:mt-4 lg:-mt-24">
              <svg
                width="79"
                height="80"
                viewBox="0 0 79 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 39.612C0 61.4307 17.6813 79.112 39.5 79.112C61.3187 79.112 79 61.4307 79 39.612C79 17.7985 61.3187 0.112001 39.5 0.112001C17.6813 0.112001 0 17.7985 0 39.612Z"
                  fill="white"
                />
                <path
                  d="M64.3355 31.5936C63.6179 27.7128 61.8896 26.2935 61.4025 25.9687C61.3554 26.0106 61.3083 26.0473 61.2559 26.0944C61.2088 26.1363 61.1564 26.1782 61.104 26.2254C60.9993 26.3039 60.8893 26.3877 60.7793 26.4663L58.4644 31.2166L58.0088 28.4774L58.6896 27.3776C58.6058 27.3985 58.522 27.4142 58.4382 27.43C58.2235 27.4666 58.0035 27.498 57.7835 27.5085C57.6578 27.519 57.5374 27.5242 57.4117 27.5242C56.9403 27.5242 56.4794 27.4666 56.0343 27.3566L56.7308 28.4774L56.2961 31.2637L53.7351 26.2358C53.6199 26.1416 53.5046 26.0368 53.3947 25.9373L53.3423 25.9792C51.614 27.4771 50.7708 29.5406 50.357 31.248C48.7439 29.5092 47.754 27.1786 47.754 24.6227C47.754 19.244 52.1325 14.8656 57.5164 14.8656C62.8952 14.8656 67.2736 19.244 67.2736 24.6227C67.2736 27.3514 66.1476 29.8182 64.3355 31.5936ZM36.5147 48.0703C36.0905 46.0068 35.4358 44.5403 34.7916 43.5191C35.2892 41.2513 35.6872 38.355 35.4044 36.323C35.3573 36.0192 35.3101 35.7207 35.263 35.4326C35.2473 35.1969 35.2211 34.9665 35.1792 34.7256C35.0273 33.8509 34.7654 33.0077 34.4093 32.2274C33.8541 30.8499 33.1104 29.902 32.1154 29.2683C31.0574 28.4565 29.7795 27.9799 28.313 27.9799C27.5798 27.9799 26.878 28.0951 26.2181 28.3098C24.1703 28.7288 23.2747 29.9963 22.9395 30.4676C22.6358 30.9023 22.3791 31.4103 22.1644 31.9707C21.9602 32.4211 21.8083 32.903 21.7088 33.4005C21.4102 34.5423 21.1903 35.8254 20.9598 37.1452C20.588 39.303 20.2109 41.5236 19.4358 43.4038C19.4096 43.4667 19.4253 43.5295 19.4619 43.5767C19.5038 43.629 19.5667 43.6552 19.6295 43.6448C20.4413 43.4876 21.0593 43.2781 21.5778 42.7701C21.1798 43.8071 19.7029 44.577 19.6819 44.577C19.6243 44.6084 19.5929 44.666 19.5876 44.7289C19.5824 44.7917 19.6138 44.8493 19.661 44.8808C19.6924 44.9017 19.9647 45.085 20.4151 45.305C19.9804 46.2582 19.6819 47.2061 19.4777 48.0755C17.0685 45.813 15.5601 42.6025 15.5601 39.0411C15.5601 32.1855 21.1327 26.6129 27.9883 26.6129C34.8388 26.6129 40.4165 32.1855 40.4165 39.0411C40.4165 42.5921 38.9134 45.7973 36.5147 48.0703ZM32.6339 43.8176C32.5291 43.9485 30.4342 45.3155 30.4342 45.3155L31.4659 46.7191L28.2083 49.2749L28.2135 49.2906L28.2031 49.2801L28.1926 49.2906L28.1978 49.2749L24.9402 46.7191L25.9667 45.3155C25.9667 45.3155 23.877 43.9485 23.7723 43.8176C23.5837 43.5819 24.7045 42.5083 24.7045 42.5083L28.2031 49.2697L31.7016 42.5083C31.7016 42.5083 32.8224 43.5819 32.6339 43.8176V43.8176ZM46.3714 51.2494C50.1161 49.5315 54.5521 51.1708 56.27 54.9103C57.6264 57.8641 56.8932 61.237 54.6935 63.379C54.1122 60.5928 52.8447 59.5767 52.4834 59.3411C52.4467 59.3725 52.41 59.4091 52.3734 59.4353C52.3367 59.4668 52.3001 59.5034 52.2582 59.5348C52.1848 59.5977 52.101 59.6553 52.0172 59.7181L50.3256 63.2952L49.959 61.2474L50.4617 60.4199C50.3989 60.4357 50.3361 60.4514 50.2732 60.4618C50.1108 60.4933 49.9485 60.509 49.7809 60.5195C49.6919 60.5299 49.5976 60.5352 49.5033 60.5352C49.1472 60.5404 48.8015 60.5037 48.4716 60.4252L49.0005 61.2579L48.6968 63.3476L46.738 59.6029C46.649 59.5296 46.5599 59.4563 46.4814 59.383L46.4447 59.4144C45.172 60.5352 44.554 62.0749 44.2555 63.3476C43.627 62.7349 43.0981 61.9964 42.7105 61.1479C40.9874 57.4085 42.6319 52.9672 46.3714 51.2494V51.2494ZM57.5164 11.896C50.4984 11.896 44.7897 17.6047 44.7897 24.6227C44.7897 25.9268 44.9887 27.1838 45.3553 28.3727L41.5583 30.1953C38.662 25.7697 33.6656 22.8316 27.9883 22.8316C19.0534 22.8316 11.784 30.1062 11.784 39.0411C11.784 47.976 19.0534 55.2455 27.9883 55.2455C32.1468 55.2455 35.9438 53.669 38.8139 51.087L41.1498 53.0248C39.5576 55.6906 39.2538 59.0687 40.647 62.0959C42.8886 66.9719 48.6758 69.1192 53.5518 66.8723C58.433 64.636 60.575 58.8435 58.3335 53.9675C56.0919 49.0916 50.3046 46.9495 45.4287 49.1859C44.6693 49.5368 43.9779 49.9715 43.3652 50.469L41.0817 48.5731C43.0352 45.8968 44.1927 42.6025 44.1927 39.0411C44.1927 37.1243 43.8575 35.286 43.2447 33.5786L46.9946 31.7769C49.2886 35.1393 53.1485 37.3495 57.5164 37.3495C64.5345 37.3495 70.2379 31.6408 70.2379 24.6227C70.2379 17.6047 64.5345 11.896 57.5164 11.896"
                  fill="#DCAD59"
                />
              </svg>
            </div>
            <h4 className="my-4">
              QUY TRÌNH <br /> CHUYÊN NGHIỆP
            </h4>
            <p>
              Một công ty thiết kế thi công nội thất uy tín chất lượng sẽ có quy
              trình làm việc chuyên nghiệp thể hiện qua sự linh hoạt trong việc
              đưa ra các giải pháp thi công nội thất.
            </p>
          </div>
        </div>
      </section>
    </SubPageLayout>
  )
}

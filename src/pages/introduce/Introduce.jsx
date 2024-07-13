import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { FaHome } from "react-icons/fa";

const Introduce = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="relative h-10 border-y py-2">
        <div className="flex gap-3 items-center absolute left-80">
          <FaHome />
          <p className="text-sm">Trang chủ/ Giới thiệu</p>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="text-start w-1/3 my-10 mx-10">
          <div className="text-3xl font-bold mb-5">
            <span className="text-[#01927C]">VỀ</span>
            <span> DJISSA CHÚNG TÔI</span>
          </div>
          <h3 className="font-semibold">
            Công ty chúng tôi là doanh nghiệp chuyên về phân phối các loại Gạo
            ngon, phương châm của công ty là vì sức khỏe con người.
          </h3>
          <p>- Gạo không có dư lượng thuốc trừ sâu, không sử dụng hóa chất.</p>
          <p>- Gạo có hàm lượng protein cao.</p>
          <p>- Gạo có hàm lượng Vitamin, khoáng vi lượng đúng theo công bố.</p>
          <p>
            - Gạo được đóng gói tại cơ sở sản xuất đảm bảo tiêu chuẩn vệ sinh an
            toàn thực phẩm .
          </p>
          <p>- Gạo cho ra chất lượng hạt cơm ngon.</p>
        </div>
        <div className="my-10">
          <img
            src="../../../public/imgs/hinh_anh/about.jpg"
            alt=""
            className="block justify-center items-center w-full rounded-tr-full"
          />
        </div>
      </div>
      <div className="bg-[#EEEEEE] text-center flex justify-center">
        <div className="w-2/3 my-10">
          <h1 className="text-3xl mb-5">
            " Gạo ngon nhất vì sức khỏe con người "
          </h1>
          <div>
            <p>
              Hệ thống bán buôn, bán lẻ gạo Gạo Ngon là hệ thống các cửa hàng
              chuyên cung cấp các loại gạo đến từng bữa ăn của các hộ gia đình,
              các bếp ăn của công ty, văn phòng, xí nghiệp, các bếp ăn tập thể…
            </p>
            <br />
            <p>
              Với phương trâm “Gạo chất từng hạt – Cơm ngon từng bát” Gạo Ngon
              cung cấp đến quý khách các sản phẩm gạo chất lượng, an toàn, đáp
              ứng các nhu cầu khẩu vị dù là nhỏ nhất của mỗi thành viên trong
              gia đình.
            </p>
            <br />
            <p>
              Trong quá trình hoạt động và phát triển, với khát vọng mang đến
              cho mỗi gia đình sự tiện lợi và an tâm khi mua sắm và tâm niệm tất
              cả vì sức khỏe người việt. Chúng tôi mong muốn góp phần vào việc
              xây dựng xã hội với mỗi người khỏe mạnh để xây dựng xã hội, đất
              nước khỏe mạnh.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Introduce;

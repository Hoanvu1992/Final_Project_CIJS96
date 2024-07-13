import { useContext } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { FaHome } from "react-icons/fa";
import StoreContext from "../../store/store";
import Footer from "../../components/footer/Footer";

const Services = () => {
  const { listServices } = useContext(StoreContext);
  return (
    <div>
      <Header />
      <Navbar />
      <div className="relative h-10 border-y py-2">
        <div className="flex gap-3 items-center absolute left-80">
          <FaHome />
          <p className="text-sm">Trang chủ/ Dịch vụ</p>
        </div>
      </div>
      <div className="flex justify-center my-10 ">
        <div className="w-2/5 grid grid-cols-2 gap-y-10 gap-x-5">
          {listServices.map((item) => {
            return (
              <div key={item.id} className=" text-sm">
                <div className="">
                  <div className="h-[350px] mb-3">
                    <img
                      src={item.image}
                      alt=""
                      className="h-[350px] w-4/5 object-cover m-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                    />
                  </div>
                  <p className="h-11 p-3 text-center bg-[#433520] text-white font-bold">
                    {item.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-[15%] ms-10">
          <div className="border rounded-lg p-5 mb-5 h-[10%]">
            <h3 className="font-bold">Danh mục dịch vụ</h3>
            <hr className="w-2/5 border-2 border-[#433520] my-2" />
          </div>
          <div className="border rounded-lg p-5 my-5 h-[10%]">
            <h3 className="font-bold">Sản phẩm hot</h3>
            <hr className="w-2/5 border-2 border-[#433520] my-2" />
          </div>
          <div className="border rounded-lg p-5 my-5 h-[50%]">
            <h3 className="font-bold">Tin mới</h3>
            <hr className="w-2/5 border-2 border-[#433520] my-2" />
            <p className="my-2 py-2 border-b">
              Giống lúa làm nên gạo ngon nhất thế giới sẽ được trồng tại Bạc
              Liêu
            </p>
            <p className="my-2 py-2 border-b">
              Sẽ có nhà máy chuyên chế biến gạo ngon nhất thế giới ST25
            </p>
            <p className="my-2 py-2 border-b">
              Vì sao người Việt thích ăn gạo hữu cơ Campuchia?
            </p>
            <p>Cách phân biệt gạo lứt thường và gạo lứt huyết rồng</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;

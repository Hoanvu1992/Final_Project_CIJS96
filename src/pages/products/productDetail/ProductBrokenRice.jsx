import { useContext } from "react";
import StoreContext from "../../../store/store";
import { useParams } from "react-router-dom";
import { Button, Carousel, Rate } from "antd";
import { FaDollarSign, FaHome } from "react-icons/fa";
import Tab2 from "../../../components/tabs/Tab2";
import Header from "../../../components/header/Header";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import Tab1 from "../../../components/tabs/Tab1";
import Tab3 from "../../../components/tabs/Tab3";

const ProductBrokenRice = () => {
  const { listRices, addToCart } = useContext(StoreContext);
  const { id } = useParams();
  const crrRice = listRices.find((item) => {
    return String(item.id) === String(id);
  });

  return (
    <div>
      <Header />
      <Navbar />
      <div className="relative h-10 border-y py-2">
        <div className="flex gap-3 items-center absolute left-80 sm:left-0 ">
          <FaHome />
          <p className="text-sm">Trang chủ/ Sản phẩm/ {crrRice.name}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center gap-5 my-10">
        <div className="border border-1 rounded-lg px-5 w-[50%] lg:justify-self-end md:justify-self-center sm:justify-self-center">
          <img
            src={crrRice.image}
            alt={crrRice.name}
            className="w-4/5 object-cover m-auto hover:scale-110"
          />
        </div>
        <div className="w-[50%] lg:justify-self-start md:justify-self-center sm:justify-self-center  lg:text-start sm:text-center">
          <h1 className="border-b border-b-slate-200 text-2xl font-bold mb-3 py-3 text-[#433520] ">
            {crrRice.name}
          </h1>
          <p>Thương hiệu: Djissa</p>
          <Rate allowHalf defaultValue={crrRice.rating} className="my-2" />
          <div className="flex gap-3 items-center my-3">
            <FaDollarSign className="text-xl" />
            <p className="text-red-600 font-bold text-xl">{crrRice.price}</p>
          </div>
          <div>
            <p className="pb-3 font-bold">Mô tả:</p>
            <Button onClick={() => addToCart(crrRice.id)} type="primary">
              Thêm giỏ hàng
            </Button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="bg-[#433520] text-white font-bold text-start p-3 mx-[20%]">
          SẢN PHẨM LIÊN QUAN
        </h1>
        <div>
          <Carousel autoplay>
            <div>
              <Tab1 />
            </div>
            <div>
              <Tab2 />
            </div>
            <div>
              <Tab3 />
            </div>
          </Carousel>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductBrokenRice;

import { useContext } from "react";
import StoreContext from "../../../store/store";
import { useParams } from "react-router-dom";
import { Rate } from "antd";
import Header from "../../../components/header/Header";
import Navbar from "../../../components/navbar/Navbar";
import { FaHome } from "react-icons/fa";

const ProductBrokenRice = () => {
  const { listRices } = useContext(StoreContext);
  const { id } = useParams();

  const crrRice = listRices.find((item) => {
    console.log("🚀 ~ ProductBrokenRice ~ item:", item);
    return String(item.id) === String(id);
  });

  // if (!crrRice) {
  //   return (
  //     <div>
  //       <Header />
  //       <Navbar />
  //       <div className="relative h-10 border-y py-2">
  //         <div className="flex gap-3 items-center absolute left-80">
  //           <FaHome />
  //           <p className="text-sm">Trang chủ/ Sản phẩm/ Không tìm thấy</p>
  //         </div>
  //       </div>
  //       <div className="flex justify-center my-10">
  //         <p>Không tìm thấy</p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div>
      <Header />
      <Navbar />
      <div className="relative h-10 border-y py-2">
        <div className="flex gap-3 items-center absolute left-80">
          <FaHome />
          <p className="text-sm">Trang chủ/ Sản phẩm/ {crrRice.name}</p>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 w-3/5 h-[30%]">
          <div className="border border-1 w-5/6 rounded-lg px-5">
            <img
              src={crrRice.image}
              alt={crrRice.name}
              className="w-4/5 m-auto hover:scale-110"
            />
            <p>Còn hàng</p>
            <Rate allowHalf defaultValue={4.5} className="my-2" />
            <p className="font-bold text-sm">{crrRice.name}</p>
            <p className="text-red-600 my-5">{crrRice.price}</p>
          </div>
        </div>
        <div>
          <div>
            <h1>{crrRice.name}</h1>
          </div>
          <div>
            <p>Thương hiệu</p>
          </div>
          <div>
            <p>{crrRice.price}</p>
          </div>
          <div>
            <p>Mô tả</p>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBrokenRice;

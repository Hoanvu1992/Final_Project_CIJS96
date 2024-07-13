import { FaDollarSign, FaHome } from "react-icons/fa";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useContext, useState } from "react";
import StoreContext from "../../store/store";
import { Button, Input, Rate, Slider, Space } from "antd";
import { Link, useSearchParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);
const Products = () => {
  const { listRices, filterRice, setListRices } = useContext(StoreContext);
  const [disabled, setDisabled] = useState(false);
  const [params, setSearchParams] = useSearchParams();

  const handleSearch = (value) => {
    setSearchParams({ search: value });
    const searchValue = value.trim().toLowerCase();
    const riceFilter = listRices.filter((item) =>
      item.name.toLocaleLowerCase().includes(searchValue)
    );
    setListRices(value !== "" ? riceFilter : filterRice);
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div className="relative h-10 border-y py-2">
        <div className="flex gap-3 items-center absolute left-80">
          <FaHome />
          <p className="text-sm">Trang chủ/ Sản phẩm</p>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 w-3/5 h-[30%]">
          {listRices.map((item) => {
            return (
              <div
                key={item.id}
                className=" border border-1 w-5/6 rounded-lg px-5"
              >
                <Link to="/san-pham/:id">
                  <img
                    src={item.image}
                    alt={item.image}
                    className="w-4/5 m-auto hover:scale-110 "
                  />
                  <p>Còn hàng</p>
                  <Rate allowHalf defaultValue={4.5} className="my-2" />
                  <p className="font-bold text-sm">{item.name}</p>
                </Link>
                <div className="flex justify-between items-center">
                  <div className="flex justify-start items-center">
                    <FaDollarSign className="text-xl" />
                    <b className="text-sm text-red-600 my-5">{item.price}</b>
                  </div>
                  <Button className="w-[55%] text-center">
                    Thêm giỏ
                    <AiOutlineShoppingCart className="text-xl" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-[15%] mb-10">
          <div className=" mb-5">
            <Space direction="vertical" className=" border-gray-300">
              <Search
                placeholder="Tìm sản phẩm ..."
                onSearch={onSearch}
                onChange={(e) => handleSearch(e.target.value)}
                style={{ width: 250 }}
              />
            </Space>
          </div>
          <div className="border rounded-lg p-5">
            <h3 className="font-bold">Danh mục sản phẩm</h3>
            <hr className="w-2/5 border-2 border-[#433520] my-2" />
            <ul className=" text-start">
              <li className="my-2 py-2 border-b">Vietnam Broken Rice</li>
              <li className="mb-2 py-2 border-b">Vietnam Fragrant Rice</li>
              <li className="mb-2 py-2 border-b">Premium Fragrant Rice</li>
            </ul>
          </div>
          <div className="border rounded-lg p-5 my-5 h-[10%]">
            <h3 className="font-bold">Thương hiệu</h3>
            <hr className="w-2/5 border-2 border-[#433520] my-2" />
          </div>
          <div className="border rounded-lg p-5 my-5 h-15%]">
            <h3 className="font-bold">Bộ lọc</h3>
            <hr className="w-2/5 border-2 border-[#433520] my-2" />
            <p className="text-sm">Khoảng giá</p>
            <Slider defaultValue={30} disabled={disabled} />
          </div>
          <div className="border rounded-lg p-5 my-5 h-[10%]">
            <h3 className="font-bold">Sản phẩm hot</h3>
            <hr className="w-2/5 border-2 border-[#433520] my-2" />
          </div>
          <div className="border rounded-lg p-5 my-5 h-[40%]">
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

export default Products;

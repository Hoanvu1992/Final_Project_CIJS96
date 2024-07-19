import { FaDollarSign, FaHome } from "react-icons/fa";
import { useContext, useState } from "react";
import StoreContext from "../../store/store";
import { Button, Input, Pagination, Rate, Slider, Space } from "antd";
import { Link, useSearchParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const { Search } = Input;
const Products = () => {
  const { listRices, setListRices, filterRice } = useContext(StoreContext);
  const [disabled, setDisabled] = useState(false);
  const [params, setSearchParams] = useSearchParams();

  // const cartItemAmount = cartItem[]

  const handleSearch = (value) => {
    setSearchParams({ search: value });
    const searchValue = value.trim().toLowerCase();
    const riceFilter = listRices.filter((item) =>
      item.name.toLowerCase().includes(searchValue),
    );
    setListRices(value !== "" ? riceFilter : filterRice);
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div className="relative h-10 border-y py-2">
        <div className="absolute left-80 flex items-center gap-3">
          <FaHome />
          <p className="text-sm">Trang chủ/ Sản phẩm</p>
        </div>
      </div>
      <div className="my-10 flex justify-center">
        <div className="grid h-[30%] w-3/5 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {listRices.map((item) => {
            return (
              <div
                key={item.id}
                className="border-1 w-5/6 rounded-lg border px-5"
              >
                <Link to={`/san-pham/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.image}
                    className="m-auto w-4/5 hover:scale-110"
                  />
                  <p>Còn hàng</p>
                  <Rate allowHalf defaultValue={item.rating} className="my-2" />
                  <p className="text-sm font-bold">{item.name}</p>
                </Link>
                <div>
                  <div className="flex items-center justify-start">
                    <FaDollarSign className="text-xl" />
                    <b className="my-5 text-sm text-red-600">{item.price}</b>
                  </div>
                  <div className="flex items-center justify-center">
                    <Button className="mb-5 w-[40%]">
                      <Link to={`/san-pham/${item.id}`}>Mua hàng</Link>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
          <div></div>
          <div>
            <Pagination align="center" defaultCurrent={1} total={50} />
          </div>
          <div></div>
        </div>
        <div className="mb-10 w-[15%]">
          <div className="mb-5">
            <Space direction="vertical" className="border-gray-300">
              <Search
                placeholder="Tìm sản phẩm ..."
                onChange={(e) => handleSearch(e.target.value)}
                style={{ width: 250 }}
              />
            </Space>
          </div>
          <div className="rounded-lg border p-5">
            <h3 className="font-bold">Danh mục sản phẩm</h3>
            <hr className="my-2 w-2/5 border-2 border-[#433520]" />
            <ul className="text-start">
              <li className="my-2 border-b py-2">Vietnam Broken Rice</li>
              <li className="mb-2 border-b py-2">Vietnam Fragrant Rice</li>
              <li className="mb-2 border-b py-2">Premium Fragrant Rice</li>
            </ul>
          </div>
          <div className="my-5 h-[10%] rounded-lg border p-5">
            <h3 className="font-bold">Thương hiệu</h3>
            <hr className="my-2 w-2/5 border-2 border-[#433520]" />
          </div>
          <div className="h-15%] my-5 rounded-lg border p-5">
            <h3 className="font-bold">Bộ lọc</h3>
            <hr className="my-2 w-2/5 border-2 border-[#433520]" />
            <p className="text-sm">Khoảng giá</p>
            <Slider defaultValue={30} disabled={disabled} />
          </div>
          <div className="my-5 h-[10%] rounded-lg border p-5">
            <h3 className="font-bold">Sản phẩm hot</h3>
            <hr className="my-2 w-2/5 border-2 border-[#433520]" />
          </div>
          <div className="my-5 h-[40%] rounded-lg border p-5">
            <h3 className="font-bold">Tin mới</h3>
            <hr className="my-2 w-2/5 border-2 border-[#433520]" />
            <p className="my-2 border-b py-2">
              Giống lúa làm nên gạo ngon nhất thế giới sẽ được trồng tại Bạc
              Liêu
            </p>
            <p className="my-2 border-b py-2">
              Sẽ có nhà máy chuyên chế biến gạo ngon nhất thế giới ST25
            </p>
            <p className="my-2 border-b py-2">
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

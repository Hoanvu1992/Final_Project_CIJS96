import { Link } from "react-router-dom";
import { Dropdown, Space } from "antd";
import { BsJustify } from "react-icons/bs";
import TabNews from "./TabNav/TabNews";
import TabProducts from "./TabNav/TabProducts";
import TabLibrary from "./TabNav/TabLibrary";

const items = [
  {
    key: "1",
    label: <Link to="/san-pham">Gạo tấm Việt Nam</Link>,
  },
  {
    key: "2",
    label: <Link to="/san-pham">Gạo thơm Việt Nam</Link>,
  },
  {
    key: "3",
    label: <Link to="/san-pham">Gạo thơm cao cấp</Link>,
  },
];

const Navbar = () => {
  return (
    <div className="flex gap-10 justify-center items-center bg-[#433520] text-white text-sm h-10 ">
      <div className="bg-[#01927C] border border-[#01927C] rounded-full w-36 text-center font-bold">
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space style={{ cursor: "pointer" }}>
              <BsJustify />
              Danh mục
            </Space>
          </a>
        </Dropdown>
      </div>
      <Link to="/">Trang chủ</Link>
      <Link to="/gioi-thieu">Giới thiệu</Link>
      <TabProducts />
      <Link to="/dich-vu">Dịch vụ</Link>
      <TabNews />
      <TabLibrary />
      <Link to="/lien-he">Liên hệ</Link>
    </div>
  );
};

export default Navbar;

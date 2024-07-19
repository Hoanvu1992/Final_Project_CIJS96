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
    <div className="flex h-10 items-center justify-center gap-10 bg-[#433520] text-sm text-white">
      <div className="w-36 rounded-full border border-[#01927C] bg-[#01927C] text-center font-bold">
        <Dropdown
          menu={{
            items,
          }}
        >
          <button onClick={(e) => e.preventDefault()}>
            <Space style={{ cursor: "pointer" }}>
              <BsJustify />
              Danh mục
            </Space>
          </button>
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

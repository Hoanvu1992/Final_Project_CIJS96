import { Dropdown, Button, Space } from "antd";
import { FaUser } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import "./Header.css";
import { Link } from "react-router-dom";
import { BiPencil, BiSolidKey } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import StoreContext from "../../store/store";
import ModalCart from "../modal/ModalCart";

const items = [
  {
    key: "1",
    label: (
      <Link to="/dang-nhap" className="flex justify-start items-center gap-2">
        <BiSolidKey />
        Đăng nhập
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link to="/dang-ky" className="flex justify-start items-center gap-2">
        <BiPencil /> Đăng ký
      </Link>
    ),
  },
];

const Header = () => {
  const { isModalOpen, setIsModalOpen } = useContext(StoreContext);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isTagP, setTagP] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      setUsers(users);
      setIsButtonVisible(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("users");
    setTagP(false);
    setIsButtonVisible(false); // Ẩn nút sau khi nhấn
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="flex gap-24 justify-center items-center h-16">
      <div className="w-16 h-14">
        <img
          src="../../../public/imgs/logo/photo_2024-06-01 15_06_00.jpeg"
          alt=""
        />
      </div>
      {/* Search */}
      <div className="w-1/5"></div>
      {/* hotline */}
      <div className="h-12 w-44 flex items-center bg-[#E8F9F7] border border-black rounded">
        <div className="text-3xl mx-2 text-[#01927C] ">
          <FaPhoneVolume />
        </div>
        <div className="text-sm text-center">
          <p>Hotline</p>
          <a href="tel:02871099188" className="text-[#01927C] font-bold">
            (028)710.99188
          </a>
        </div>
      </div>
      {/** icon */}
      <div className="flex gap-3 w-1/6">
        {isTagP && (
          <p className="text-center text-white w-[20%] p-1 ">
            {users.userName}
          </p>
        )}
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomLeft"
          className="text-4xl p-2 text-black bg-[#E8F9F7] hover:bg-[#01927C] hover:text-white rounded-full"
        >
          <FaUser />
        </Dropdown>
        <AiFillHeart className="text-4xl p-2 text-black bg-[#F6F3E3] hover:bg-[#01927C] hover:text-white rounded-full" />
        <div className="relative" onClick={showModal}>
          <AiOutlineShoppingCart className="text-4xl text-black bg-[#FEE5C7] hover:bg-[#01927C] hover:text-white rounded-full p-2" />
          <span className="bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center absolute -top-1 -right-1">
            0
          </span>
        </div>
        {isButtonVisible && <Button onClick={handleLogout}>Đăng xuất</Button>}
        {isModalOpen && <ModalCart />}
      </div>
    </div>
  );
};

export default Header;

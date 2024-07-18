import "./Header.css";
import { Dropdown, Button } from "antd";
import { FaUser } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiSolidKey } from "react-icons/bi";
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
];

const Header = () => {
  const { isModalOpen, setIsModalOpen, listRices, cartItem } =
    useContext(StoreContext);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [showUser, setShowUser] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      setUsers(users);
      setIsButtonVisible(true);
    } else {
      setShowUser(false);
      setIsButtonVisible(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("users");
    setShowUser(false);
    setIsButtonVisible(false); // Ẩn nút sau khi nhấn
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="grid grid-cols-3 sm:gap-3 gap-24 justify-center items-center justify-items-center my-2">
      <div className="w-16 sm:w-16 h-14">
        <img
          src="../../../public/imgs/logo/photo_2024-06-01 15_06_00.jpeg"
          alt=""
        />
      </div>
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
      <div className="flex gap-3">
        {showUser && (
          <div className="text-center p-1 border border-[#01927C] rounded-full bg-[#E8F9F7]">
            {users.userName}
          </div>
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
        <button className="relative" onClick={showModal}>
          <AiOutlineShoppingCart className="text-4xl text-black bg-[#FEE5C7] hover:bg-[#01927C] hover:text-white rounded-full p-2" />
          <span className="bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center absolute -top-1 -right-1">
            {listRices.map((item) => {
              const cartItemAmount = cartItem[item.id];
              return (
                <div key={item.id}>
                  {cartItemAmount > 0 && ` ${cartItemAmount}`}
                </div>
              );
            })}
          </span>
        </button>
        {isButtonVisible && <Button onClick={handleLogout}>Đăng xuất</Button>}
        {isModalOpen && <ModalCart />}
      </div>
    </div>
  );
};

export default Header;

import "./Header.css";
import { Dropdown, Button } from "antd";
import { FaUser } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import StoreContext from "../../store/store";
import ModalCart from "../modal/ModalCart";

const Header = () => {
  const { isModalOpen, setIsModalOpen, listRices, cartItem } =
    useContext(StoreContext);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [showUser, setShowUser] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    users
      ? (setUsers(users), setIsButtonVisible(true))
      : (setShowUser(false), setIsButtonVisible(false));
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("users");
    setShowUser(false);
    setIsButtonVisible(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const items = [
    {
      key: "1",
      label: (
        <div>
          {!isButtonVisible ? (
            <Link
              to="/dang-nhap"
              className="align-items-center flex justify-center"
            >
              <Button className="border-none">Đăng nhập</Button>
            </Link>
          ) : (
            <Button className="border-none" onClick={handleLogout}>
              Đăng xuất
            </Button>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="my-2 grid grid-cols-3 items-center justify-center justify-items-center gap-24 sm:gap-3">
      <div className="h-14 w-16 sm:w-16">
        <img
          src="../../../public/imgs/logo/photo_2024-06-01 15_06_00.jpeg"
          alt=""
        />
      </div>

      {/* hotline */}
      <div className="flex h-12 w-44 items-center rounded border border-black bg-[#E8F9F7]">
        <div className="mx-2 text-3xl text-[#01927C]">
          <FaPhoneVolume />
        </div>
        <div className="text-center text-sm">
          <p>Hotline</p>
          <a href="tel:02871099188" className="font-bold text-[#01927C]">
            (028)710.99188
          </a>
        </div>
      </div>
      {/** icon */}
      <div className="flex gap-3">
        {showUser && (
          <div className="rounded-full border border-[#01927C] bg-[#E8F9F7] p-1 text-center">
            {users.userName}
          </div>
        )}
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomLeft"
          className="rounded-full bg-[#E8F9F7] p-2 text-4xl text-black hover:bg-[#01927C] hover:text-white"
        >
          <FaUser />
        </Dropdown>
        <AiFillHeart className="rounded-full bg-[#F6F3E3] p-2 text-4xl text-black hover:bg-[#01927C] hover:text-white" />
        <button className="relative" onClick={showModal}>
          <AiOutlineShoppingCart className="rounded-full bg-[#FEE5C7] p-2 text-4xl text-black hover:bg-[#01927C] hover:text-white" />
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-sm text-white">
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
        {isModalOpen && <ModalCart />}
      </div>
    </div>
  );
};

export default Header;

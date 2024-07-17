import { Modal } from "antd";
import { useContext } from "react";
import StoreContext from "../../store/store";
import CartItem from "./CartItem";
import { FaDollarSign } from "react-icons/fa";

const ModalCart = () => {
  const {
    isModalOpen,
    setIsModalOpen,
    cartItem,
    listRices,
    getTotalCartAmount,
  } = useContext(StoreContext);

  const totalAmount = getTotalCartAmount();
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <div>
          <h1 className="border-b-2 text-4xl p-2">Giỏ hàng</h1>
        </div>
        <div>
          {listRices.map((item) => {
            if (cartItem[item.id] !== 0) {
              return <CartItem key={item.id} item={item} />;
            }
          })}
        </div>
        <div className="flex justify-end items-center border-t my-10 py-5">
          <p className="text-2xl">Total:</p>
          <FaDollarSign size={30} />
          <h1 className="text-3xl text-red-500">{totalAmount}</h1>
        </div>
      </Modal>
    </div>
  );
};

export default ModalCart;

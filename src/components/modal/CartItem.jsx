import { Button, Input } from "antd";
import { useContext } from "react";
import StoreContext from "../../store/store";
import { FaDollarSign } from "react-icons/fa";

const CartItem = ({ item }) => {
  const { cartItem, addToCart, removeCart, updateCartItemCount } =
    useContext(StoreContext);

  return (
    <div className=" border border-solid border-black rounded-lg  w-[50%] shadow-2xl my-5">
      <div className="flex gap-5 my-5">
        <img src={item.image} alt="" className="w-20" />
        <div>
          <h3>{item.name}</h3>
          <div className="flex items-center my-5">
            <FaDollarSign className="text-xl" />
            <p className="font-bold text-xl text-red-500">
              {item.price * cartItem[item.id]}
            </p>
          </div>
          <div className="flex">
            <Button onClick={() => removeCart(item.id)}>-</Button>
            <Input
              className="w-16 text-center"
              value={cartItem[item.id]}
              size="small"
              onChange={(e) =>
                updateCartItemCount(Number(e.target.value), item.id)
              }
            />
            <Button onClick={() => addToCart(item.id)}>+</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

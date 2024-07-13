import { useContext, useState } from "react";
import StoreContext from "../../store/store";

const CartItem = () => {
  // Khởi tạo state để quản lý số lượng sản phẩm
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(StoreContext);

  // Hàm tăng số lượng sản phẩm
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Hàm giảm số lượng sản phẩm
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  // Hàm đặt lại số lượng sản phẩm (tùy chọn)
  const resetQuantity = () => {
    setQuantity(1);
  };

  return (
    <div className="cart-item">
      <h3>Tên sản phẩm</h3>
      <div className="quantity-control">
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>
      <button onClick={resetQuantity}>Đặt lại số lượng</button>
      <button onClick={() => addToCart(name, quantity)}>Add to Cart</button>
    </div>
  );
};

export default CartItem;

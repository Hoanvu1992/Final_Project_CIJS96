import StoreContext from "./store.js";
import riceLists from "../data/riceLists.js";
import serviceLists from "../data/serviceList.js";
import { useState, useMemo, useEffect } from "react";
import newLists from "../data/newsLists.js";

const getDefaultCart = () => {
  let cart = {};

  for (let i = 1; i < riceLists.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const StoreComponent = (props) => {
  const [listRices, setListRices] = useState(riceLists);
  const [listServices, setListServices] = useState(serviceLists);
  const [listTintuc, setListTintuc] = useState(newLists);
  const [filterRice, setFilterRice] = useState(listRices);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItem, setCartItem] = useState(getDefaultCart());
  const [authUser, setAuthUser] = useState([]);

  const cartItemAmount = riceLists.map((item) => {
    return cartItem[item.id];
  });

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(listRices));
  }, [listRices]);
  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    setIsModalOpen(true);
  };

  const removeCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (let item in cartItem) {
      totalAmount +=
        cartItem[item] *
        riceLists.find((rice) => rice.id === parseInt(item)).price;
    }
    return totalAmount;
  };
  return (
    <div>
      <StoreContext.Provider
        value={{
          listRices,
          setListRices,
          listServices,
          authUser,
          filterRice,
          setFilterRice,
          isModalOpen,
          setIsModalOpen,
          listTintuc,
          cartItem,
          setCartItem,
          addToCart,
          removeCart,
          cartItemAmount,
          updateCartItemCount,
          getTotalCartAmount,
          setAuthUser,
        }}
      >
        {props.children}
      </StoreContext.Provider>
    </div>
  );
};

export default StoreComponent;

import StoreContext from "./store.js";
import riceLists from "../data/riceLists.js";
import serviceLists from "../data/serviceList.js";
import { useEffect, useState, useMemo } from "react";
import auth from "../data/users.js";

const StoreComponent = (props) => {
  const [listRices, setListRices] = useState(riceLists);
  const [listServices, setListServices] = useState(serviceLists);
  const [filterRice, setFilterRice] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const authUser = auth;

  useEffect(() => {
    setFilterRice(listRices);
  }, [listRices]);

  return (
    <div>
      <StoreContext.Provider
        value={useMemo(
          () => ({
            listRices,
            setListRices,
            listServices,
            authUser,
            filterRice,
            setFilterRice,
            isModalOpen,
            setIsModalOpen,
          }),
          [
            listRices,
            listServices,
            authUser,
            filterRice,
            setFilterRice,
            isModalOpen,
            setIsModalOpen,
          ]
        )}
      >
        {props.children}
      </StoreContext.Provider>
    </div>
  );
};

export default StoreComponent;

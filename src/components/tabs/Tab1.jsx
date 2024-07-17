import { Rate } from "antd";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StoreContext from "../../store/store";
import { FaDollarSign } from "react-icons/fa";

const Tab1 = () => {
  const { listRices } = useContext(StoreContext);
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="mx-[20%] grid grid-cols-3 justify-items-center gap-10">
      {listRices
        .filter((item) => {
          return item.id < 2;
        })
        .map((item) => {
          return (
            <button
              key={item.id}
              className="border border-1 rounded-lg px-5 my-5 bg-[#F4F4F4] text-start"
              onClick={() => navigate(`/san-pham/${item.id}`)}
            >
              <img
                src={item.image}
                alt=""
                className="w-[50%] m-auto hover:scale-110"
              />
              <p>Còn hàng</p>
              <Rate allowHalf defaultValue={item.rating} className="my-2" />
              <p className="font-bold text-sm h-[50px] py-5">{item.name}</p>
              <div className="flex justify-start items-center">
                <FaDollarSign className="text-xl" />
                <b className="text-xl text-red-600 my-5">{item.price} VND</b>
              </div>
            </button>
          );
        })}
    </div>
  );
};

export default Tab1;

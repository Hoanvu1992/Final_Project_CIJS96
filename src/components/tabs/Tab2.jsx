import { useContext } from "react";
import StoreContext from "../../store/store";
import { useNavigate, useParams } from "react-router-dom";
import { Rate } from "antd";
import { FaDollarSign } from "react-icons/fa";

const Tab2 = () => {
  const { listRices } = useContext(StoreContext);
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="mx-[20%] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-10">
      {listRices
        .filter((item) => {
          return item.id < 5 && item.id > 1;
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

export default Tab2;

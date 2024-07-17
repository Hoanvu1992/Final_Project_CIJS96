import { Button } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import StoreContext from "../../store/store";

const ShowService = () => {
  const { listServices } = useContext(StoreContext);
  return (
    <div
      className="service-element text-center p-10"
      style={{
        backgroundImage: "url(../../../../../public/imgs/bg/h4-bg-title.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      {/*Title dịch vụ  */}
      <div className="service-title text-2xl font-bold mb-5">
        <span className="text-[#01927C]">DỊCH VỤ</span>
        <span className="text-[#433520]"> CỦA CHÚNG TÔI</span>
      </div>
      <div className="product-text">
        <p className="w-[40%] m-auto text-[#4B4B4B]">
          Mục đích của chúng tôi là xây dựng các giải pháp loại bỏ các rào cản
          ngăn cản mọi người làm việc tốt nhất của họ và đây là trọng tâm.
        </p>
      </div>
      {/*Card dịch vụ  */}
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  justify-items-center gap-10 mx-[20%]">
        {listServices
          .filter((item) => {
            return item.id < 3;
          })
          .map((item) => {
            return (
              <div
                key={item.id}
                className="service-card flex justify-center gap-10 my-10"
              >
                <div className="border border-1 rounded-lg p-5">
                  <img
                    src={item.image}
                    alt=""
                    className="w-[50%] h-[50%] m-auto object-cover hover:scale-110"
                  />
                  <h1 className="text-xl font-bold mt-5">{item.name}</h1>
                  <p className="text-xs my-5">{item.description}</p>
                  <Button className="bg-[#01927C] text-white">
                    <Link to="/dich-vu">Xem thêm</Link>
                  </Button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ShowService;

import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import StoreContext from "../../store/store";
import RightPane from "../../components/right-pane/RightPane";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Services = () => {
  const { listServices } = useContext(StoreContext);
  return (
    <div>
      <Header />
      <Navbar />
      <div className="relative h-10 border-y py-2">
        <div className="flex gap-3 items-center absolute left-80">
          <FaHome />
          <p className="text-sm">Trang chủ/ Tin tức</p>
        </div>
      </div>
      <div className="flex justify-center my-10 ">
        <div className="w-2/5 grid lg:grid-cols-2 sm:grid-cols-1 gap-y-10 gap-x-5">
          {listServices.map((item) => {
            return (
              <div key={item.id} className=" text-sm">
                <div className="">
                  <div className="h-[350px] mb-3">
                    <img
                      src={item.image}
                      alt=""
                      className="h-[350px] w-4/5 object-cover m-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                    />
                  </div>
                  <p className="h-11 p-3 text-center bg-[#433520] text-white font-bold">
                    {item.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <RightPane />
      </div>
      <Footer />
    </div>
  );
};

export default Services;

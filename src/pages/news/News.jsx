import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import StoreContext from "../../store/store";
import RightPane from "../../components/right-pane/RightPane";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const News = () => {
  const { listTintuc } = useContext(StoreContext);
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
        <div className="w-2/5 grid lg:grid-cols-2 sm:grid-cols-1 gap-10 mt-16">
          {listTintuc.map((item) => {
            return (
              <div key={item.id} className=" text-sm">
                <div className="mb-10">
                  <img
                    src={item.imageNew}
                    alt=""
                    className="h-[200px] object-cover m-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  />
                </div>
                <p className="p-3 text-center font-bold">{item.title}</p>
                <p>{item.content}</p>
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

export default News;

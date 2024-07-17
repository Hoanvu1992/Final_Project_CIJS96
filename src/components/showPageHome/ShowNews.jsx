import { useContext } from "react";
import StoreContext from "../../store/store";

const ShowNews = () => {
  const { listTintuc } = useContext(StoreContext);
  return (
    <div
      className="service-element text-center p-10 bg-[#EBF7ED]"
      style={{
        backgroundImage: "url(../../../../../public/imgs/bg/h4-bg-title.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      {/*Title tin tức  */}
      <div className="service-title text-2xl font-bold mb-5">
        <span className="text-[#01927C]">TIN TỨC</span>
        <span className="text-[#433520]"> MỚI</span>
      </div>
      <div className="product-text">
        <p className="w-[40%] m-auto text-[#4B4B4B]">
          Tin tức về thực phẩm mới nhất, hot nhất và được quan tâm nhất.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-10 mx-[10%] mt-10">
        {listTintuc
          .filter((item) => {
            return item.id <= 3;
          })
          .map((item) => {
            return (
              <div key={item.id} className="justify-center mx-[10%]">
                <img
                  src={item.imageNew}
                  className="h-[50%] object-cover m-auto mb-5 hover:scale-110 mx-auto"
                ></img>
                <p className="px-10 text-sm font-bold mb-5">{item.title}</p>
                <p className="px-10 text-sm font-light">{item.content}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ShowNews;

import Carousels from "../../components/carousel/Carousel";
import ShowProduct from "../../components/showPageHome/ShowProduct";
import ShowRiceSale from "../../components/showPageHome/ShowRiceSale";
import ShowService from "../../components/showPageHome/ShowService";

const Home = () => {
  return (
    <div>
      {/* slide  */}
      <div className="carousel-element">
        <Carousels />
      </div>
      {/* Dịch vụ*/}
      <div className="service-element">
        <ShowService />
      </div>
      {/* sale  */}
      <ShowRiceSale />
      {/* Sản phẩm  */}
      <div className="product-element">
        <ShowProduct />
      </div>
    </div>
  );
};

export default Home;

import Carousels from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import ShowNews from "../../components/showPageHome/ShowNews";
import ShowProduct from "../../components/showPageHome/ShowProduct";
import ShowRiceSale from "../../components/showPageHome/ShowRiceSale";
import ShowService from "../../components/showPageHome/ShowService";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
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
      <div>
        <ShowNews />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

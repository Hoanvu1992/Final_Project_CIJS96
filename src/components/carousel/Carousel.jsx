import { Carousel } from "antd";

const contentStyle = {
  width: "100%",
  height: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Carousels = () => {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <img
            src="../../../public/imgs/Banner/cover web_01.jpg"
            alt=""
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="../../../public/imgs/Banner/cover web_02.jpg"
            alt=""
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="../../../public/imgs/Banner/cover web_03.jpg"
            alt=""
            style={contentStyle}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Carousels;

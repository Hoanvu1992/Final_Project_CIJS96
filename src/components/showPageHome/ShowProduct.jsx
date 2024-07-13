import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import Tab3 from "../tabs/Tab3";
import Tab2 from "../tabs/Tab2";
import Tab1 from "../tabs/Tab1";

const ShowProduct = () => {
  return (
    <div>
      {/* phần sản phẩm  */}
      <div
        className="product-element text-center my-10 "
        style={{
          backgroundImage: "url(../../../../../public/imgs/bg/h4-bg-title.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
        }}
      >
        {/* title của sản phẩm   */}
        <div className="product-title text-2xl font-bold mb-5">
          <span className="text-[#01927C]">GIÁ TỐT NHẤT</span>
          <span className="text-[#433520]"> & CUNG CẤP SẢN PHẨM MỚI</span>
        </div>
        {/* text của sản phẩm  */}
        <div className="product-text">
          <p className="w-[40%] m-auto text-[#4B4B4B]">
            Với phương trâm “Gạo chất từng hạt – Cơm ngon từng bát” Thế Giới Gạo
            cung cấp đến quý khách các sản phẩm gạo chất lượng, an toàn.
          </p>
        </div>
        {/* tabs sản phẩm */}
        <div className="product-card text-start ">
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Gạo tấm Việt Nam" key="1">
              <Tab1 />
            </TabPane>
            <TabPane tab="Gạo Thơm Việt Nam" key="2">
              <Tab2 />
            </TabPane>
            <TabPane tab="Gạo thơm thượng hạng" key="3">
              <Tab3 />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;

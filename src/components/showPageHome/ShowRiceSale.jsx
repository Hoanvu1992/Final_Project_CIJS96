import { Button } from "antd";

const ShowRiceSale = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  gap-10 justify-items-center bg-[#F9F4EE] p-10">
      <div className="flex justify-center items-center relative  bg-white  lg:justify-self-end sm:justify-self-center lg:w-[60%] sm:w-[80%]">
        <div className="text-center w-[70%] m-5">
          <h1>GẠO ĐẶT SẢN</h1>
          <p className="text-sm font-serif my-3">
            Với phương trâm “Gạo chất từng hạt – Cơm ngon từng bát” Djissa Gạo
            cung cấp đến quý khách các sản phẩm gạo chất lượng, an toàn.
          </p>
          <Button className="bg-[#433520] text-white">Mua ngay</Button>
        </div>
        <div>
          <img
            src="../../../public/imgs/hinh_anh/sale-percen.png"
            alt=""
            className="w-[20%] object-cover absolute  top-0 right-0 p-2"
          />
          <img
            src="../../../public/imgs/hinh_anh/rice-sale-1.png"
            alt=""
            className="w-full object-cover"
          />
        </div>
      </div>

      <div className="flex justify-center items-center lg:justify-self-start sm:justify-self-center relative bg-white lg:w-[60%] sm:w-[80%]">
        <div className="text-center w-[70%] m-5">
          <h1>GẠO TẺ THƠM NGON</h1>
          <p className="text-sm font-serif my-3">
            Với phương trâm “Gạo chất từng hạt – Cơm ngon từng bát” Thế Giới Gạo
            cung cấp đến quý khách các sản phẩm gạo chất lượng, an toàn.
          </p>
          <Button className="bg-[#01927C] text-white">Mua ngay</Button>
        </div>
        <div>
          <img
            src="../../../public/imgs/hinh_anh/sale-percen.png"
            alt=""
            className="w-[20%] object-cover absolute  top-0 right-0 p-2"
          />
          <img
            src="../../../public/imgs/hinh_anh/2.png"
            alt=""
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ShowRiceSale;

import {
  AiFillEnvironment,
  AiFillPhone,
  AiFillMail,
  AiFillTags,
} from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { Button, Input, Space } from "antd";

const Footer = () => {
  return (
    <div>
      <div className="grid justify-items-center bg-[#433520] text-sm font-light leading-loose text-white sm:grid-cols-1 lg:grid-cols-2">
        <div className="my-10">
          <h1 className="mb-5 text-2xl font-bold">CÔNG TY TNHH DJISSA</h1>
          <div className="flex items-center gap-3">
            <AiFillEnvironment />
            <p>Address: 1K, Ngô Văn Sở, phường 13, quận 4, TPHCM</p>
          </div>
          <div className="flex items-center gap-3">
            <AiFillPhone />
            <p>Tell: 0902005200</p>
          </div>
          <div className="flex items-center gap-3">
            <AiFillMail />
            <p>Mail: info@djissa.vn</p>
          </div>
          <div className="mb-3 flex items-center gap-3">
            <AiFillTags />
            <p>TaxCode: 0318281539</p>
          </div>
          <div className="flex gap-3">
            <FiFacebook className="rounded-full border border-solid border-white p-1 text-3xl text-white hover:bg-[#04937C]" />
            <SiZalo className="rounded-full border border-solid border-white p-1 text-3xl text-white hover:bg-[#04937C]" />
            <FaYoutube className="rounded-full border border-solid border-white p-1 text-3xl text-white hover:bg-[#04937C]" />
          </div>
        </div>
        <div className="my-10">
          <h1 className="mb-5 text-2xl font-bold">Đăng ký nhận tin</h1>
          <p>
            Nhận thông tin sản phẩm mới nhất, tin khuyến mãi và nhìu hơn nữa.
          </p>
          <Space.Compact className="mt-2 w-full">
            <Input defaultValue="Địa chỉ email" className="sm:w-[70%]" />
            <Button className="bg-[#01927C] text-white">Đăng ký</Button>
          </Space.Compact>
          <div>
            <img
              src="../../../public/imgs/logo/dathongbao.png"
              alt=""
              className="mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

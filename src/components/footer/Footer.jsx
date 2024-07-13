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
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="h-72 flex justify-evenly bg-[#433520] text-white leading-loose text-sm font-light">
        <div>
          <h1 className="text-2xl font-bold text-center mt-10 mb-5">
            CÔNG TY TNHH DJISSA
          </h1>
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
          <div className="flex items-center gap-3 mb-3">
            <AiFillTags />
            <p>TaxCode: 0318281539</p>
          </div>
          <div className="flex gap-3">
            <FiFacebook className="text-3xl p-1 text-white hover:bg-[#04937C] border border-solid border-white rounded-full" />
            <SiZalo className="text-3xl p-1 text-white hover:bg-[#04937C] border border-solid border-white rounded-full" />
            <FaYoutube className="text-3xl p-1 text-white hover:bg-[#04937C] border border-solid border-white rounded-full" />
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl font-bold mt-10 mb-5">Đăng ký nhận tin</h1>
          <p>
            Nhận thông tin sản phẩm mới nhất, tin khuyến mãi và nhìu hơn nữa.
          </p>
          <Space.Compact className="w-full mt-2">
            <Input defaultValue="Địa chỉ email" />
            <Button className="bg-[#01927C] text-white">Đăng ký</Button>
          </Space.Compact>
          <div>
            <img
              src="../../../public/imgs/logo/dathongbao.png"
              alt=""
              className="w-2/5 mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

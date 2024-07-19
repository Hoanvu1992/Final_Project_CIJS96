import { Button, Input, notification } from "antd";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useState } from "react";

const { TextArea } = Input;
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [content, setContent] = useState("");
  const submitContacts = () => {
    const InformationContact = {
      name: name,
      email: email,
      address: address,
      phone: phone,
      content: content,
    };
    notification.success({
      message: "Gửi liên hệ thành công",
    });
    localStorage.setItem(
      "InformationContact",
      JSON.stringify(InformationContact),
    );
  };
  return (
    <div>
      <Header />
      <Navbar />
      <div className="mx-auto my-10 grid w-[60%] justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6409295640506!2d106.70788477529891!3d10.762131959456669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f68b9c16ec3%3A0xc61eecd923c0b2de!2zMUsgTmfDtCBWxINuIFPhu58sIFBoxrDhu51uZyAxMywgUXXhuq1uIDQsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1720871936344!5m2!1svi!2s"
          title="Map"
          className="border-1 rounded-lg border border-red-950"
          style={{
            width: "1000px",
            height: "300px",
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade",
          }}
        ></iframe>
      </div>
      <div className="mx-auto mb-10 grid w-[60%] grid-cols-2 justify-center gap-10">
        <div>
          <h1 className="mb-5 border-b pb-3 text-xl font-bold text-[#433520]">
            THÔNG TIN CÔNG TY DJISSA
          </h1>
          <p className="mb-5 text-sm">
            Với phương châm “Gạo chất từng hạt – Cơm ngon từng bát” Thế Giới Gạo
            cung cấp đến quý khách các sản phẩm gạo chất lượng, an toàn.
          </p>
          <div>
            <p className="mb-2 text-sm">Hotline: 090.200.5200 </p>
            <p className="mb-2 text-sm">Email: info@djissa.vn</p>
            <p className="mb-2 text-sm">
              Address: 1K Ngô Văn Sở, Phường 13, Quận 4, TP Hồ Chí Minh
            </p>
            <p className="mb-2 text-sm">Tax code: 0318281539</p>
          </div>
        </div>
        <div>
          <h1 className="mb-5 border-b pb-3 text-xl font-bold text-[#433520]">
            GỬI THÔNG TIN CHO CHÚNG TÔI
          </h1>
          <div>
            <form>
              <div className="mb-5 grid grid-cols-2 gap-5">
                <Input
                  type="text"
                  name="name"
                  placeholder="Họ tên"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="mb-5 grid grid-cols-2 gap-5">
                <Input
                  type="text"
                  name="address"
                  placeholder="Địa chỉ"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
                <Input
                  type="text"
                  name="phone"
                  placeholder="Điện thoại"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
              <TextArea
                rows={4}
                placeholder="Nội dung"
                maxLength={6}
                className="mb-5"
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
              <Button onClick={() => submitContacts()}>Gửi</Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

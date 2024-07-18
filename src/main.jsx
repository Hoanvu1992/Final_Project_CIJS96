import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/Home.jsx";
import Introduce from "./pages/introduce/Introduce.jsx";
import Products from "./pages/products/Products.jsx";
import Services from "./pages/service/Services.jsx";
import News from "./pages/news/News.jsx";
import Library from "./pages/library/Library.jsx";
import Contact from "./pages/contact/Contact.jsx";
import StoreComponent from "./store/StoreComponent.jsx";
import Notfound from "./pages/notfound/NotFound.jsx";
import Login from "./pages/login/Login.jsx";
import ProductBrokenRice from "./pages/products/productDetail/ProductBrokenRice.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreComponent>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dang-nhap" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gioi-thieu" element={<Introduce />} />
        <Route path="/san-pham" element={<Products />} />
        <Route path="/san-pham/:id" element={<ProductBrokenRice />} />
        <Route path="/dich-vu" element={<Services />} />
        <Route path="/tin-tuc" element={<News />} />
        <Route path="/thu-vien" element={<Library />} />
        <Route path="/lien-he" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  </StoreComponent>
);

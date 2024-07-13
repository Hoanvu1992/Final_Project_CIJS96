import "./App.css";
import Home from "./pages/homepage/Home";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

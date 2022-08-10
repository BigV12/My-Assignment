import "./App.css";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import FreshProduct from "./components/LandingPage/FreshProduct";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Menu from "./components/Menu/Menu";
import OrderAndCall from "./components/OrderAndCall/OrderAndCall";
import LocalFood from "./components/LocalFood/LocalFood";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />

      <FreshProduct />
      <HowItWorks />
      <Menu />
      <OrderAndCall />
      <LocalFood />
      <Footer />
    </div>
  );
}

export default App;

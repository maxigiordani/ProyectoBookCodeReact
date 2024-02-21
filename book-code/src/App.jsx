import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/layout/Footer";
import ContactUs from "./components/pages/ConctactUs";
import ProductDetail from "./components/pages/Productdetail";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";



function App() {
  return (
    <>
      <ContactUs></ContactUs>
      <ProductDetail></ProductDetail>
      <Login></Login>
      <Register></Register>
      <Footer></Footer>
    </>
  );
}

export default App;

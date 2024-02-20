import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Footer from "./components/layout/Footer";
import ContactUs from "./components/pages/ConctactUs";
import ProductDetail from "./components/pages/Productdetail";
import Register from "./components/pages/Register";



function App() {

  return (
    <>
      <Footer></Footer>
      <ContactUs></ContactUs>
      <ProductDetail></ProductDetail>
      <Register></Register>
    </>
  )
}

export default App

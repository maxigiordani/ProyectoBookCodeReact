import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Footer from "./components/layout/Footer";
import ContactUs from "./components/pages/ConctactUs";
import ProductDetail from "./components/pages/Productdetail";



function App() {

  return (
    <>
      <ContactUs></ContactUs>
      <ProductDetail></ProductDetail>
      <Footer></Footer>
    </>
  )
}

export default App

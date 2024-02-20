import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Footer from "./components/layout/Footer";
import ContactUs from "./components/pages/ConctactUs";
import ProductDetail from "./components/pages/Productdetail";
import Login from "./components/pages/Login";



function App() {

  return (
    <>
      <Footer></Footer>
      <ContactUs></ContactUs>
      <ProductDetail></ProductDetail>
    <Login></Login>
    </>
  )
}

export default App

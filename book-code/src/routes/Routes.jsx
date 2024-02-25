import { Routes, Route } from "react-router-dom";
import Home from '../components/pages/Home.jsx'
import Page404 from '../components/pages/Page404.jsx'
import ContactUs from "../components/pages/ConctactUs.jsx";

import React from 'react'

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Page404 />} />
      <Route path="ContactUs" element={<ContactUs />} />
    </Routes>
  )
}

export default Rutas
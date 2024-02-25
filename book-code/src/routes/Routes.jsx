import { Routes, Route } from "react-router-dom";
import Home from ''
import Page404 from ''

const Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

export default Routes
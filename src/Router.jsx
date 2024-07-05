import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/Product/Product";
import UserInfo from "./pages/PersonalInfo/PersonalInfo";
import Home from './pages/Home/Home';
import DisplayProduct from "./pages/DisplayProduct/DisplayProduct";


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<ProductPage />} />
        <Route path="/users" element={<UserInfo />} />
        <Route path="/display" element={<DisplayProduct />} />
        <Route path="/" element={<Home/>} />      
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

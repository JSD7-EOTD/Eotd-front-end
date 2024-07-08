import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/Product/Product";
import UserInfo from "./pages/PersonalInfo/PersonalInfo";
import Home from './pages/Home/Home';
import SuccessPage from "./pages/Status/SuccessPage";
import ErrorPage from "./pages/Status/ErrorPage";
import Loginpage from "./pages/Login/Login"


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<ProductPage />} />
        <Route path="/users" element={<UserInfo />} />
        <Route path="/" element={<Home/>} />
        <Route path="/status" element={<SuccessPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
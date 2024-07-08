import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/Product/Product";
import UserInfo from "./pages/PersonalInfo/PersonalInfo";
import Home from "./pages/Home/Home";
import SuccessPage from "./pages/Status/SuccessPage";
import ErrorPage from "./pages/Status/ErrorPage";
import Loginpage from "./pages/Login/Login";

import DisplayProduct from "./pages/DisplayProduct/DisplayProduct";
import Register from "./pages/Register/Register";

function Router() {
  return (
    <Routes>
      <Route path="/Products" element={<ProductPage />} />
      <Route path="/users" element={<UserInfo />} />
      <Route path="/display" element={<DisplayProduct />} />
      <Route path="/" element={<Home />} />
      <Route path="/status" element={<SuccessPage />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/regis" element={<Register />} />
    </Routes>
  );
}

export default Router;

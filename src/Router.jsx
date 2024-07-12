import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/Product/Product";
import UserInfo from "./pages/PersonalInfo/PersonalInfo";
import Home from './pages/Home/Home';
import SuccessPage from "./pages/Status/SuccessPage";
import ErrorPage from "./pages/Status/ErrorPage";
import Loginpage from "./pages/Login/Login"

import DisplayProduct from "./pages/DisplayProduct/DisplayProduct";
import Register from "./pages/Register/Register";
import CartPage from "./pages/Cart/CartPage"
import ConfirmAndPay from "./pages/ConfirmAndPay/ConfirmAndPay";


function Router() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />     
        <Route path="/Products" element={<ProductPage />} />
        <Route path="/users" element={<UserInfo />} />
        <Route path="/Products/:_id" element={<DisplayProduct />} />
        <Route path="/Cart" element={<CartPage /> } />
        <Route path="/status" element={<SuccessPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/regis" element={<Register/>}/>
        <Route path="/confirmpayment" element={<ConfirmAndPay/>}/>  
      </Routes>
  );
}

export default Router;
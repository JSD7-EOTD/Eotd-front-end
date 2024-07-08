import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/Product/Product";
import UserInfo from "./pages/PersonalInfo/PersonalInfo";
import Home from './pages/Home/Home';

function Router() {
  return (
      <Routes>
        <Route path="/Products" element={<ProductPage />} />
        <Route path="/users" element={<UserInfo />} />
        <Route path="/" element={<Home/>} />
      </Routes>
  );
}

export default Router;

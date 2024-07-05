import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/Product/Product';
import Home from './pages/Home/Home';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/products" element={<ProductPage />} />
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
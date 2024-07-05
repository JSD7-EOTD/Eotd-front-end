import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/Product/Product';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/products" element={<ProductPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
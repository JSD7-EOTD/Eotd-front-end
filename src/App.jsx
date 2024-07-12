import { useState } from "react";
import { CartContextProvider } from "./context/CartContext";
import Router from "./Router";
import ProductContextProvider from "./context/productsContext";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    
    <BrowserRouter>
      <AuthProvider>
        <CartContextProvider>
          <ProductContextProvider>
            <Router />
          </ProductContextProvider>
        </CartContextProvider>
      </AuthProvider>
    </BrowserRouter>
      
      
    
  );
}

export default App;

import { useState } from "react";
import { CartContextProvider } from "./context/CartContext";
import Router from "./Router";
import ProductContextProvider from "./context/productsContext";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    
    <BrowserRouter>
      <CartContextProvider>
        <ProductContextProvider>
          <Router />
        </ProductContextProvider>
      </CartContextProvider>
    </BrowserRouter>
      
      
    
  );
}

export default App;

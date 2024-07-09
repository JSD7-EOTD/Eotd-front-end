import { useState } from "react";

import Router from "./Router";
import ProductContextProvider from "./context/productsContext";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    
    <BrowserRouter>
      <ProductContextProvider>
        <Router />
      </ProductContextProvider>
    </BrowserRouter>
      
      
    
  );
}

export default App;

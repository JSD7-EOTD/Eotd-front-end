// import { useNavigate } from 'react-router-dom';
// import {
//   createContext, useContext, useState,
// } from 'react';

// import * as productApi from '../API/productsApi'

// const ProductContext = createContext();

// function ProductContextProvider({ children }) {
//     const [productList, setProductList] = useState([]);


//     useEffect(() => {
//     const getAllProducts = async () =>{
//         try {
//             const res = await productApi.getAllProduct()
//             setProductList(res)
            
//         } catch (error) {
//             console.log(error)
//         }
//      }
//     getAllProducts()
//     },[]);

//     return (
//         <ProductContext.Provider value={{productList}}>{children}</ProductContext.Provider>
//     )

// }

// export const useProduct = () => useContext(ProductContext)

// export default ProductContextProvider


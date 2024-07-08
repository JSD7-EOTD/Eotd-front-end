import { useNavigate } from 'react-router-dom';
import {
  createContext, useContext, useState,useEffect
} from 'react';

import * as productApi from '../API/productsApi'

const ProductContext = createContext();

function ProductContextProvider({ children }) {
    const [productList, setProductList] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
    const getAllProducts = async () =>{
        try {
            const res = await productApi.getAllProduct()
            const products = res.data
            setProductList(products)
        navigate('/Products')
        } catch (error) {
            console.log(error)
        }
     }
    getAllProducts()
    },[]);
   

    const productObj = {productList}

    return (
        <ProductContext.Provider value={productObj}>{children}</ProductContext.Provider>
    )

}

export const useProduct = () => useContext(ProductContext)
export {ProductContext}
export default ProductContextProvider


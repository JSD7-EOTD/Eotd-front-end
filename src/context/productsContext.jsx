import { useNavigate } from 'react-router-dom';
import {
  createContext, useContext, useState,
} from 'react';

import * as productApi from '../API/productsApi'

const ProductContext = createContext();

function ProductContextProvider({ children }) {
    const [productList, setProductList] = useState([]);
}
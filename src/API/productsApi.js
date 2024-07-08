import axios from '../services/axios'

export const getAllProduct = () => axios.get("/Products")
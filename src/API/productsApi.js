import axios from '../services/axios'

export const getAllProduct = () => axios.get("/Products")
export const getOneProduct = (_id) => axios.get("Products/" + _id)
import axios from '../services/axios'

export const getAllProducts = async (filters = {}) => {
    const params = new URLSearchParams(filters).toString();
    const res = await axios.get(`/Products?${params}`);
    return res;
};
export const getOneProduct = (_id) => axios.get("Products/" + _id)
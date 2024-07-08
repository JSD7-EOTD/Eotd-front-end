import axios from 'axios'
import { API_END_POINT } from './env'

axios.defaults.baseURL = API_END_POINT;


export default axios
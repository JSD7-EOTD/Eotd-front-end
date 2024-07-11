import axios from "../services/axios"; 

const registerUser = async (formData) => {
try {
    const response = await axios.post("/api/auth/regis", formData);
    return response.data; 
} catch (error) {
    throw error; 
}
};

export default registerUser;

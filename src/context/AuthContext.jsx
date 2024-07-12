import React, { createContext, useContext, useState } from "react";
import axios from "../services/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
    username: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const login = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "/api/auth/login",
        formData
      );
      console.log("Login response:", response.data);

      const { user, token } = response.data;
      setUser(user);
      setToken(token);
      setFormData({ identifier: "", password: "" });
      setError("");
    } catch (error) {
      console.error("Login error:", error);
      if (error.response) {
        setError(error.response.data.message || "Login failed");
      } else if (error.request) {
        setError("Network error. Please try again.");
      } else {
        setError("Unexpected error. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const register = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/auth/register", formData);
      console.log("Registration response:", response.data);

      setFormData({ username: "", email: "", password: "" });
      setError("");
    } catch (error) {
      console.error("Registration error:", error);
      if (error.response) {
        setError(error.response.data.message || "Registration failed");
      } else if (error.request) {
        setError("Network error. Please try again.");
      } else {
        setError("Unexpected error. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ formData, handleChange, login, register, error, isLoading, user, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

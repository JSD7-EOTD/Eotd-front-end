import React, { useState } from "react";
import axios from "../../services/axios";
import { API_END_POINT } from "../../services/env";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("/api/auth/register", formData);
      console.log("Registration response:", response);
      console.log("Registration successful:", response.data);
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-6 flex flex-col gap-8 font-semibold text-zinc-600 md:w-1/2 md:flex md:place-content-center h-[100vh]">
      <div>
        <h2 className="text-xl font-bold text-[#794222]">
          Create your account
        </h2>
        <p className="text-[#BD8356]">It's free and easy</p>
      </div>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <div>
          <label>USERNAME</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            className="bg-slate-100 rounded p-2 w-full"
          />
        </div>
        <div>
          <label>EMAIL</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Type your e-mail"
            className="bg-slate-100 rounded p-2 w-full"
          />
        </div>
        <div>
          <label>PASSWORD</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Type your password"
            className="bg-slate-100 rounded p-2 w-full"
          />
        </div>
        <div className="text-zinc-400 -white">
          <input type="checkbox" className="" />
          By creating an account means you agree to the{" "}
          <a href="/" className="text-black">
            Terms
          </a>{" "}
          and{" "}
          <a href="/" className="text-black">
            Conditions
          </a>
          , and our{" "}
          <a href="/" className="text-black">
            Privacy Policy.
          </a>
        </div>
        {error && <p className="text-red-500">{error}</p>}

        <div className="bg-[#BD8356] hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1 text-white rounded-full text-center p-2 w-full">
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </div>
      </form>
      <div className="flex flex-col items-center gap-8 text-zinc-400 text-sm">
        <div>
          <p>or do it via other accounts</p>
        </div>
        <div>
          <nav>
            <ul className="flex gap-5">
              <li>
                <box-icon name="google" type="logo" color="#BD8356"></box-icon>
              </li>
              <li>
                <box-icon name="apple" type="logo" color="#BD8356"></box-icon>
              </li>
              <li>
                <box-icon
                  name="facebook"
                  type="logo"
                  color="#BD8356"
                ></box-icon>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <p>
            Already have an account?
            <Link to="/login" className="text-black">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;

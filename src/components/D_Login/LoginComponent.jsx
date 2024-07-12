import React from "react";
import Joi from "joi";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const LoginComponent = () => {
  const { formData, handleChange, login, error, isLoading, user, token } = useAuth();

  const schema = Joi.object({
    identifier: Joi.string()
      .label("Email or Username")
      .required()
      .messages({
        "string.empty": "Email/Username is required",
      }),
    password: Joi.string()
      .min(8)
      .max(16)
      .label("Password")
      .required()
      .messages({
        "string.empty": "Password is required",
        "string.min": "Password must be at least 8 characters long",
        "string.max": "Password must be at most 16 characters long",
      }),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error: validationError } = schema.validate(formData, {
      abortEarly: false,
    });
    // if (validationError) {
    //   const errorMessage = validationError.details
    //     .map((detail) => detail.message)
    //     .join(". ");
    //   setError(errorMessage);
    //   return;
    // }
    await login();
  };
  console.log(user)

  return (
    <div className="p-6 flex flex-col gap-8 font-semibold text-zinc-600 md:w-1/2 md:flex md:place-content-center h-[100vh]">
      <div>
        <h2 className="text-xl font-bold text-[#794222]">Login to your account</h2>
      </div>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <div>
          <label>Email or Username</label>
          <input
            type="text"
            name="identifier"
            value={formData.identifier}
            onChange={handleChange}
            placeholder="Enter your email or username"
            className="bg-slate-100 rounded p-2 w-full"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="bg-slate-100 rounded p-2 w-full"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="bg-[#BD8356] hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1 text-white rounded-full text-center p-2 w-full">
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging In..." : "Login"}
          </button>
        </div>
      </form>
      <div className="flex flex-col items-center gap-8 text-zinc-400 text-sm">
        <div>
          <p>or login via other accounts</p>
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
                <box-icon name="facebook" type="logo" color="#BD8356"></box-icon>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <p>
            Don't have an account?
            <Link to="/regis" className="text-black">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;

import React, { useState } from "react";
import Joi from "joi";

const LoginComponent = () => {
  const schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com"] } })
      .label("Email")
      .required()
      .messages({
        "string.empty": "Email is required",
        "string.email": "Please enter a valid email address",
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

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitLogin = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    const { error } = schema.validate({ email, password }, { abortEarly: false });
    if (error) {
      const errorMessages = {};
      error.details.forEach((detail) => {
        errorMessages[detail.path[0]] = detail.message;
      });
      setErrors(errorMessages);
    } else {
      setErrors({});
        alert("Login successful");
    }
  };

  return (
    <div className="p-6 flex flex-col gap-8 font-semibold text-zinc-600 md:w-1/2 md:place-content-center">
      <div>
        <h2 className="text-xl font-bold text-[#794222]">Welcome back!</h2>
        <p className="text-[#BD8356]">Meet the good taste today</p>
      </div>
      <form className="flex flex-col gap-8"onSubmit={submitLogin}>
        <div>
          <label>EMAIL or Username</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Type your e-mail"
            className="bg-slate-100 rounded p-2 w-full"
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
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
          {errors.password && <span className="text-red-500">{errors.password}</span>}
        </div>
        <a href="" className="text-xs text-zinc-400 flex justify-end">
          Forgot Password?
        </a>
        <div className="bg-[#BD8356] hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1 text-white rounded-full text-center p-2 w-full">
          <button type="submit">Sign In</button>
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
                <box-icon type="logo" name="facebook" color="#BD8356"></box-icon>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <p>
            Don't have an account?
            <a href="" className="text-black">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;

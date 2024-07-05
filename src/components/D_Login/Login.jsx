import React from "react";

const Login = () => {
  return (
    <div class=" p-6 flex flex-col gap-8 font-semibold text-zinc-600 md:w-1/2 md:place-content-center ">
      <div>
        <h2 class="text-xl font-bold text-[#794222]">Welcome back!</h2>
        <p className="text-[#BD8356]">Meet the good taste today</p>
      </div>
      <form className="flex flex-col gap-8">
        <div>
          <label>EMAIL</label>
          <input
            type="text"
            name="email"
            //   onChange={handleChange}
            placeholder="Type your e-mail"
            class="bg-slate-100 rounded p-2 w-full"
          />
          {/* {errors.email && <span className="text-red-500">{errors.email}</span>} */}
        </div>
        <div>
          <label>PASSWORD</label>
          <input
            type="password"
            name="password"
            //   onChange={handleChange}
            placeholder="Type your password"
            class="bg-slate-100 rounded p-2 w-full"
          />
          {/* {errors.password && <span className="text-red-500">{errors.password}</span>} */}
        </div>
        <a href="" class="text-xs text-zinc-400 flex justify-end">
          Forgot Password?
        </a>
        <div class="bg-[#BD8356] hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1 text-white rounded-full text-center p-2 w-full">
          <button>Sign In</button>
        </div>
      </form>
      <div class="flex flex-col items-center gap-8 text-zinc-400 text-sm">
        <div>
          <p>or do it via other accounts</p>
        </div>
        <div>
          <nav>
            <ul class="flex gap-5">
              <li>
                <box-icon name="google" type="logo" color="#BD8356"></box-icon>
              </li>
              <li>
                <box-icon name="apple" type="logo" color="#BD8356"></box-icon>
              </li>
              <li>
                <box-icon
                  type="logo"
                  name="facebook"
                  color="#BD8356"
                ></box-icon>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <p>
            Don't have an account?
            <a href="" class="text-black">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from 'react'

const CreateAccount = () => {
  return (
    <div className=" p-6 flex flex-col gap-8 font-semibold text-zinc-600 md:w-1/2 md:flex md:place-content-center h-[100vh]">
        <div>
          <h2 className="text-xl font-bold text-[#794222]">
            Create your account
          </h2>
          <p className="text-[#BD8356]">It's free and easy</p>
        </div>
        <form className="flex flex-col gap-8" >
          <div>
            <label>FULL NAME</label>
            <input
              type="text"
              name="fullName"
            //   onChange={handleChange}
              placeholder="Enter your name"
              className="bg-slate-100 rounded p-2 w-full"
            />
            {/* {errors.fullName && (
              <span className="text-red-500">{errors.fullName}</span>
            )} */}
          </div>
          <div>
            <label>EMAIL</label>
            <input
              type="text"
              name="email"
            //   onChange={handleChange}
              placeholder="Type your e-mail"
              className="bg-slate-100 rounded p-2 w-full"
            />
            {/* {errors.email && <span className="text-red-500">{errors.email}</span>} */}
          </div>
          <div>
            <label>PASSWORD</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Type your password"
              className="bg-slate-100 rounded p-2 w-full"
            />
            {/* {errors.password && <span className="text-red-500">{errors.password}</span>} */}
          </div>
          <div className="text-zinc-400 -white">
            <input type="checkbox" className="" />
            By creating an account means you agree to the
            <a href="" className="text-black">
              {" "}
              Terms{" "}
            </a>
            and
            <a href="" className="text-black">
              {" "}
              Conditions{" "}
            </a>
            , and our
            <a href="" className="text-black">
              {" "}
              Privacy Policy.
            </a>
          </div>
        

        <div className="bg-[#BD8356] hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1 text-white rounded-full text-center p-2 w-full">
          <button type="submit" >Sign Up</button>
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
                  <box-icon
                    name="google"
                    type="logo"
                    color="#BD8356"
                  ></box-icon>
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
              Aldready have an account?
              <a href="" className="text-black">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
  )
}

export default CreateAccount
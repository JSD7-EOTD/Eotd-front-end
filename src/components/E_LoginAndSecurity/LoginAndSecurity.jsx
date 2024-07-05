import React from "react";

const LoginAndSecurity = () => {
  return (
    <div className="container mx-auto ">
      <div className="px-4 py-4 flex flex-col gap-5">
        {/* Login and Security */}
        <h1 className="text-[#BD8356] text-2xl sm:text-3xl md:text-4xl font-bold">
          Login and security
        </h1>
        <div>
          <h3 className="text-info-content text-xl sm:text-2xl pt-4 font-bold">
            Login
          </h3>
          <h5 className="py-3 text-base sm:text-lg">
            Last updated 1 month ago
          </h5>
          <button className="border-2 border-[#E6E8EC] text-[#000000] px-4 py-2 rounded-3xl hover:bg-gray-200 hover:text-black transition-colors duration-200">
            Update password
          </button>
          <hr className="w-full border-t-2 mt-6" />
        </div>

        {/* Social accounts*/}
        <div>
          <h3 className="text-info-content text-xl sm:text-2xl py-4 font-bold">
            Social accounts
          </h3>

          {/* facebook*/}
          <div className="flex justify-between pb-7">
            <div className="flex-1">
              <h3 className="text-info-content text-base sm:text-lg pb-1">
                Facebook
              </h3>
              <h5 className="text-sm sm:text-base">Not connected</h5>
            </div>
            <div className="flex align-middle mt-4 sm:mt-0">
              <button className="border-2 border-[#E6E8EC] text-[#000000] px-4 py-2 rounded-3xl hover:bg-gray-200 hover:text-black transition-colors duration-200">
                Connect
              </button>
            </div>
          </div>

          {/* apple*/}
          <div className="flex justify-between pb-7">
            <div className="flex-1">
              <h3 className="text-info-content text-base sm:text-lg pb-1">
                Apple account
              </h3>
              <h5 className="text-sm sm:text-base">Not connected</h5>
            </div>
            <div className="flex align-middle mt-4 sm:mt-0">
              <button className="border-2 border-[#E6E8EC] text-[#000000] px-4 py-2 rounded-3xl hover:bg-gray-200 hover:text-black transition-colors duration-200">
                Connect
              </button>
            </div>
          </div>
          <hr className="w-full border-t-2 " />
        </div>

        {/* Device history*/}
        <div>
          <h3 className="text-info-content text-xl sm:text-2xl  py-4 font-bold">
            Device history
          </h3>
          <div className="flex justify-between pb-7">
            <div className="">
              <h3 className="flex-1 text-info-content pb-1">Session</h3>
              <h5 className="flex-1 text-sm">May 14, 2024 at 08:36pm</h5>
            </div>

            <div className="flex align-middle">
              <button className="border-2 border-[#E6E8EC] text-[#000000] px-4 py-2 rounded-3xl hover:bg-gray-200 hover:text-black transition-colors duration-200">
                Log out device
              </button>
            </div>
          </div>

          <hr className="w-full size-2 pb-10" />
          <div className="flex justify-between pb-7">
            <div className="">
              <h3 className="flex-1 text-info-content pb-1">
                macOs Big Sur. Chrome
              </h3>
              <h5 className="flex-1 text-sm">May 14, 2024 at 08:36pm</h5>
            </div>
            <div className="flex align-middle">
              <button className="border-2 border-[#E6E8EC] text-[#000000] px-4 py-2 rounded-3xl hover:bg-gray-200 hover:text-black transition-colors duration-200">
                Log out device
              </button>
            </div>
          </div>

          <hr className="w-full size-2 pb-10" />
          <div className="flex justify-between pb-7">
            <div className="">
              <h3 className="flex-1 text-info-content pb-1">Session</h3>
              <h5 className="flex-1 text-sm">May 14, 2024 at 08:36pm</h5>
            </div>
            <div className="flex align-middle">
              <button className="border-2 border-[#E6E8EC] text-[#000000] px-4 py-2 rounded-3xl hover:bg-gray-200 hover:text-black transition-colors duration-200">
                Log out device
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAndSecurity;

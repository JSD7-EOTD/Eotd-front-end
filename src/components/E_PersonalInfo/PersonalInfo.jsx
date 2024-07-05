import React from "react";

const PersonalInfo = () => {
  return (
    <div className="container mx-auto ">
      <form className="px-4 py-4 flex flex-col gap-5">
        {/* Personal Info & View profile */}

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#BD8356]">
            Personal info
          </h1>
          <button className="border-2 border-[#E6E8EC] text-[#000000] px-4 py-2 rounded-3xl hover:bg-gray-200 hover:text-black transition-colors duration-200">
            View profile
          </button>
        </div>
        {/* Account Info */}
        <div>
          <div className="text-base sm:text-lg md:text-xl text-[#BD8356]">
            Account info
          </div>
        </div>
        {/* Account Info - Detail */}
        <div className="flex flex-col gap-5">
          <div className="w-full">
            <label className="block text-gray-600 font-bold mb-1">
              DISPLAY NAME
            </label>
            <input
              type="text"
              name="displayName"
              placeholder="Enter your display name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
            />
            {/* {errors.displayName && (
              <span className="text-red-500">{errors.displayName}</span>
            )} */}
          </div>

          <div className="w-full">
            <label className="block text-gray-600 font-bold mb-1">
              FULL NAME
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
            />
            {/* {errors.fullName && (
              <span className="text-red-500">{errors.fullName}</span>
            )} */}
          </div>

          <div className="w-full">
            <label className="block text-gray-600 font-bold mb-1">PHONE</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
            />
            {/* {errors.phone && (
              <span className="text-red-500">{errors.phone}</span>
            )} */}
          </div>

          <div className="w-full">
            <label className="block text-gray-600 font-bold mb-1">EMAIL</label>
            <input
              type="text"
              name="email"
              placeholder="example@gmail.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
            />
            {/* {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )} */}
          </div>

          <div className="w-full">
            <label className="block text-gray-600 font-bold mb-1">
              ADDRESS
            </label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
            />
            {/* {errors.address && (
              <span className="text-red-500">{errors.address}</span>
            )} */}
          </div>
        </div>
        {/* BTN Update & Clear all */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center py-7">
          <button
            type="submit"
            className="bg-[#BD8356] text-white px-4 py-2 rounded-3xl hover:bg-[#794222] transition-colors duration-200"
          >
            Update profile
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-3xl hover:bg-gray-300 transition-colors duration-200">
            Clear all
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;

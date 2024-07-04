import React from "react";

const Dropdown = () => {
  return (
    <div>
      <div className="py-5 flex justify-center md:hidden">
        <select className="w-full max-w-xs bg-white text-gray-700 border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Personal info</option>
          <option>Login and security</option>
          <option>My payments</option>
          <option>My voucher</option>
          <option>My points</option>
          <option>My order</option>
        </select>
      </div>
    </div>
  );
};

export default Dropdown;

import "boxicons";
import React from "react";

const Categories = () => {
  return (
    <div>
      <div className="w-[300px] ">
        <div className="p-10 shadow-lg border rounded-2xl text-yellow-700 font-bold ">
          <nav className="flex gap-6 items-center mb-5">
            <box-icon name="user"></box-icon>
            <p>Personal info</p>
          </nav>

          <nav className="flex gap-6 items-center mb-5">
            <box-icon name="lock"></box-icon>
            <p>Login and security</p>
          </nav>

          <nav className="flex gap-6 items-center mb-5">
            <box-icon name="credit-card-alt"></box-icon>
            <p>My payments</p>
          </nav>

          <nav className="flex gap-6 items-center mb-5">
            <box-icon name="bell"></box-icon>
            <p>My orders</p>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Categories;

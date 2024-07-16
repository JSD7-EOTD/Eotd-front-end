import React from "react";
import { Link } from "react-router-dom";
import delivery from "../../../public/images/delivery.png"

const Success = () => {
  return (
    <div className="md:flex relative p-5 md:p-40 place-content-center gap-5 h-[677px]">
      <div className="flex justify-center md:block mb-5 md:mb-0 self-center">
        <img
          src={delivery}
          alt="order success"
          className="h-[100px] md:h-[200px]"
        />
      </div>
      <div className="content-center space-y-2 text-center md:text-left">
        <p className="text-sm font-bold text-gray-600">ORDER SUCCESSFUL</p>
        <h1 className="text-2xl md:text-3xl font-bold text-[#794222]">
          Thank you for your order!
        </h1>
        <p className="mt-2 text-gray-600">
          Order number is:{" "}
          <span className="text-gray-800 font-bold">#123456</span>
        </p>
        <p className="mt-2 text-gray-600">
          You can track your order in "My Order" section
        </p>
        <div className="flex flex-col md:flex-row justify-center md:justify-between">
          <a
            href="#"
            className="hover:bg-[#794222] hover:text-white py-2 px-4 border rounded-2xl mb-2 md:mb-0 md:mr-2 text-center"
          >
            Track my order
          </a>
          <Link
            to="/continueShopping"
            className="hover:bg-[#794222] hover:text-white py-2 px-4 border rounded-2xl text-center"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;

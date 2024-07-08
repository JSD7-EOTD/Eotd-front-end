import React from "react";

const Success = () => {
  return (
    <div className="md:flex relative mt-24 p-5 md:p-40 place-content-center gap-5">
      <div className="flex justify-center md:block mb-5 md:mb-0">
        <img src="../../../public/images/delivery.png" alt="order success" className="h-[100px] md:h-[200px]" />
      </div>
    <div className="content-center space-y-2 text-center md:text-left">
      <p className="text-sm font-bold text-gray-600">ORDER SUCCESSFUL</p>
      <h1 className="text-2xl md:text-3xl font-bold text-[#794222]">Thank you for your order!</h1>
      <p className="mt-2 text-gray-600">Order number is: <span className="text-gray-800 font-bold">#123456</span></p>
      <p className="mt-2 text-gray-600">You can track your order in "My Order" section</p>
    <div className="flex flex-col md:flex-row justify-center md:justify-between">
      <a href="#" className="hover:bg-[#794222] hover:text-white py-2 px-4 border rounded-2xl mb-2 md:mb-0 md:mr-2 text-center">Track my order</a>
      <a href="#" className="hover:bg-[#794222] hover:text-white py-2 px-4 border rounded-2xl text-center">Continue shopping</a>
    </div>
  </div>
</div>

  );
};

export default Success;

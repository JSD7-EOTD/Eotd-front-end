import React from "react";

const PreviousOrders = () => {
  return (
    <div className="bg-slate-100 p-5 rounded-3xl mb-5 w-[398px]">
      <div className="flex justify-between">
        <h3 className="text-[#BD8356]">Order #14256</h3>
        <h3 className="px-2 py-1 bg-[#BD8356] text-white text-sm rounded-md">
          Completed
        </h3>
      </div>

      <div className="flex items-center py-3 gap-2">
        <box-icon name="calendar-alt"></box-icon>
        <h6 className="text-sm">September 16,2023</h6>
        <box-icon name="time-five" className="ml-4"></box-icon>
        <h6 className="text-sm">11:54 PM</h6>
      </div>

      <div className="flex gap-3 mb-3 items-center">
        <button className="btn btn-xs bg-white text-[#BD8356] px-3 py-2 rounded-md">
          1
        </button>
        <h6 className="font-bold  text-[#BD8356]">Cat tower</h6>
      </div>

      <div className="flex gap-3 mb-3 items-center">
        <button className="btn btn-xs bg-white text-[#BD8356] px-3 py-2 rounded-md">
          1
        </button>
        <h6 className="font-bold  text-[#BD8356]">Dog tower</h6>
      </div>

      <div className="flex gap-3 justify-start py-2">
        <button className="bg-[#BD8356] text-white px-4 py-2 rounded-xl hover:bg-[#794222] transition-colors duration-200 w-full font-bold">
          Details
        </button>
        <button className="bg-white text-[#BD8356] px-4 py-2 rounded-xl hover:bg-[#794222] transition-colors duration-200 w-full font-bold">
          Get helps
        </button>
      </div>
    </div>
  );
};

export default PreviousOrders;

import React from "react";
import "boxicons";

const UpComingOrders = () => {
  return (
    <div className="bg-slate-100 p-5 rounded-3xl w-[398px]">
      <h3 className="pb-3  text-[#BD8356]">#Order 123456</h3>
      <div className="flex items-center gap-3">
        <box-icon name="time-five" className="scale-125 mr-7"></box-icon>
        <div className="flex-1 flex flex-col">
          <h3 className="text-sm ">Tracking Number: JSD7LOVER</h3>
          <h1 className=" text-[#BD8356] font-bold text-2xl">35 min</h1>
        </div>
        <button className="bg-[#BD8356] text-white px-4 py-2 rounded-xl hover:bg-[#794222] transition-colors duration-200">
          Track
        </button>
      </div>
    </div>
  );
};

export default UpComingOrders;

import React from "react";
import "boxicons";
import UpComingOrders from "../E_UpComingOrders/UpComingOrders";
import PreviousOrders from "../E_PreviousOrders/PreviousOrders";
const TrackingOrders = () => {
  return (
    <div className="container mx-auto">
      <div className="px-4 py-4 flex flex-col gap-20">
        {/* Upcoming orders */}
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#BD8356]">
          Upcoming orders
        </h1>
        <div className="flex gap-5 flex-wrap">
          <UpComingOrders />
          <UpComingOrders />
          <UpComingOrders />
        </div>
        {/* Previous orders */}
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#BD8356]">
          Previous orders
        </h1>
        <div className="flex gap-5 flex-wrap">
          <PreviousOrders />
          <PreviousOrders />
          <PreviousOrders />
        </div>
      </div>
    </div>
  );
};

export default TrackingOrders;

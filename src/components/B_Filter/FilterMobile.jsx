import React from "react";

function FilterMobile() {
  return (
    <div className="flex justify-between lg:w-[392px] pt-8">
      <p className="font-bold text-xl mr-2">Filter</p>
      <button
        href="#"
        className="text-yellow-700 lg:text-xl px-2 py-1 rounded hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1"
      >
        Feeder
      </button>
      <button
        href="#"
        className="text-yellow-700 lg:text-xl px-2 py-1 rounded hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1"
      >
        Toilet
      </button>
      <button
        href="#"
        className="text-yellow-700 lg:text-xl px-2 py-1 rounded hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1"
      >
        Tower
      </button>
      <button
        href="#"
        className="text-yellow-700 lg:text-xl px-2 py-1 rounded hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1"
      >
        Toy
      </button>
    </div>
  );
}

export default FilterMobile;

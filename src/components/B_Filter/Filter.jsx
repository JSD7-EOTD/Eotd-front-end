import React from "react";

function Filter() {
  return (
    <div className="mt-8 bg-[#F1F4F3] rounded-lg h-[764px]">
      <div className="w-[296px]">
        <h2 className="text-center text-2xl font-semibold text-white bg-gradient-to-r from-[#794222] to-[#BD8356] py-4  mt- mb-4 rounded-xl">
          Product Filter
        </h2>
        <div className="form-control px-4">
          <label className="cursor-pointer label">
            <input type="checkbox" defaultChecked className="checkbox " />
            <span className="label-text text-xl font-semibold">Feeder</span>
          </label>
        </div>
        <div className="form-control px-4">
          <label className="cursor-pointer label">
            <input type="checkbox" defaultChecked className="checkbox" />
            <span className="label-text text-xl font-semibold">Toilet</span>
          </label>
        </div>
        <div className="form-control px-4">
          <label className="cursor-pointer label">
            <input type="checkbox" defaultChecked className="checkbox" />
            <span className="label-text text-xl font-semibold">Tower</span>
          </label>
        </div>
        <div className="form-control px-4">
          <label className="cursor-pointer label">
            <input type="checkbox" defaultChecked className="checkbox " />
            <span className="label-text text-xl font-semibold">Toy</span>
          </label>
        </div>
      </div>
      {/* Price Filter */}
      <div className="w-[296px]">
        <h2 className="text-center text-2xl text-bold text-[#794222] border-2 border-[#794222] py-2  mt-12 mb-6 rounded-xl">
          Price
        </h2>
        <input
          type="range"
          min={0}
          max="100"
          value="25"
          className="range range-xs "
          step="25"
        />
        <div className="w-full flex justify-between  px-2">
          <span>100</span>
          <span>200</span>
          <span>300</span>
          <span>400</span>
          <span>500</span>
        </div>
        <p className="px-2 mt-2">40 Product found</p>
      </div>
      {/* Rating Filter */}
      <div className="w-[296px]">
        <h2 className="text-center text-2xl text-bold text-[#794222] border-2 border-[#794222] py-2  mt-12 mb-6 rounded-xl">
          Rating
        </h2>
        <input
          type="range"
          min={0}
          max="100"
          value="25"
          className="range range-xs "
          step="25"
        />
        <div className="w-full flex justify-between  px-2">
          <span>1-Star</span>
          <span>2-Star</span>
          <span>3-Star</span>
          <span>4-Star</span>
          <span>5-Star</span>
        </div>
        <p className="px-2 mt-2">40 Product found</p>
      </div>
    </div>
  );
}

export default Filter;

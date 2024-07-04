import React from "react";
import "boxicons";

const MyPayment = ({ errors, handleChange, handleSubmit }) => {
  return (
    <div className="container mx-auto">
      <form className="px-4 py-4 flex flex-col gap-5" onSubmit={handleSubmit}>
        {/* Payment meothods*/}
        <div className="flex flex-col justify-between pt-3 space-y-4 ">
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#BD8356]">
            Payment methods
          </h1>
          {/* Credit Card Section */}
          <h3 className="text-info-content text-lg sm:text-xl md:text-2xl font-bold pt-4">
            Credit card
          </h3>
          {/* Card Details */}
          <h5 className="text-info-content text-sm sm:text-base pt-3">
            Visa *****9999
          </h5>
          <h5 className="text-sm sm:text-base py-3 text-gray-600]">
            Expiration: 02/2024
          </h5>
          {/* Add New Credit Method Button */}
          <div className="">
            <button
              type="submit"
              className="bg-[#BD8356] text-white px-4 py-2 rounded-3xl hover:bg-[#794222] transition-colors duration-200"
            >
              Add new credit method
            </button>
          </div>
          {/* Add New Credit Card Section */}
          <div className="flex justify-between">
            <h3 className="text-info-content text-sm sm:text-base md:text-lg font-bold">
              Add new credit card
            </h3>
            <div className="flex justify-end mr-3 scale-150 gap-2">
              <box-icon name="visa" type="logo"></box-icon>
              <box-icon name="mastercard" type="logo"></box-icon>
            </div>
          </div>
        </div>

        {/* Card Number*/}
        <div className="flex flex-col justify-between ">
          {/* Card Number Input */}
          <label className="w-full pb-3">
            <span className="font-bold text-gray-600]">CARD NUMBER</span>

            <input
              type="text"
              name="cardNumber"
              placeholder="Enter your card number"
              className="input input-bordered w-full  bg-white border-2 px-5 py-2 rounded-xl"
              onChange={handleChange}
            />
            {errors.cardNumber && (
              <span className="text-red-500">{errors.cardNumber}</span>
            )}
          </label>

          {/* Card Name Input */}
          <label className="w-full  pb-3">
            <span className="font-bold text-gray-600]">CARD NAME</span>

            <input
              type="text"
              name="cardName"
              placeholder="Enter your card name"
              className="input input-bordered w-full  bg-white border-2 px-5 py-2 rounded-xl"
              onChange={handleChange}
            />
            {errors.cardName && (
              <span className="text-red-500">{errors.cardName}</span>
            )}
          </label>

          {/* Expiration Date and CVC Inputs */}
          <div className="flex flex-col sm:flex-row justify-end gap-2">
            <label className="w-full  ">
              <span className="font-bold text-gray-600]">EXPIRATION DATE</span>

              <input
                type="text"
                maxLength="5"
                pattern="\d{2}/\d{2}"
                placeholder="MM/YY"
                name="expirationDate"
                onChange={handleChange}
                className="border-2 p-2 rounded-lg w-full  bg-white "
              />
              {errors.expirationDate && (
                <span className="text-red-500">{errors.cardName}</span>
              )}
            </label>
            <label className="w-full  pb-3">
              <span className="font-bold text-gray-600]">CVC</span>
              <input
                type="number"
                name="cvc"
                onChange={handleChange}
                className="border-2 p-2 rounded-lg w-full  bg-white "
              />
              {errors.cvc && <span className="text-red-500">{errors.cvc}</span>}
            </label>
          </div>

          {/* Save Card Checkbox */}
          <div className="flex items-center py-6">
            <input
              type="checkbox"
              defaultChecked
              className="h-6 w-6 text-red bg-gray-200 border-gray-300 rounded focus:ring-blue-500"
            />
            <h3 className="text-info-content ml-2">Save Card</h3>
          </div>
        </div>

        {/* Coupons Name*/}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#BD8356]">
          Coupons
        </h3>
        {/* Coupons Card*/}
        <div className="flex gap-5 flex-wrap">
          <div className="flex sm:flex-row justify-between w-[398px]">
            {/* Coupon 1 */}
            <div className="mb-4 sm:mb-0">
              <h3 className="text-info-content pb-1">Coupon 1</h3>
              <h5 className="text-sm">No coupon added</h5>
            </div>

            {/* Button for Coupon 1 */}
            <div className="flex items-center">
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-300 transition-colors duration-200">
                Add
              </button>
            </div>
          </div>

          <div className="flex  sm:flex-row justify-between w-[398px]">
            {/* Coupon 2 */}
            <div className="mb-4 sm:mb-0">
              <h3 className="text-info-content pb-1">Coupon 2</h3>
              <h5 className="text-sm">No coupon added</h5>
            </div>

            {/* Button for Coupon 2 */}
            <div className="flex items-center">
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-300 transition-colors duration-200">
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyPayment;

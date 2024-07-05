import React from "react";
import AddToCart from "./AddToCart";

function Cart() {
  return (
    <div className="w-full flex justify-center pt-8">
      <div className="overflow-x-auto bg-[#f5f5f5] w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1600px] p-4 rounded-xl">
        <h2 className="text-3xl pb-4 font-bold text-[#BD8356]">Cart</h2>
        <table className="table-auto w-full">
          {/* head */}
          <thead className="">
            <tr className="border-2">
              <th className="border-2">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="border-2 text-sm sm:text-lg md:text-xl">Item</th>
              <th className="border-2 text-sm sm:text-lg md:text-xl">Price</th>
              <th className="border-2 text-sm sm:text-lg md:text-xl">
                Quantity
              </th>
              <th className="border-2 text-sm sm:text-lg md:text-xl">
                Total Price
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <AddToCart />
            <AddToCart />
            <AddToCart />
            <AddToCart />
          </tbody>
          {/* foot */}
          <tfoot>
            <tr className="border-2">
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th>
                <button className="lg:text-xl px-2 py-1 rounded hover:bg-gradient-to-r from-[#ff5757] to-[#f88686] hover:text-white transition-all duration-300 transform hover:translate-x-1">
                  Delete
                </button>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Cart;

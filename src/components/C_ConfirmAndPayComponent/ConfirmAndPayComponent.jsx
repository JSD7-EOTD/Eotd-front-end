import React from "react";
import QRpayment from "../../../public/images/icon/QRpayment.png";
import "boxicons";

const ConfirmAndPayCommponent = () => {
  return (
    <div>
      <div className="px-4 md:flex py-12 gap-12 text-zinc-400 text-xs space-y-6 md:px-36">
        <div className="md:w-3/5">
          <div className="text-[#794222] text-3xl font-bold">
            <h1>Confirm and pay</h1>
          </div>
          <div className="space-y-4 shadow-xl rounded-xl p-4 mt-4">
            <div>
              <h2 className="text-black text-2xl font-bold text-center">
                All Payment Medthods
              </h2>
            </div>

            <div className="space-y-6">
              <div className="text-xl text-black font-semibold">
                <h3>Credit Card</h3>
              </div>
              <div>
                <label>CARD NUMBER</label>
                <input
                  type="text"
                  name="cardNumber"
                  className="border-2 p-2 rounded-lg w-full"
                />
              </div>
              <div>
                <label>CARD HOLDER</label>
                <input
                  type="text"
                  name="cardName"
                  className="border-2 p-2 rounded-lg w-full"
                />
              </div>
              <div className="flex justify-between">
                <div className="md:w-2/5">
                  <label>EXPIRATION DATE</label>
                  <input
                    type="text"
                    maxLength="5"
                    pattern="\d{2}/\d{2}"
                    placeholder="MM/YY"
                    name="expirationDate"
                    className="border-2 p-2 rounded-lg w-full "
                  />
                </div>
                <div className="md:w-2/5">
                  <label>CVC</label>
                  <input
                    type="number"
                    name="cvc"
                    className="border-2 p-2 rounded-lg w-full"
                  />
                </div>
              </div>

              <div className="text-black text-sm font-semibold">
                <input
                  type="checkbox"
                  name="save-card"
                  id="save-card"
                  defaultChecked
                />
                Save Card
              </div>
              <div className="space-y-4 md:flex md:flex-col md:justify-around md:py-4">
                <div className="flex  justify-center md:gap-8 ">
                  <div className="shadow-md hover:bg-zinc-200"><button><box-icon type='logo' name='visa' size="72px" ></box-icon></button></div>
                  <div className="shadow-md hover:bg-zinc-200"><button><box-icon name='mastercard' type='logo' size="72px" ></box-icon></button></div>
                  <div className="shadow-md hover:bg-zinc-200"><button><box-icon name='paypal' type='logo' size="72px" ></box-icon></button></div>
                  <div className="shadow-md hover:bg-zinc-200"><button><box-icon name='credit-card-alt' type='solid' size="72px" ></box-icon></button></div>
                </div>
                <div className="flex justify-center h-80 md:h-auto">
                  <img src={QRpayment} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-2/5 md:pt-12">
          <div className="text-base space-y-4 flex flex-col items-center">
            <div className="text-black text-2xl font-bold self-start">
              <h2>Price details</h2>
            </div>
            <div className="space-y-4 w-full">
              <div className="flex justify-between">
                <p>$20 x 2</p>
                <p className="text-black">$40</p>
              </div>
              <div className="flex justify-between">
                <p>shipping</p>
                <p className="text-black">&0,00</p>
              </div>
              <div className="flex justify-between text-">
                <p>
                  <span className="text-black">Total</span>(USD)
                </p>
                <p className="text-black">$40</p>
              </div>
            </div>
            <button className="rounded-3xl bg bg-[#BD8356] hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1 p-2 px-6 text-white w-1/2">
              Confirm and pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAndPayCommponent;

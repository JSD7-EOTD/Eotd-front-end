import React from "react";
import ConfirmAndPayCommponent from "../../components/C_ConfirmAndPayComponent/ConfirmAndPayComponent";
import Footer from "../../components/B_Footer/Footer";

const ConfirmAndPay = () => {
  return (
    <div className="h-[100vh]">
      <div className="">
        <ConfirmAndPayCommponent />
        <Footer />
      </div>
    </div>
  );
};

export default ConfirmAndPay;

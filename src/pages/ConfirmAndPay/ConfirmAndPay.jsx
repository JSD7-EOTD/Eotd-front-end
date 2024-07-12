import React from "react";
import Navbar from "../../components/B_Navbar/Navbar";
import ConfirmAndPayCommponent from "../../components/C_ConfirmAndPayComponent/ConfirmAndPayComponent";
import Footer from "../../components/B_Footer/Footer";

const ConfirmAndPay = () => {
  return (
    <div className="h-[100vh]">
      <div>
        <Navbar />
      </div>
      <div className="mt-24">
        <ConfirmAndPayCommponent />
        <Footer />
      </div>
    </div>
  );
};

export default ConfirmAndPay;

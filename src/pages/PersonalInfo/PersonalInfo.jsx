import React from "react";
import Categories from "../../components/E_Categories/Categories";
import Dropdown from "../../components/E_Dropdown/Dropdown";
import LoginAndSecurity from "../../components/E_LoginAndSecurity/LoginAndSecurity";
import MyPayment from "../../components/E_MyPayment/MyPayment";
import PersonalInfo from "../../components/E_PersonalInfo/PersonalInfo";
import TrackingOrders from "../../components/E_TrackingOrders/TrackingOrders";

const PersonalInfo = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-24 container mx-auto flex gap-10 py-10 px-5 sm:px-10 md:px-20 lg:px-40 relative">
        <div className="hidden lg:block max-w-xs sticky">
          <Categories />
        </div>

        <div className="flex flex-col w-full">
          <Dropdown />
          <div className="flex flex-col gap-10">
            <PersonalInfo
              errors={validateError}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            <LoginAndSecurity />
            <MyPayment
              errors={validateError}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            <TrackingOrders />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PersonalInfo;

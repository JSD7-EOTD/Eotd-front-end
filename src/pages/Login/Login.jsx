import React from "react";
import LogoPicture from "../../components/D_LogoPicture/LogoPicture";
import LoginComponent from "../../components/D_Login/LoginComponent";

const Loginpage = () => {
  return (
    <div className="md:flex h-[100vh]">
      <LogoPicture />
      <LoginComponent />
    </div>
  );
};

export default Loginpage;

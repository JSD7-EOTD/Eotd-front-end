import React from "react";
import Footer from "../../components/B_Footer/Footer";
import Displays from "../../components/C_Displays/Displays";
import Description from "../../components/C_Displays/Description";
import ReviewSection from "../../components/C_ReviewSection/ReviewsSection";

const DisplayProduct = () => {
  return (
    <div>
      <div className="">
        <Displays />
        {/* <Description /> */}
        <ReviewSection />
        {/*<Suggest />*/}
      </div>
      <Footer />
    </div>
  );
};

export default DisplayProduct;

import React from "react";
import Navbar from "../../components/B_Navbar/Navbar";
import Footer from "../../components/B_Footer/Footer";
import Displays from "../../components/C_Displays/Displays"
import Description from "../../components/C_Displays/Description"
import ReviewSection from "../../components/C_ReviewSection/ReviewsSection"


const DisplayProduct = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Displays/>
      <Description />
      <ReviewSection />
      {/*<Suggest />*/}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DisplayProduct;

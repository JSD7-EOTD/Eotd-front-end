import React from "react";

function ProductHero() {
  return (
    <section className="relative flex justify-center items-center z-10">
      <div className="absolute lg:bottom-24 bottom-24 xl:mb-28 xl:mr-[604px]">
        <h1 className="font-bold text-[#EDBF9A] text-[32px] px-4 lg:text-[64px] lg:w-2/3 ">
          PUEY PUEY DESIGN
        </h1>
        <p className="text-2xl text-white px-4  w-full">
          Furnish Their Happiness:
        </p>
        <p className="text-white px-4  pb-4 w-full text-2xl">
          Where Comfort Meets Wagging Tails!
        </p>
        <p className="text-white px-4 w-full text-2xl">
          ตกแต่งความสุขของพวกเขา: ที่ซึ่งความสะดวกสบายมาพร้อมกับการกระดิกหาง!
        </p>
      </div>
      <div className="w-full md:w-[1600px] h-[700px] flex justify-center ">
        <div className="w-full h-full">
          <img
            className="h-full w-full object-cover"
            src="./images/banner.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default ProductHero;

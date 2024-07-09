//import React from "react";

const Hero1 = () => {
  return (
    <section className="mt-24 relative flex justify-center items-center z-10 h-[700px] lg:px-36 md:px-16 sm:px-8 px-4 md:bg-contain sm:bg-contain  lg:bg-contain sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full max-w-full ">
      <div className="absolute inset-0 lg:px-36 md:px-16 sm:px-8 px-4 md:bg-contain sm:bg-contain  lg:bg-contain sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full max-w-full h-auto">
        <img
          src="../../../public/images/A1/Hero_1 Cat.png"
          className="w-full h-full object-cover  "
          alt="Cat"
        />
        <div className="absolute inset-0  opacity-25"></div>{" "}
      </div>
      <div className="absolute lg:bottom-24 bottom-24 xl:mb-28 xl:mr-[604px] text-neutral-content max-w-md space-y-8">
        <div className="text-center sm:text-left md:text-left lg:text-left">
          <h1 className="mb-5 text-2xl  sm:text-5xl md:text-5xl lg:text-5xl 2xl:text-5xl font-bold text-[#EDBF9A]">
            จงเป็นทาสที่ดี
            <br />
            และเป็นทาสที่เชื่อฟัง
          </h1>
        </div>
        <div>
          <p className="mb-5 font-bold text-white text-center md:text-left lg:text-left xl:text-left 2xl:text-left sm:text-[16px] md:text-[16px] lg:text-[16px] 2xl:text-[16px] text-[12px] ">
            เลอใดเล่าจะเท่าลอเลม Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis
            scelerisque. Eget cras integer.
          </p>
        </div>
        <div className="flex items-center justify-center sm:justify-start md:justify-start lg:justify-start 2xl:justify-start">
          <button className="text-xl md:text-2xl py-2 rounded text-yellow-700 hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1 px-10">
            MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero1;










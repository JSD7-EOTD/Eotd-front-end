const Hero1 = () => {
  return (
    <section
      className="relative flex justify-center items-center z-10 
    h-[960px]  "
    >
      21
      <div className="absolute inset-0">
        <img
          src="../../public/images/A1/Hero_1 Cat.png"
          className="w-full h-full object-cover "
          alt="Cat"
        />
        <div className=" absolute  "></div>
      </div>
      <div className="relative z-10  text-neutral-content max-w-md space-y-8 lg:absolute lg:inset-y-13 lg:left-16 2xl:absolute 2xl:inset-y-13 2xl:left-16   ">
        <div className="text-center sm:text-left md:text-left lg:text-left">
          <h1 className="mb-5 text-5xl  font-bold text-[#EDBF9A] lg:left-6 xl:text-left 2xl:text-left  sm:px-10 md:px-10 lg:px-10 2xl:px-10 ">
            จงเป็นทาสที่ดี
            <br />
            และเป็นทาสที่เชื่อฟัง
          </h1>
        </div>
        <div className="">
          <p className="mb-5 font-bold text-with text-centermd:text-left lg:text-left xl:text-left 2xl:text-left  sm:px-10 md:px-10 lg:px-10 2xl:px-10 ">
            เลอใดเล่าจะเท่าลอเลม Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sapien, est felis,sagittis viverra nulla mattis
            scelerisque.Eget cras integer.
          </p>
        </div>
        <div className="flex items-center justify-center sm:justify-start md:justify-start  lg:justify-start 2xl:justify-start">
          <button className="text-xl md:text-2xl  py-2 rounded text-yellow-700 hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1  px-10 sm:px-10 md:px-10 lg:px-10 2xl:px-10  ">
            MORE
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero1;

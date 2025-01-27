import Hero_2 from "../../../public/images/A1/Hero2_Dog.png";

const Hero2 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 lg:px-40 2xl:px-40 py-10">
      <div className="w-full md:w-1/2 p-5 md:pr-20 md:pl-0 flex justify-center">
        <img
          src={Hero_2}
          alt="Hero2 Dog"
          className="object-center w-full h-auto md:h-full shadow-lg transition-transform transform scale-105"
        />
      </div>

      <div className="w-full md:w-1/2 p-5 space-y-6 md:space-y-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-[40px]   text-yellow-900 text-center font-bold">
          เพื่อนซี้สี่ขา
          <br />
          บ้านหมาคุณภาพ
        </h1>
        <p className="text-lg md:text-[16px] text-yellow-700 text-center animate-fade-in-up">
          Discover the unmatched companionship of a loyal dog. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Recusandae dolore nemo
          perspiciatis ipsa veritatis eligendi facere aspernatur consequuntur
          voluptates!
        </p>
        <div className="flex justify-center w-full">
          <button className="text-xl md:text-2xl px-4 py-2 rounded text-yellow-700 hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1">
            MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero2;

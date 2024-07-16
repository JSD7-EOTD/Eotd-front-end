import React from "react";
import aoun from "../../../public/images/EOTD_TEAM/aoun.jpg"
import ai from "../../../public/images/EOTD_TEAM/ai.jpg"
import mc from "../../../public/images/EOTD_TEAM/mc.jpg"
import frank from "../../../public/images/EOTD_TEAM/frank.jpg"
import bew from "../../../public/images/EOTD_TEAM/bew.jpg"
import Footer from "../../components/B_Footer/Footer";

const AboutUs = () => {
  return (
    <>
      <div className=" px-36 mt-16">
        <h1 className="text-2xl text-center  mb-6 text-gray-800">About Us</h1>
        <p className="text-lg leading-relaxed ">
          At Puey Puey Pet Store, we are dedicated to providing the finest pet
          furniture that ensures both comfort and style for your beloved pets.
          Our mission is to offer not just high-quality products but also an
          exceptional shopping experience for every customer. We understand that
          your pets are a part of your family, and we strive to create furniture
          that enhances their well-being and complements your home decor.
          Explore our collection and let us help you find the perfect piece for
          your furry friends.
        </p>
      </div>
      <h2 className="text-center text-2xl mt-8">EOTD's Fullstack Team</h2>
      <div className="mx-36 mt-8 ">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure className="w-[200px] h-[280px]">
            <img
              src={aoun}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Lord Tanatut of House Mobnarin, the First of His Name</h2>
            <p className="w-[1368px] h-[124px]">Lord of Coordination and Management
Master of Pop-Up Store and Automobile Booth Construction
Expert in Teamwork and Time Management
Guardian of Computers and Coding
Overseer of Network Management and Web Development with the MERN Stack
Passionate Creator and Career Builder</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Contact</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-36 mt-8">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure className="w-[200px] h-[280px]">
            <img
              src={ai}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Egg-ee-88</h2>
            <p className="w-[1368px] h-[124px]">I am the true Egg, the cult leader of the mystical realm known as the Tail of Egg Land. the real egg will bonk your head if you don't share her a snacks, will whispering fake news about how you get so lonely, result in 20 years tinder sponsored.
            Join the Egg cult and help us take over JSD07! Don't miss out on this egg-citing opportunity!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Contact</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-36 mt-8">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure className="w-[200px] h-[280px]">
            <img
              src={mc}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sir Watsuphol 39, Logician Master of the Information</h2>
            <p className="w-[1368px] h-[124px]">The omniscient sage of the JSD7 Kingdom. My journey is one of relentless battles against the Lord of JavaScript and the Devils of React. Armed with my VScaliber sword, I carve paths through code and conquer software development challenges. In the name of the EOTD Goddess, I stand proud to tell the tale of my quest to become the greatest software developer. Guided by passion and dedication, I face new challenges daily, wielding my expertise to forge innovative solutions and elegant designs. My story is one of mastery and unwavering commitment to software development.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-36 mt-8">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure className="w-[200px] h-[280px]">
            <img
              src={frank}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">FRANK Napat</h2>
            <p className="w-[1368px] h-[124px]">Hi there! I'm a programmer who's addicted to coffee and old bugs. Even before I've fixed the new bugs, I'm already busy creating more! :tada: If you ask me how many programming languages I know, I'll just say 'I've lost count.' :joy: In my latest project, I wanted the Navbar color to be 'Coffee Brown' because I believe this color will wake everyone up just like the first cup of coffee of the day. :coffee:️
            If you find me in the middle of a bug or weird code, just know that 'It's under development!' :ladybug:</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Contact</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-36 mt-8 mb-8">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure className="w-[200px] h-[280px]">
            <img
              src={bew}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Lady Bussayakorn, Master of Copying and Exercise (AKA ped)
            </h2>
            <p className="w-[1368px] h-[124px]">Skilled Problem-Solver and Team Player.Guardian of Computers and Coding .Enthusiast of Sea and Basketball and slave of Cats,
            Proud to serve cats and honored to be a valued member of EOTD's team. Together, we tackle challenges with ingenuity and camaraderie, striving for excellence.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Contact</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;

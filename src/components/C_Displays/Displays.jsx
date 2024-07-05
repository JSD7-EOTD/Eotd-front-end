import React, { useState } from "react";
import "boxicons";
import { MatRender, Options, Addbutton } from './Dis_render';


export default function Displays() {
const [isBookmarked, setIsBookmarked] = useState(false);
const [animate, setAnimate] = useState(false);

const toggleBookmark = () => {
    setIsBookmarked((prevIsBookmarked) => !prevIsBookmarked);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1000);
};

return (
    <div className="flex flex-col items-center w-full md:flex-row md:justify-start md:items-start">
    <div>
        <div>
        <img
            src="/images/pet_toys/pet_toys17.jpeg"
            alt="Pet Toy"
            className="w-[316px] h-[288px] object-cover rounded-3xl mt-8 md:ml-[11%] md:w-[760px] md:h-[640px]"
        />
        </div>
    </div>

    <section className="flex flex-col items-center mt-8 md:ml-[14%] md:justify-start md:items-start">
        <div className="flex items-center justify-center mb-10">
        <h1 className="font-semibold text-2xl md:text-3xl text-[#BD8356]">
            'useless'
        </h1>
        <div className="md:ml-4 cursor-pointer" onClick={toggleBookmark}>
            <box-icon
            type={isBookmarked ? "solid" : "regular"}
            name="bookmark-heart"
            color="#794222"
            size="md"
            animation={animate ? "tada" : ""}
            />
        </div>
        </div>

        <div className="flex items-center justify-center mb-8 md:mb-10 md:justify-start">
        <h1 className="font-semibold text-2xl md:text-3xl text-[#794222]">
            $20.99
        </h1>
        </div>

        <MatRender />
        <Options />
        <Addbutton />
    </section>
    </div>
);
}

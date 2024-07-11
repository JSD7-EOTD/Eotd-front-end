import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import "boxicons";
import { MatRender, Options, Addbutton } from './DisRender';
import * as productApi from "../../API/productsApi";
import Description from "./Description";

export default function Displays() {
const [product, setProduct] = useState({});
const [isBookmarked, setIsBookmarked] = useState(false);
const [animate, setAnimate] = useState(false);

const { _id } = useParams();
  console.log(_id);
  async function getProduct() {
    try {
      const response = await productApi.getOneProduct(_id)
      const data = await response.data;
      setProduct(data);
      console.log(product);
    } catch (error) {
      console.error("Failed", error);
    }
  }
  useEffect(() => {
    getProduct();
  }, []);



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
            src={product.image}
            alt="Pet Toy"
            className="w-[316px] h-[288px] object-cover rounded-3xl mt-8 md:ml-[11%] md:w-[760px] md:h-[640px]"
        />
        </div>
    </div>

    <section className="flex flex-col items-center mt-8 md:ml-[14%] md:justify-start md:items-start">
        <div className="flex items-center justify-center mb-10">
        <h1 className="font-semibold text-2xl md:text-3xl text-[#BD8356]">
        {product.name}
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
            ${product.new_price}
        </h1>
        </div>

        <MatRender />
        <Options />
        <Addbutton />
        <div className="flex mt-11 mx-10 md:ml-[6%] md:mr-[4%] md:mt-36">
    <div className="">
        <h1 className="text-xl">Description</h1>
        <hr className="border-t-2 border-gray-300 my-2" />
        <div className="flex flex-col mt-2 mb-10 md:mb-12 md:mt-10">
        <p>
            {product.description ||
              `This toy is adorable, but your baby will probably lose interest
            after a few sniffs. They will quickly look at you wondering why you
            keep bringing home these useless things. Shame on you hooman
            shame`}
        </p>
        <div>
            <p className="mt-4 md:mt-10">details</p>
            <ul className="mt-2 list-disc list-inside">
              <li>size: 50mm * 50mm </li>
            <li>fragance : like your wet sock</li>
            <li>organic but don't taste it, except you're a cat</li>
            </ul>
        </div>
        </div>
    </div>
    </div>
    </section>
    </div>
);
}

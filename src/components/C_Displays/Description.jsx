import React from "react";

export default function Description({ product }) {
    console.log(product)
return (
    <div className="flex mt-11 mx-10 md:ml-[6%] md:mr-[4%] md:mt-36">
    <div className="">
        <h1 className="text-xl">Description</h1>
        <hr className="border-t-2 border-gray-300 my-2" />
        <div className="flex flex-col mt-2 mb-10 md:mb-12 md:mt-10">
        <p>
            {/* {product.description ||
              `This toy is adorable, but your baby will probably lose interest
            after a few sniffs. They will quickly look at you wondering why you
            keep bringing home these useless things. Shame on you hooman
            shame`} */}
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
);
}

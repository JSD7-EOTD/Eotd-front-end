import React, { useState } from 'react';


export function MatRender() {
return (
    <div className=" ">
    <div className="grid grid-cols-2 gap-4 md:mb-4">
        {/* Cell 1 */}
        <div className="w-[150px] h-[55px] md:w-[250px] md:h-[55px] bg-white flex pr-[55px]">
        <i>
            <box-icon
            name="leaf"
            color="#bd8356"
            border="circle"
            size="md"
            ></box-icon>
        </i>
        <p className="p-2">Material_1</p>
        </div>
        {/* Cell 2 */}
        <div className="w-[150px] h-[55px] md:w-[250px] md:h-[55px] bg-white flex  pr-[55px]">
        <i>
            <box-icon
            name="blanket"
            type="solid"
            color="#bd8356"
            border="circle"
            size="md"
            ></box-icon>
        </i>
        <p className="p-2">Material_2</p>
        </div>
        {/* Cell 3 */}
        <div className="w-[150px] h-[55px] md:w-[250px] md:h-[55px] bg-white flex  pr-[55px]">
        <i>
            <box-icon
            name="leaf"
            color="#bd8356"
            border="circle"
            size="md"
            ></box-icon>
        </i>
        <p className="p-2">Material_1</p>
        </div>
        {/* Cell 4 */}
        <div className="w-[150px] h-[55px] md:w-[250px] md:h-[55px] bg-white flex   pr-[55px]">
        <i>
            <box-icon
            name="leaf"
            color="#bd8356"
            border="circle"
            size="md"
            ></box-icon>
        </i>
        <p className="p-2">Material_1</p>
        </div>
        {/* Cell 5 */}
        <div className="w-[150px] h-[55px] md:w-[250px] md:h-[55px] bg-white flex   pr-[55px]">
        <i>
            <box-icon
            name="leaf"
            color="#bd8356"
            border="circle"
            size="md"
            ></box-icon>
        </i>
        <p className="p-2">Material_1</p>
        </div>
        {/* Cell 6 */}
        <div className="w-[150px] h-[55px] md:w-[250px] md:h-[55px] bg-white flex   pr-[55px]"></div>
    </div>
    <div className='flex pl-2 gap-4 justify-center md:justify-start'>
        <box-icon name="recycle" color="#a3ba9a"></box-icon>
        <box-icon name="dog" type="solid" color="#917d73"></box-icon>
        <box-icon name="cat" type="solid" color="#917d73"></box-icon>
        <box-icon type="solid" name="face" color="#917d73"></box-icon>
    </div>
    </div>
);
}

export function Options() {
    return (
    <div className="mt-6 flex justify-center">
        <div className="flex space-x-2">
        <box-icon
            name="square-rounded"
            type="solid"
            color="#b1b5c3"
            size="lg"
        ></box-icon>
        <box-icon
            name="square-rounded"
            type="solid"
            color="#edbf9a"
            size="lg"
        ></box-icon>
        <box-icon
            name="square-rounded"
            type="solid"
            color="#BD8356"
            size="lg"
        ></box-icon>
        <box-icon
            name="square-rounded"
            type="solid"
            color="#794222"
            size="lg"
        ></box-icon>
        </div>
    </div>
    );
}

export function Addbutton() {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    return (
    <div className="flex flex-col items-center md:items-start">
        <div className="flex items-center space-x-4 mt-10 justify-center md:justify-start">
        <button
            onClick={decreaseQuantity}
            className="text-yellow-700 bg-stone-300 lg:text-xl rounded-3xl hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 w-[54px] h-[54px]"
        >
            -
        </button>
        <p>{quantity}</p>
        <button
            onClick={increaseQuantity}
            className="text-yellow-700 bg-stone-300 lg:text-xl rounded-3xl hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 w-[54px] h-[54px]"
        >
            +
        </button>
        </div>
        <div className="flex items-center space-x-4 mt-10 justify-center md:justify-start">
        <button className="text-white bg-yellow-700 lg:text-xl px-4 py-2 rounded-2xl hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1 whitespace-nowrap">
            Order Now
        </button>
        <button className="text-white bg-yellow-700 lg:text-xl px-4 py-2 rounded-2xl hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1 whitespace-nowrap">
            Add to Cart
        </button>
        </div>
    </div>
    );
}
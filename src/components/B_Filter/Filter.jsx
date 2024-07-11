import React, { useState, useEffect } from "react";
import { useProduct } from "../../context/productsContext";

function Filter() {
  const { fetchProducts } = useProduct();
  const [filters, setFilters] = useState({ category: [] });

  const handleCategoryChange = (category) => {
    setFilters((prevFilters) => {
      const newCategories = prevFilters.category.includes(category)
        ? prevFilters.category.filter((cat) => cat !== category)
        : [...prevFilters.category, category];
      return { ...prevFilters, category: newCategories };
    });
  };

  useEffect(() => {
    fetchProducts(filters);
  }, [filters]);

  const categories = ["Feeder", "Toilets", "Towers", "Toys"];

  return (
    <div className="mt-8 bg-[#F1F4F3] rounded-lg h-[764px]">
      <div className="w-[296px]">
        <h2 className="text-center text-2xl font-semibold text-white bg-gradient-to-r from-[#794222] to-[#BD8356] py-4  mt- mb-4 rounded-xl">
          Product Filter
        </h2>
        {categories.map((category) => (
          <div className="form-control px-4 pb-4" key={category}>
            <button
              className={`text-xl px-2 py-1 rounded ${
                filters.category.includes(category)
                  ? "bg-gradient-to-r from-[#794222] to-[#BD8356] text-white"
                  : "bg-white text-[#794222] border border-[#794222]"
              } hover:bg-gradient-to-r hover:from-[#794222] hover:to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          </div>
        ))}
      </div>
      {/* Price and Rating Filters can be added similarly */}
    </div>
  );
}

export default Filter;

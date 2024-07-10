import React, { useState, useContext } from "react";
import "boxicons";
import logoGradient from "../../../public/images/icon/logoGradient.png";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchBarOpen, setSearchBarOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const { cartItems, removeFromCart } = useContext(CartContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearchBar = () => {
    setSearchBarOpen(!isSearchBarOpen);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const toggleCartDropdown = () => {
    setIsCartDropdownOpen(!isCartDropdownOpen);
  };

  return (
    <div className="fixed top-0 w-full z-50 ">
      <header className="bg-white shadow w-full h-[96px]">
        <div className="lg:px-36 md:px-16 sm:px-8 px-4 py-4 flex items-center justify-between w-full h-full">
          <div className="flex items-center xl:space-x-8 lg:space-x-6 md:space-x-4 sm:space-x-2 space-x-1">
            <img
              src={logoGradient}
              alt="Logo"
              className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
            />
            <nav className=" hidden md:flex space-x-1 lg:space-x-4">
              <Link
                to="/"
                className="text-yellow-700 lg:text-xl px-2 py-1 rounded hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1"
              >
                Home
              </Link>
              <Link
                to="/Products"
                className="text-yellow-700 lg:text-xl px-2 py-1 rounded hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1"
              >
                Product
              </Link>
              <a
                href="#"
                className="text-yellow-700 lg:text-xl px-2 py-1 rounded hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-yellow-700 lg:text-xl px-2 py-1 rounded hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1"
              >
                Contact
              </a>
              <a
                href="#"
                className="hidden text-yellow-700 lg:text-xl px-2 py-1 rounded hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1"
              >
                Admin
              </a>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4 relative">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className={`border border-[#794222] bg-white px-6 py-1 rounded-full focus:outline-none focus:border-[#794222] transition-all duration-300 ${
                  isSearchBarOpen ? "2xl:w-[768px] md:w-48" : "w-0"
                }`}
              />
              <button
                className={`absolute inset-y-0 right-0 px-3 py-1 bg-[#EDBF9A]/50 rounded-full hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 ${
                  isSearchBarOpen && "bg-[#794222] text-white"
                }`}
                onClick={toggleSearchBar}
              >
                <box-icon name="search" size="sm"></box-icon>
              </button>
            </div>
          </div>
          <div className="flex items-center xl:space-x-4 lg:space-x-3 md:space-x-2 sm:space-x-1 space-x-0.5 relative">
            <div className="relative">
              <button
                className="btn btn-ghost btn-circle text-info-content"
                onClick={toggleCartDropdown}
              >
                <box-icon name="cart"></box-icon>
                {cartItems.length > 0 && (
                  <span className="badge badge-sm indicator-item">{cartItems.length}</span>
                )}
              </button>
              {isCartDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg py-2">
                  <h2 className="text-lg font-bold px-4 py-2 border-b">Cart Items</h2>
                  {cartItems.length === 0 ? (
                    <p className="px-4 py-2">Your cart is empty.</p>
                  ) : (
                    <div>
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between px-4 py-2 border-b">
                          <div>
                            <p className="text-sm font-medium">{item.name}</p>
                            <p className="text-sm text-gray-500">{item.new_price}$</p>
                          </div>
                          <button
                            className="text-red-500 hover:text-red-700"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                      <Link
                        to="/Cart"
                        className="block text-center bg-yellow-700 text-white px-4 py-2 rounded hover:bg-yellow-800 transition duration-300 mt-2"
                        onClick={toggleCartDropdown}
                      >
                        View Cart
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="btn btn-ghost btn-circle text-info-content"
                onClick={toggleUserDropdown}
              >
                <box-icon name="user"></box-icon>
              </button>
              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                  <Link
                    to="/users"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/Settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <Link
                    to="/Logout"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
            <button
              className="md:hidden btn btn-ghost btn-circle"
              onClick={toggleMenu}
            >
              <box-icon name={isOpen ? "x" : "menu"}></box-icon>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <nav className="px-8 py-4 space-y-2 bg-white shadow-md">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  className={`border px-3 py-1 rounded-full focus:outline-none focus:border-[#794222] transition-all duration-300 ${
                    isSearchBarOpen ? "w-[240px]" : "w-0"
                  }`}
                />
                <button
                  className={`absolute inset-y-0 right-0 px-2 py-1 bg-white text-yellow-700 rounded-full hover:bg-[#794222] hover:text-white transition-all duration-300 ${
                    isSearchBarOpen && "bg-[#794222] text-white"
                  }`}
                  onClick={toggleSearchBar}
                >
                  <box-icon name="search" size="sm"></box-icon>
                </button>
              </div>
              <a
                href="#"
                className="block text-yellow-700 hover:bg-[#794222] hover:text-white text-xl px-2 py-1 rounded text-center transition-all duration-300 transform hover:translate-x-1"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-yellow-700 hover:bg-[#794222] hover:text-white text-xl px-2 py-1 rounded text-center transition-all duration-300 transform hover:translate-x-1"
              >
                Product
              </a>
              <a
                href="#"
                className="block text-yellow-700 hover:bg-[#794222] hover:text-white text-xl px-2 py-1 rounded text-center transition-all duration-300 transform hover:translate-x-1"
              >
                About Us
              </a>
              <a
                href="#"
                className="block text-yellow-700 hover:bg-[#794222] hover:text-white text-xl px-2 py-1 rounded text-center transition-all duration-300 transform hover:translate-x-1"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}

export default Navbar;

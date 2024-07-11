import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Navbar from "../../components/B_Navbar/Navbar";

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.new_price, 0);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto py-8 mt-24">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="flex flex-col space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                  <div>
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <p className="text-gray-600">{item.description || "No description available"}</p>
                    <p className="text-[#BD8356] font-bold">{item.new_price}$</p>
                  </div>
                </div>
                <button
                  className="text-yellow-700 lg:text-xl px-2 py-1 rounded hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex justify-between items-center border-t pt-4 mt-4">
              <h2 className="text-2xl font-bold">Total: {total}$</h2>
              <Link
                to="/Checkout"
                className="text-yellow-700 lg:text-xl px-2 py-1 rounded hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;

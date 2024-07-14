import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext"; // Assuming AuthContext is in the same directory

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useAuth(); // Retrieve user from AuthContext
  const userId = user?._id; // Extract user ID from user object
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (userId) {
      // Fetch the cart items from the backend when the component mounts
      const fetchCart = async () => {
        try {
          const response = await axios.get(`/cart/${userId}`);
          setCartItems(response.data.products);
          const total = response.data.products.reduce(
            (acc, item) => acc + item.new_price * item.quantity,
            0
          );
          setTotalPrice(total);
        } catch (error) {
          console.error("Failed to fetch cart:", error);
        }
      };

      fetchCart();
    } else {
      console.warn("User ID is not defined");
    }
  }, [userId]);

  const addToCart = async (product, quantity = 1) => {
    try {
      const response = await axios.post(`/cart/${userId}/add`, {
        userId,
        products: [
          {
            productId: product._id,
            name: product.name,
            new_price: product.new_price,
            image: product.image,
            description: product.description,
            quantity,
          },
        ],
      });
      setCartItems(response.data.products);
      const total = response.data.products.reduce(
        (acc, item) => acc + item.new_price * item.quantity,
        0
      );
      setTotalPrice(total);
    } catch (error) {
      console.error("Failed to add to cart:", error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const response = await axios.delete(
        `/cart/${userId}/remove/${productId}`
      );
      setCartItems(response.data.products);
      const total = response.data.products.reduce(
        (acc, item) => acc + item.new_price * item.quantity,
        0
      );
      setTotalPrice(total);
    } catch (error) {
      console.error("Failed to remove from cart:", error);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      const response = await axios.post("/cart/update-quantity", {
        userId,
        productId,
        quantity,
      });
      setCartItems(response.data.products);
      const total = response.data.products.reduce(
        (acc, item) => acc + item.new_price * item.quantity,
        0
      );
      setTotalPrice(total);
    } catch (error) {
      console.error("Failed to update cart quantity:", error);
    }
  };

  const increaseQuantity = async (productId) => {
    const product = cartItems.find((item) => item.productId === productId);
    await updateQuantity(productId, product.quantity + 1);
  };

  const decreaseQuantity = async (productId) => {
    const product = cartItems.find((item) => item.productId === productId);
    if (product.quantity > 1) {
      await updateQuantity(productId, product.quantity - 1);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

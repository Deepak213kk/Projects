/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, useEffect, useCallback, useState } from "react";
import { cartReducer, initialState } from "../reducer/cartReducer";

export const CartContext = createContext();

const API_URL = "http://localhost:5000/api";

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [cartTotal, setCartTotal] = useState(0);

  const [token, setToken] = useState(localStorage.getItem("token"));

  // 🔹 Fetch Cart
  const fetchCart = useCallback(async () => {
    if (!token) {
      dispatch({ type: "CLEAR_CART" });
      return;
    }

    try {
      const res = await fetch(`${API_URL}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // If backend sends 4xx/5xx, don't try to parse JSON
      if (!res.ok) {
        console.error("Cart request failed:", res.status, res.statusText);
        return;
      }

      const data = await res.json();
      dispatch({ type: "SET_CART", payload: data });
    } catch (err) {
      console.error("Fetch cart error:", err);
    }
  }, [token]);


  // 🔹 Add to cart
  const addToCart = async (productId) => {
    if (!token) {
      alert("Please login first");
      return;
    }

    await fetch(`${API_URL}/cart/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ productId }),
    });

    fetchCart();
    alert("Product added to cart");
  };

  // 🔹 Remove from cart
  const removeFromCart = async (productId) => {
    await fetch(`${API_URL}/cart/remove`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ productId }),
    });

    fetchCart();
  };

  // 🔹 Increase quantity
  const quantityIncrease = async (productId) => {
    await fetch(`${API_URL}/cart/increase`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ productId }),
    });

    fetchCart();
  };

  // 🔹 Decrease quantity
  const quantityDecrease = async (productId) => {
    await fetch(`${API_URL}/cart/decrease`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ productId }),
    });

    fetchCart();
  };

  // 🔹 Clear cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    localStorage.removeItem("token");
    setToken(null);
  };

  // 🔹 Calculate total
 useEffect(() => {
  const total = state.cart.reduce(
    (sum, item) =>
      sum + (item?.productId?.price || 0) * (item?.quantity || 0),
    0
  );

  setCartTotal(total);
}, [state.cart]);



  useEffect(() => {
  fetchCart();
}, [fetchCart]);



  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        cartTotal,
        addToCart,
        removeFromCart,
        quantityIncrease,
        quantityDecrease,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

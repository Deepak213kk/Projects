/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, useEffect, useCallback, useState } from "react";
import { cartReducer, initialState } from "../reducer/cartReducer";

export const CartContext = createContext();

const API_URL = "https://projects-1-7puw.onrender.com/api"; // Update with your backend URL

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [cartTotal, setCartTotal] = useState(0);
  const [total, settotal] = useState(0)

  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

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
  //discount code
  const [discount, setDiscount] = useState(0);
  const [promocode, setPromocode] = useState("");

  // ✅ Load from localStorage on refresh
  useEffect(() => {
    const savedDiscount = localStorage.getItem("discount");
    const savedCode = localStorage.getItem("promocode");

    if (savedDiscount) setDiscount(Number(savedDiscount));
    if (savedCode) setPromocode(savedCode);
  }, []);

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem("discount", discount);
    localStorage.setItem("promocode", promocode);
  }, [discount, promocode]);

  const Handlediscount = (e, Totalmrp) => {
    e.preventDefault();

    if (promocode === "JUICE100") {
      setDiscount(100);
    } else if (promocode === "JUICE10") {
      setDiscount(Totalmrp * 0.1);
    } else {
      setDiscount(0);
      alert("Invalid Promocode");
    }
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
        total,
        settotal,
        discount,
        setDiscount,
        promocode,
        setPromocode,
        Handlediscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

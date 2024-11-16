// src/pages/CartPage.jsx
import React, { useContext } from "react";
import { CartContext } from "../CartContext";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;

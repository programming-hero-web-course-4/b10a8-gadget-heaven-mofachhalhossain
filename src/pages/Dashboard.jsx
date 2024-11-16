// src/pages/Dashboard.jsx
import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../CartContext";
import { useLocation } from "react-router-dom"; // Import useLocation
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Dashboard = () => {
  const { cartItems, wishlistItems, removeFromCart, removeFromWishlist } = useContext(CartContext);

  const location = useLocation(); // Get current location (URL)
  
  // Parse the query parameter to set the initial toggleView state
  const queryParams = new URLSearchParams(location.search);
  const initialView = queryParams.get("view") || "cart"; // Default to "cart" if no query param

  const [toggleView, setToggleView] = useState(initialView);

  useEffect(() => {
    setToggleView(initialView); // Update toggle view when URL changes
  }, [location.search]);

  return (
    <div className="dashboard-page">
        <div className="container">
          <Navbar />
        </div>
      <div className="dashboard-hero">
        <div className="container">
        <h2>Dashboard</h2>
        <p>Explore the latest gadgets that will elevate your experience to the next level.</p>
        <div className="toggle-buttons">
        <button
          onClick={() => setToggleView("cart")}
          className={toggleView === "cart" ? "active" : ""}
        >
          Cart
        </button>
        <button
          onClick={() => setToggleView("wishlist")}
          className={toggleView === "wishlist" ? "active" : ""}
        >
          Wishlist
        </button>
        </div>
      </div>
      </div>
      <div className="dashboard-content">
        {toggleView === "cart" ? (
          <div className="cart-section container">
            <h3>Cart</h3>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-wrap">
                    <div className="cart-product-img">
                      <img 
                        src={item.image} 
                        alt={item.name}
                      />
                    </div>
                    <div className="cart-product-content">
                      <h4>{item.name}</h4>
                      <p className="description">{item.description}</p>
                      <p>Price: {item.price}</p>
                    </div>
                  </div>
                  <div className="cart-product-cancel">
                    <button onClick={() => removeFromCart(item.id)}>X</button>
                  </div>
                </div>
              ))
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
        ) : (
          <div className="wishlist-section container">
            <h3>Wishlist</h3>
            {wishlistItems.length > 0 ? (
              wishlistItems.map((item) => (
                <div key={item.id} className="wishlist-item">
                  <div className="wishlist-item-img">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="product-image" 
                    />
                  </div>
                    <div className="wishlist-item-content">
                    <h4>{item.name}</h4>
                    <h3>{item.description}</h3>
                    <p>Price: {item.price}</p>
                    <button onClick={() => addToCart(item)}>Add to Cart</button>
                  </div>
                  <div className="wishlist-btn"></div>
                  <button onClick={() => removeFromWishlist(item.id)}>X</button>
                </div>
              ))
            ) : (
              <p>Your wishlist is empty</p>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;

// src/components/Navbar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { CartContext } from "../CartContext";

function Navbar({ wishlistCount }) {
  const { cartItems } = useContext(CartContext);  // Consume CartContext
  const cartCount = cartItems.length;

  return (
    <div className="navbar">
      <nav className="navbar-content">
        <h1>Gadget Heaven</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/statistics">Statistics</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
        <div className="nav-icons">
          {/* Cart Icon with Count */}
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faCartShopping} size="lg" />
            <span className="cart-count">{cartCount}</span>
          </Link>

          {/* Wishlist Icon with Count - Open dashboard's wishlist */}
          <Link to="/dashboard?view=wishlist">
            <div className="wishlist-icon">
              <FontAwesomeIcon icon={faHeart} size="lg" />
              <span className="wishlist-count">{wishlistCount}</span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

// src/components/ProductCard.js
import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-placeholder">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image" 
        />
      </div>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <Link to={`/product/${product.id}`}>
        <button className="view-details-button">View Details</button>
      </Link>
    </div>
  );
}

export default ProductCard;

// src/components/ProductDetails.jsx
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import productsData from "../products.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { CartContext } from "../CartContext";

const ProductDetails = () => {
  const { id } = useParams();  // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const { addToCart, addToWishlist } = useContext(CartContext);

  useEffect(() => {
    // Find the product based on the ID from the URL
    const foundProduct = productsData.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="product-details-page">
      <div className="container">
        <Navbar />
      </div>
      <div className="product-details-hero">
        <h2>Product Details</h2>
        <p>Explore the latest gadgets that will take your experience to the next level.</p>
      </div>
      <div className="product-details-card">
        <div className="product-details-image">
          {/* Product Image */}
        </div>
        <div className="product-details-info">
          <h2>{product.name}</h2>
          <p className="price">Price: {product.price}</p>
          <p className={`status ${product.stock.toLowerCase().replace(" ", "-")}`}>
            {product.stock}
          </p>
          <p className="description">{product.description}</p>
          <div className="specification">
            <h4>Specification:</h4>
            <ul>
              {product.specification.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
          <div className="rating">
            <span>Rating 🌟</span>
            <span className="stars">{"⭐".repeat(Math.floor(product.rating))}</span>
            <span className="rating-value">{product.rating}</span>
          </div>
          <div className="actions">
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              Add To Cart
            </button>
            <button className="wishlist" onClick={() => addToWishlist(product)}>
              <FontAwesomeIcon icon={faHeart} size="lg" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;

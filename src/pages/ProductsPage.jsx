// src/pages/ProductsPage.js
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import productsData from "../products.json";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className="product-section container">
      <h2>Explore Cutting-Edge Gadgets</h2>
      <div className="products-page">
        <Sidebar />
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;

// src/components/Sidebar.js
import React from "react";

function Sidebar() {
  const categories = ["All Product", "Laptops", "Phones", "Accessories", "Smart Watches", "MacBook", "Iphone"];

  return (
    <div className="sidebar">
      {categories.map((category, index) => (
        <button key={index} className="sidebar-button">
          {category}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;

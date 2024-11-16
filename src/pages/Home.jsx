import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../assets/hero-img.png";
import ProductsPage from "../pages/ProductsPage";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="homepage ">
      <div className="nav-hero">
        <div className="container">
            <Navbar />
            <div className="hero">
                <h2>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="shop-now">
                    <a href="#">Shop Now</a>
                </div>
            </div>
        </div>
      </div>
    <div className="hero-img">
        <img src={HeroImg} alt="" />
    </div>
        <ProductsPage />
        <Footer />
    </div>
  );
}

export default Home;

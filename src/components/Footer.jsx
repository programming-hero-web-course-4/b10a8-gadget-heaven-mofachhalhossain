import React from "react";

function Footer() {
  return (
    <div className="footer">
        <div className="container">
            <div className="footer-top">
                <h3>Gadget Heaven</h3>
                <p>Leading the way in the cutting edge technology and innovation</p>
            </div>
            <div className="footer-bottom">
                <div className="bottom-first">
                    <h4>Services</h4>
                    <ul>
                        <li>Product Support</li>
                        <li>Order Tracking</li>
                        <li>Shipping & Delivery</li>
                        <li>Returns</li>
                    </ul>
                </div>
                <div className="bottom-mid">
                    <h4>Company</h4>
                    <ul>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="bottom-end">
                    <h4>Legal</h4>
                    <ul>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;

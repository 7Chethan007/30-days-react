import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-section">
                    <h3>Pirates App</h3>
                    <p>Learning React from Scratch</p>
                </div>

                <div className="footer-section">
                    <h4>Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: support@pirateapp.com</p>
                    <p>Phone: +1 234 567 890</p>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} PiratesApp. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
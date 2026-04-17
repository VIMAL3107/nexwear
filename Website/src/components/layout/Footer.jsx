import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-espresso">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <h2 className="footer-logo">Nexwear Shirts</h2>
                    <p>Premium graphic streetwear and classic printed tees.</p>
                </div>
                <div className="footer-links">
                    <h4>Shop</h4>
                    <a href="#">Oversized Tees</a>
                    <a href="#">Graphic Prints</a>
                    <a href="#">Anime Collection</a>
                </div>
                <div className="footer-links">
                    <h4>Support</h4>
                    <a href="#">Contact Us</a>
                    <a href="#">Shipping</a>
                    <a href="#">Returns</a>
                </div>
            </div>
            <div className="footer-bottom container">
                <p>&copy; 2026 Nexwear Shirts. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

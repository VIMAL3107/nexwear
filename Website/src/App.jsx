import React, { useEffect, useState } from 'react';
import { Menu, ShoppingBag, ArrowRight } from 'lucide-react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-container container">
          <button className="icon-btn">
            <Menu size={24} color="var(--color-espresso)" />
          </button>

          <a href="/" className="logo">
            Nexwear
          </a>

          <button className="icon-btn bag-btn">
            <ShoppingBag size={24} color="var(--color-espresso)" />
            <span className="badge">1</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content container">
          <div className="hero-text animate-fade-in">
            <h4 className="subtitle">Urban Streetwear</h4>
            <h1 className="title">Premium Printed Tees.</h1>
            <p className="description">
              Express yourself with our exclusive collection of boy's graphic t-shirts.
              Featuring vibrant character prints, trendy oversized fits, and uncompromising comfort.
              Just like your favorite trends, with an elevated feel.
            </p>
            <div className="hero-btns">
              <button className="btn-primary">Shop Graphic Tees</button>
              <button className="btn-secondary">View New Arrivals</button>
            </div>
          </div>

      {/* Philosophy Section */}
      <section className="philosophy section container">
        <div className="philosophy-grid">
          <div className="philosophy-header animate-fade-in">
            <h2>Wear Your Vibe</h2>
          </div>
          <div className="philosophy-text animate-fade-in delay-100">
            <p>
              Nexwear brings you the finest oversized boys t-shirts and classic character prints
              ranging from vintage cartoons like Snoopy and Pink Panther to popular favorites
              like Shinchan and Labubu. Comfort meets cool streetwear style.
            </p>
            <a href="#" className="link-arrow">
              View lookbook <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="collection section bg-bisque">
        <div className="container">
          <div className="collection-header animate-fade-in">
            <h2>Trending Graphics</h2>
            <button className="btn-accent">View All Shirts</button>
          </div>

          <div className="product-grid">
            {/* Product 1 */}
            <div className="product-card hover-lift animate-fade-in delay-100">
              <div className="product-image-container">
                <div className="image-placeholder bg-wheat img-soft-rounded">
                  <span className="placeholder-text px-4" style={{ textAlign: 'center' }}>Olive Snoopy Print</span>
                </div>
                <button className="quick-add">Quick Add</button>
              </div>
              <div className="product-info">
                <h3 className="product-name">The Snoopy Classic Edition</h3>
                <p className="product-price">₹1,299</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="product-card hover-lift animate-fade-in delay-200">
              <div className="product-image-container">
                <div className="image-placeholder img-soft-rounded" style={{ backgroundColor: 'var(--color-pistachio)' }}>
                  <span className="placeholder-text px-4" style={{ textAlign: 'center' }}>Shinchan Music Tee</span>
                </div>
                <button className="quick-add">Quick Add</button>
              </div>
              <div className="product-info">
                <h3 className="product-name">High on Music - Shinchan</h3>
                <p className="product-price">₹1,499</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="product-card hover-lift animate-fade-in delay-300">
              <div className="product-image-container">
                <div className="image-placeholder bg-wheat img-soft-rounded">
                  <span className="placeholder-text px-4" style={{ textAlign: 'center' }}>Labubu Graphic Streetwear</span>
                </div>
                <button className="quick-add">Quick Add</button>
              </div>
              <div className="product-info">
                <h3 className="product-name">Labubu Cute Streetwear</h3>
                <p className="product-price">₹1,199</p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="product-card hover-lift animate-fade-in delay-400">
              <div className="product-image-container">
                <div className="image-placeholder bg-wheat img-soft-rounded" style={{ backgroundColor: 'var(--color-bisque)' }}>
                  <span className="placeholder-text px-4" style={{ textAlign: 'center' }}>Pink Panther Boba Tee</span>
                </div>
                <button className="quick-add">Quick Add</button>
              </div>
              <div className="product-info">
                <h3 className="product-name">Pink Panther Oversized</h3>
                <p className="product-price">₹1,599</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}

export default App;

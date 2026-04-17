import React from 'react';
import { Menu, ShoppingBag } from 'lucide-react';
import { useScroll } from '../../hooks/useScroll';

const Navbar = () => {
    const scrolled = useScroll(50);

    return (
        <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
            <div className="nav-container container">
                <button className="icon-btn" aria-label="Menu">
                    <Menu size={24} color="var(--color-espresso)" />
                </button>

                <a href="/" className="logo">
                    Nexwear
                </a>

                <button className="icon-btn bag-btn" aria-label="Cart">
                    <ShoppingBag size={24} color="var(--color-espresso)" />
                    <span className="badge">1</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

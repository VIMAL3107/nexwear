import { Link } from 'react-router-dom';
import { Menu, ShoppingBag } from 'lucide-react';
import { useScroll } from '../../hooks/useScroll';
import { useCart } from '../../store/CartContext';

const Navbar = () => {
    const scrolled = useScroll(50);
    const { totalCount } = useCart();

    return (
        <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
            <div className="nav-container container">
                <button className="icon-btn" aria-label="Menu">
                    <Menu size={24} color="var(--color-espresso)" />
                </button>

                <Link to="/" className="logo">
                    Nexwear
                </Link>

                <Link to="/cart" className="icon-btn bag-btn" aria-label="Cart">
                    <ShoppingBag size={24} color="var(--color-espresso)" />
                    {totalCount > 0 && <span className="badge">{totalCount}</span>}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;

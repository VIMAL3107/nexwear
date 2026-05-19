import { Link } from 'react-router-dom';
import { useCart } from '../../store/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';

const ProductCard = (product) => {
    const { id, title, price, bgColor, delayClass, imageLabel, placeholderColor, image } = product;
    const { addToCart } = useCart();

    const handleQuickAdd = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart({ id, title, price, image });
    };

    return (
        <div className={`product-card hover-lift animate-fade-in ${delayClass || ''}`}>
            <Link to={`/product/${id}`} className="product-image-link">
                <div className="product-image-container">
                    {image ? (
                        <img src={image} alt={title} className="product-img" />
                    ) : (
                        <div className={`image-placeholder img-soft-rounded ${placeholderColor || ''}`} style={{ backgroundColor: bgColor }}>
                            <span className="placeholder-text px-4" style={{ textAlign: 'center' }}>
                                {imageLabel || 'Product Image'}
                            </span>
                        </div>
                    )}
                    <button className="quick-add" onClick={handleQuickAdd}>Quick Add</button>
                </div>
            </Link>
            <div className="product-info">
                <Link to={`/product/${id}`}>
                    <h3 className="product-name">{title}</h3>
                </Link>
                <p className="product-price">{formatCurrency(price)}</p>
            </div>
        </div>
    );
};

export default ProductCard;

import React from 'react';

const ProductCard = ({ title, price, bgColor, delayClass, imageLabel, placeholderColor }) => {
    return (
        <div className={`product-card hover-lift animate-fade-in ${delayClass}`}>
            <div className="product-image-container">
                <div className={`image-placeholder img-soft-rounded ${placeholderColor}`} style={{ backgroundColor: bgColor }}>
                    <span className="placeholder-text px-4" style={{ textAlign: 'center' }}>
                        {imageLabel}
                    </span>
                </div>
                <button className="quick-add">Quick Add</button>
            </div>
            <div className="product-info">
                <h3 className="product-name">{title}</h3>
                <p className="product-price">₹{price}</p>
            </div>
        </div>
    );
};

export default ProductCard;

import React from 'react';
import ProductCard from '../ui/ProductCard';

const FeaturedCollection = () => {
    const products = [
        {
            id: 1,
            title: "The Snoopy Classic Edition",
            price: "1,299",
            imageLabel: "Olive Snoopy Print",
            placeholderColor: "bg-wheat",
            delayClass: "delay-100"
        },
        {
            id: 2,
            title: "High on Music - Shinchan",
            price: "1,499",
            imageLabel: "Shinchan Music Tee",
            bgColor: "var(--color-pistachio)",
            delayClass: "delay-200"
        },
        {
            id: 3,
            title: "Labubu Cute Streetwear",
            price: "1,199",
            imageLabel: "Labubu Graphic Streetwear",
            placeholderColor: "bg-wheat",
            delayClass: "delay-300"
        },
        {
            id: 4,
            title: "Pink Panther Oversized",
            price: "1,599",
            imageLabel: "Pink Panther Boba Tee",
            bgColor: "var(--color-bisque)",
            placeholderColor: "bg-wheat",
            delayClass: "delay-400"
        }
    ];

    return (
        <section className="collection section bg-bisque">
            <div className="container">
                <div className="collection-header animate-fade-in">
                    <h2>Trending Graphics</h2>
                    <button className="btn-accent">View All Shirts</button>
                </div>

                <div className="product-grid">
                    {products.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCollection;

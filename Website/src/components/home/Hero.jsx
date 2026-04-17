import React from 'react';

const Hero = () => {
    return (
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
            </div>
        </header>
    );
};

export default Hero;

import React from 'react';
import { ArrowRight } from 'lucide-react';

const Philosophy = () => {
    return (
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
    );
};

export default Philosophy;

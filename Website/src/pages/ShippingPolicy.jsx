import React from 'react';

const ShippingPolicy = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px', maxWidth: '800px' }}>
            <h1>Shipping Policy</h1>
            <p style={{ color: '#999' }}>Last Updated: Oct 2023</p>
            <div style={{ marginTop: '40px', lineHeight: '1.6' }}>
                <h3>1. Processing Times</h3>
                <p>Since every Nexwear product is custom-printed, please allow 2-3 business days for production.</p>
                <h3 style={{ marginTop: '20px' }}>2. Delivery Times</h3>
                <p>Metro Cities: 3-5 days. Rest of India: 5-7 days.</p>
                <h3 style={{ marginTop: '20px' }}>3. Tracking</h3>
                <p>Once shipped, you will receive a tracking link via SMS and Email.</p>
            </div>
        </div>
    );
};

export default ShippingPolicy;

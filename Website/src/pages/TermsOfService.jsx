import React from 'react';

const TermsOfService = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px', maxWidth: '800px' }}>
            <h1>Terms of Service</h1>
            <p style={{ color: '#999' }}>Last Updated: Oct 2023</p>
            <div style={{ marginTop: '40px', lineHeight: '1.6' }}>
                <h3>1. Acceptance of Terms</h3>
                <p>By accessing Nexwear, you agree to be bound by these terms...</p>
                <h3 style={{ marginTop: '20px' }}>2. AI Generated Content</h3>
                <p>Designs generated via our AI Studio are subject to our copyright policies...</p>
                <h3 style={{ marginTop: '20px' }}>3. Shipping & Delivery</h3>
                <p>We partner with third-party logistics to deliver your orders...</p>
            </div>
        </div>
    );
};

export default TermsOfService;

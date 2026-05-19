import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Privacy Policy & Terms</h1>
            <p style={{ color: '#666', marginBottom: '40px' }}>Last updated: May 15, 2026</p>

            <div style={{ lineHeight: 1.8, color: '#444' }}>
                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ color: '#000', marginBottom: '15px' }}>1. Introduction</h2>
                    <p>
                        Welcome to Nexwear. We respect your privacy and are committed to protecting your personal data. 
                        This privacy policy will inform you as to how we look after your personal data when you visit our website 
                        and tell you about your privacy rights.
                    </p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ color: '#000', marginBottom: '15px' }}>2. Data We Collect</h2>
                    <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                        <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                        <li><strong>Financial Data:</strong> includes payment card details (processed securely via our payment partners like Razorpay; we do not store full card numbers).</li>
                        <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products you have purchased from us.</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ color: '#000', marginBottom: '15px' }}>3. How We Use Your Data</h2>
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., fulfilling an order).</li>
                        <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
                        <li>Where we need to comply with a legal obligation.</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ color: '#000', marginBottom: '15px' }}>4. Terms of Service</h2>
                    <p>
                        By accessing our website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, 
                        and agree that you are responsible for compliance with any applicable local laws. The materials contained in this website 
                        are protected by applicable copyright and trademark law.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;

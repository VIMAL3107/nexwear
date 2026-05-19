import React from 'react';
import { Link } from 'react-router-dom';

const PaymentFailure = () => {
    return (
        <div className="container" style={{ paddingTop: '150px', paddingBottom: '100px', textAlign: 'center' }}>
            <div style={{ fontSize: '80px', color: '#dc3545' }}>✕</div>
            <h1 style={{ marginTop: '20px' }}>Payment Failed</h1>
            <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '10px' }}>Something went wrong while processing your payment. No funds were debited.</p>
            
            <div style={{ marginTop: '40px', padding: '30px', background: '#fff5f5', borderRadius: '16px', maxWidth: '500px', margin: '40px auto' }}>
                <p>Common reasons: Insufficient funds, incorrect CVV, or bank timeout.</p>
            </div>

            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '30px' }}>
                <Link to="/checkout" className="btn-primary" style={{ padding: '15px 30px' }}>Try Again</Link>
                <Link to="/contact" className="btn" style={{ padding: '15px 30px', background: '#fff', border: '1px solid #000', color: '#000' }}>Contact Support</Link>
            </div>
        </div>
    );
};

export default PaymentFailure;

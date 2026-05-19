import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const orderId = searchParams.get('orderId') || '#NXW-1045';

    return (
        <div className="container" style={{ paddingTop: '150px', paddingBottom: '100px', textAlign: 'center' }}>
            <div style={{ fontSize: '80px', color: '#28a745' }}>✓</div>
            <h1 style={{ marginTop: '20px' }}>Payment Successful!</h1>
            <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '10px' }}>Thank you for your order. We've received your payment and are now preparing your items.</p>
            
            <div style={{ marginTop: '40px', padding: '30px', background: '#f9f9f9', borderRadius: '16px', maxWidth: '500px', margin: '40px auto' }}>
                <p><strong>Order ID:</strong> {orderId}</p>
                <p>A confirmation email has been sent to your registered address.</p>
            </div>

            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '30px' }}>
                <Link to={`/order/${orderId}`} className="btn-primary" style={{ padding: '15px 30px' }}>Track Order</Link>
                <Link to="/shop" className="btn" style={{ padding: '15px 30px', background: '#fff', border: '1px solid #000', color: '#000' }}>Continue Shopping</Link>
            </div>
        </div>
    );
};

export default PaymentSuccess;

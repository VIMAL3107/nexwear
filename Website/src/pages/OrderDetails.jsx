import React from 'react';
import { useParams, Link } from 'react-router-dom';

const OrderDetails = () => {
    const { orderId } = useParams();

    // Mock order data
    const order = {
        id: orderId,
        date: 'Oct 12, 2023',
        status: 'In Transit',
        total: 1299,
        items: [
            { id: 1, name: 'Noir Essence Tee', size: 'L', price: 1299, image: 'https://via.placeholder.com/100' }
        ],
        shippingAddress: '123 Street, Mumbai, Maharashtra, 400001',
        trackingNumber: 'DELH987654321',
        trackingLink: '#'
    };

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
            <Link to="/profile" style={{ color: '#000', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
                ← Back to Profile
            </Link>
            <h1 style={{ marginTop: '20px' }}>Order {order.id}</h1>
            
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px', marginTop: '30px' }}>
                <div>
                    <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '12px' }}>
                        <h3>Items</h3>
                        {order.items.map(item => (
                            <div key={item.id} style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                                <img src={item.image} alt={item.name} style={{ width: '80px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} />
                                <div>
                                    <h4>{item.name}</h4>
                                    <p style={{ color: '#666' }}>Size: {item.size}</p>
                                    <p style={{ fontWeight: 'bold' }}>₹{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #eee', borderRadius: '12px' }}>
                        <h3>Track Shipment</h3>
                        <p><strong>Courier:</strong> Delhivery</p>
                        <p><strong>Tracking Number:</strong> {order.trackingNumber}</p>
                        <a href={order.trackingLink} style={{ color: '#007bff' }}>Track on Courier Website</a>
                    </div>
                </div>

                <div>
                    <div style={{ padding: '20px', background: '#f9f9f9', borderRadius: '12px' }}>
                        <h3>Order Summary</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                            <span>Subtotal</span>
                            <span>₹{order.total}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                            <span>Shipping</span>
                            <span>FREE</span>
                        </div>
                        <hr />
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem' }}>
                            <span>Total</span>
                            <span>₹{order.total}</span>
                        </div>
                    </div>

                    <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <Link to={`/cancel-order/${order.id}`} className="btn" style={{ textAlign: 'center', background: '#fff', border: '1px solid #000', color: '#000' }}>
                            Cancel Order
                        </Link>
                        <Link to="/returns" className="btn" style={{ textAlign: 'center', background: '#fff', border: '1px solid #000', color: '#000' }}>
                            Return Items
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;

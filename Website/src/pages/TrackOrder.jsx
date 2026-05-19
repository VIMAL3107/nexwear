import React, { useState } from 'react';

const TrackOrder = () => {
    const [orderId, setOrderId] = useState('');
    const [trackingData, setTrackingData] = useState(null);

    const handleTrack = (e) => {
        e.preventDefault();
        // Mock tracking logic
        setTrackingData({
            status: 'In Transit',
            location: 'Mumbai Hub',
            lastUpdate: 'Oct 14, 2023, 10:30 AM',
            steps: [
                { status: 'Ordered', date: 'Oct 12', completed: true },
                { status: 'Printed', date: 'Oct 13', completed: true },
                { status: 'Shipped', date: 'Oct 14', completed: true },
                { status: 'Delivered', date: '-', completed: false },
            ]
        });
    };

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px', maxWidth: '800px' }}>
            <h1>Track Your Order</h1>
            <p>Enter your order ID and email to see the real-time status of your shipment.</p>

            <form onSubmit={handleTrack} style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
                <input 
                    type="text" 
                    placeholder="Order ID (e.g. #NXW-1042)" 
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    style={{ flex: 1, padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}
                    required
                />
                <button type="submit" className="btn-primary" style={{ padding: '0 30px' }}>Track</button>
            </form>

            {trackingData && (
                <div style={{ marginTop: '50px', padding: '30px', border: '1px solid #eee', borderRadius: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3>Current Status: <span style={{ color: '#007bff' }}>{trackingData.status}</span></h3>
                        <span style={{ color: '#666' }}>Last Update: {trackingData.lastUpdate}</span>
                    </div>

                    <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '15px', left: '0', right: '0', height: '2px', background: '#eee', zIndex: -1 }}></div>
                        {trackingData.steps.map((step, idx) => (
                            <div key={idx} style={{ textAlign: 'center', background: '#fff', padding: '0 10px' }}>
                                <div style={{ 
                                    width: '30px', 
                                    height: '30px', 
                                    borderRadius: '50%', 
                                    background: step.completed ? '#000' : '#eee', 
                                    margin: '0 auto 10px auto',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: '#fff'
                                }}>
                                    {step.completed ? '✓' : idx + 1}
                                </div>
                                <div style={{ fontWeight: 'bold' }}>{step.status}</div>
                                <div style={{ fontSize: '0.8rem', color: '#999' }}>{step.date}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TrackOrder;

import React, { useState, useEffect } from 'react';

const LiveOrderFeed = () => {
    const [orders, setOrders] = useState([
        { id: '#NXW-1045', customer: 'Rahul K.', amount: 1299, time: 'Just now', status: 'New' },
        { id: '#NXW-1044', customer: 'Priya S.', amount: 2498, time: '2 mins ago', status: 'Processing' },
        { id: '#NXW-1043', customer: 'Amit B.', amount: 1299, time: '15 mins ago', status: 'Printed' }
    ]);

    return (
        <div style={styles.container}>
            <h2>Live Order Feed 🔴</h2>
            <div style={styles.feedBox}>
                {orders.map((order, idx) => (
                    <div key={idx} style={styles.orderItem}>
                        <div>
                            <strong>{order.id}</strong> - {order.customer}
                        </div>
                        <div>₹{order.amount}</div>
                        <div style={{ color: '#888', fontSize: '0.85rem' }}>{order.time}</div>
                        <span style={styles.badge}>{order.status}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: { padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
    feedBox: { display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' },
    orderItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', border: '1px solid #eee', borderRadius: '8px' },
    badge: { background: '#fef7e0', color: '#f29900', padding: '5px 10px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }
};

export default LiveOrderFeed;

import React from 'react';

const NotificationCenter = () => {
    return (
        <div style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h2>Notification Center 🔔</h2>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px' }}>
                <li style={{ padding: '15px', borderBottom: '1px solid #eee', background: '#f4f6f8', borderRadius: '4px' }}>
                    <strong>System Alert:</strong> Low stock on Noir Essence Tee (L). <a href="#">Restock now</a>
                </li>
                <li style={{ padding: '15px', borderBottom: '1px solid #eee' }}>
                    <strong>New Partner:</strong> 'Delhi Custom Prints' has submitted their SLA documents for review.
                </li>
            </ul>
        </div>
    );
};

export default NotificationCenter;

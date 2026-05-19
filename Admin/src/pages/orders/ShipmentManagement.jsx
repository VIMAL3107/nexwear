import React from 'react';

const ShipmentManagement = () => {
    return (
        <div style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h2>Shipping & Tracking Management (Step 10)</h2>
            <div style={{ marginTop: '20px', display: 'flex', gap: '15px', marginBottom: '20px' }}>
                <div style={{ flex: 1, padding: '15px', background: '#e8f5e9', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.8rem' }}>Shipped Today</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>24</div>
                </div>
                <div style={{ flex: 1, padding: '15px', background: '#fff3e0', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.8rem' }}>Pending Pickup</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>12</div>
                </div>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ background: '#f9f9f9', textAlign: 'left' }}>
                        <th style={{ padding: '12px' }}>Order ID</th>
                        <th style={{ padding: '12px' }}>Courier</th>
                        <th style={{ padding: '12px' }}>AWB Number</th>
                        <th style={{ padding: '12px' }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>#1041</td>
                        <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Delhivery</td>
                        <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>DELH987654321</td>
                        <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>In Transit</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ShipmentManagement;

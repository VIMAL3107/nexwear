import React from 'react';

const CouponManagement = () => {
    return (
        <div style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>Coupon Management Table</h2>
                <button style={{ padding: '10px 15px', background: '#000', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>+ New Coupon</button>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                    <tr style={{ background: '#f9f9f9' }}>
                        <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #eee' }}>Code</th>
                        <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #eee' }}>Discount</th>
                        <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #eee' }}>Usage Limit</th>
                        <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #eee' }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}><strong>WELCOME10</strong></td>
                        <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>10% Off</td>
                        <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>145 / Unlimited</td>
                        <td style={{ padding: '12px', borderBottom: '1px solid #eee', color: 'green' }}>Active</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CouponManagement;

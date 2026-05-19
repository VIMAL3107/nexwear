import React from 'react';

const BulkOrders = () => {
    return (
        <div style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h2>Bulk Order Management</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                    <tr style={{ background: '#f9f9f9', textAlign: 'left' }}>
                        <th style={{ padding: '12px' }}>Organization</th>
                        <th style={{ padding: '12px' }}>Qty</th>
                        <th style={{ padding: '12px' }}>Status</th>
                        <th style={{ padding: '12px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>IIT Delhi - Fest Tees</td>
                        <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>500</td>
                        <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Quotation Sent</td>
                        <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                            <button style={{ padding: '5px 10px', background: '#000', color: '#fff', border: 'none', borderRadius: '4px' }}>View Details</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BulkOrders;

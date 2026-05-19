import React from 'react';

const DisputeTracker = () => {
    return (
        <div style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h2>Dispute Resolution Tracker</h2>
            <div style={{ marginTop: '20px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: '#f9f9f9', textAlign: 'left' }}>
                            <th style={{ padding: '12px' }}>Dispute ID</th>
                            <th style={{ padding: '12px' }}>Issue</th>
                            <th style={{ padding: '12px' }}>Involved</th>
                            <th style={{ padding: '12px' }}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>#DIS-441</td>
                            <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Late Delivery</td>
                            <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Customer vs Partner X</td>
                            <td style={{ padding: '12px', borderBottom: '1px solid #eee', color: '#f29900' }}>Investigating</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DisputeTracker;

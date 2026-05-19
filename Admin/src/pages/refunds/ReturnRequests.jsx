import React from 'react';

const ReturnRequests = () => {
    return (
        <div style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h2>Return & Exchange Processing</h2>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ padding: '15px', border: '1px solid #eee', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <strong>Order #NXW-1029</strong> - Reason: Size Issue
                        <div style={{ fontSize: '0.8rem', color: '#666' }}>Customer: John Doe</div>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button style={{ padding: '8px 16px', background: '#4caf50', color: '#fff', border: 'none', borderRadius: '4px' }}>Approve</button>
                        <button style={{ padding: '8px 16px', background: '#f44336', color: '#fff', border: 'none', borderRadius: '4px' }}>Reject</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReturnRequests;

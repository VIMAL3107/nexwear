import React from 'react';

const DesignApproval = () => {
    return (
        <div style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h2>Design Approval Workflow</h2>
            <p>Review and approve AI-generated designs or customer uploads.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
                <div style={{ border: '1px solid #eee', padding: '10px', borderRadius: '8px' }}>
                    <div style={{ height: '150px', background: '#f9f9f9', marginBottom: '10px' }}></div>
                    <strong>Abstract Neon</strong>
                    <div style={{ fontSize: '0.8rem', color: '#666' }}>By AI Agent #4</div>
                    <div style={{ marginTop: '10px', display: 'flex', gap: '5px' }}>
                        <button style={{ flex: 1, padding: '5px', background: 'green', color: '#fff', border: 'none', borderRadius: '4px' }}>Approve</button>
                        <button style={{ flex: 1, padding: '5px', background: 'red', color: '#fff', border: 'none', borderRadius: '4px' }}>Reject</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignApproval;

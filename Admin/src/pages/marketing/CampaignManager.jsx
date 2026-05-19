import React from 'react';

const CampaignManager = () => {
    return (
        <div style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h2>Marketing Campaign Manager</h2>
            <div style={{ marginTop: '20px', padding: '20px', border: '1px dashed #ccc', textAlign: 'center', borderRadius: '8px' }}>
                <p style={{ color: '#666' }}>No active campaigns.</p>
                <button style={{ padding: '10px 20px', background: '#000', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', marginTop: '10px' }}>
                    + Create Email/SMS Campaign
                </button>
            </div>
        </div>
    );
};

export default CampaignManager;

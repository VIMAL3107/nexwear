import React from 'react';

const FeedbackAnalytics = () => {
    return (
        <div style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h2>Delivery & Feedback Analytics (Step 11)</h2>
            <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
                <div style={{ flex: 1, textAlign: 'center', padding: '20px', background: '#f9f9f9', borderRadius: '12px' }}>
                    <div style={{ fontSize: '0.9rem', color: '#666' }}>Average NPS Score</div>
                    <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#4caf50' }}>9.2</div>
                    <div style={{ fontSize: '0.8rem', color: '#888' }}>+0.5 from last month</div>
                </div>
                <div style={{ flex: 2 }}>
                    <h3>Top Feedback Tags</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
                        <span style={{ padding: '5px 12px', background: '#e8f5e9', color: '#2e7d32', borderRadius: '20px', fontSize: '0.85rem' }}>Great Fabric (124)</span>
                        <span style={{ padding: '5px 12px', background: '#e8f5e9', color: '#2e7d32', borderRadius: '20px', fontSize: '0.85rem' }}>Fast Delivery (98)</span>
                        <span style={{ padding: '5px 12px', background: '#fff3e0', color: '#ef6c00', borderRadius: '20px', fontSize: '0.85rem' }}>Sizing Issues (12)</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackAnalytics;

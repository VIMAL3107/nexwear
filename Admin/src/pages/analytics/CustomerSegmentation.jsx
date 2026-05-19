import React from 'react';

const CustomerSegmentation = () => {
    return (
        <div style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h2>AI Customer Segmentation</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px' }}>
                <div style={{ padding: '15px', border: '1px solid #eee', borderRadius: '8px' }}>
                    <h3 style={{ margin: '0 0 10px 0' }}>College Students</h3>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>42%</div>
                    <p style={{ fontSize: '0.85rem', color: '#666' }}>High interest in Graphic Tees</p>
                </div>
                <div style={{ padding: '15px', border: '1px solid #eee', borderRadius: '8px' }}>
                    <h3 style={{ margin: '0 0 10px 0' }}>Corporate Fans</h3>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>28%</div>
                    <p style={{ fontSize: '0.85rem', color: '#666' }}>Prefer Minimalist/Solid colors</p>
                </div>
                <div style={{ padding: '15px', border: '1px solid #eee', borderRadius: '8px' }}>
                    <h3 style={{ margin: '0 0 10px 0' }}>Sustainable Shoppers</h3>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>15%</div>
                    <p style={{ fontSize: '0.85rem', color: '#666' }}>Focus on organic cotton collections</p>
                </div>
            </div>
        </div>
    );
};

export default CustomerSegmentation;

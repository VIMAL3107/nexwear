import React from 'react';

const RevenueHeatmap = () => {
    return (
        <div style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h2>Revenue Heatmap (India)</h2>
            <div style={{ marginTop: '20px', height: '300px', background: '#eef2f5', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '8px', border: '1px solid #ddd' }}>
                <p style={{ color: '#555', fontSize: '1.2rem' }}>🗺️ Heatmap visualization loading... (Map Component Placeholder)</p>
            </div>
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                <div style={{ flex: 1, padding: '15px', background: '#f9f9f9', borderRadius: '6px' }}>
                    <h3 style={{ margin: '0 0 10px 0' }}>Top Performing States</h3>
                    <ul style={{ margin: 0, paddingLeft: '20px' }}>
                        <li>Maharashtra - ₹45,000 (35%)</li>
                        <li>Delhi NCR - ₹32,000 (25%)</li>
                        <li>Karnataka - ₹20,000 (15%)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RevenueHeatmap;

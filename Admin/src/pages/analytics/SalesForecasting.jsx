import React from 'react';

const SalesForecasting = () => {
    return (
        <div style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h2>AI Sales Forecasting</h2>
            <div style={{ marginTop: '20px', height: '200px', background: '#f4f6f8', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #ddd' }}>
                <p style={{ color: '#666' }}>📈 Predictive Chart: Demand Spike expected in June (College Season)</p>
            </div>
            <div style={{ marginTop: '20px', padding: '15px', background: '#e3f2fd', borderRadius: '8px' }}>
                <strong>Recommendation:</strong> Increase stock of 'Noir Essence Tee' by 25% for the next 30 days to avoid stockouts.
            </div>
        </div>
    );
};

export default SalesForecasting;

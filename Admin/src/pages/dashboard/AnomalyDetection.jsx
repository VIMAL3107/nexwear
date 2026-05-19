import React from 'react';

const AnomalyDetection = () => {
    return (
        <div style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h2>AI Anomaly Detection</h2>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ padding: '15px', background: '#fff9c4', borderLeft: '5px solid #fbc02d', borderRadius: '4px' }}>
                    <strong>Unusual Refund Spike:</strong> detected in the last 24 hours (12% vs avg 2%). 
                    <br/><span style={{ fontSize: '0.85rem' }}>Common factor: 'Urban Core' collection size M.</span>
                </div>
                <div style={{ padding: '15px', background: '#fce4ec', borderLeft: '5px solid #f06292', borderRadius: '4px' }}>
                    <strong>Login Anomaly:</strong> Unusual number of failed login attempts from IP 192.168.1.45.
                </div>
            </div>
        </div>
    );
};

export default AnomalyDetection;

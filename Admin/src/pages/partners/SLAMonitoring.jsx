import React from 'react';

const SLAMonitoring = () => {
    return (
        <div style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h2>SLA Monitoring Dashboard</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px' }}>
                <div style={{ padding: '15px', background: '#f9f9f9', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.85rem', color: '#666' }}>Avg Delivery Time</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>3.2 Days</div>
                </div>
                <div style={{ padding: '15px', background: '#f9f9f9', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.85rem', color: '#666' }}>Quality Defect Rate</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'green' }}>0.4%</div>
                </div>
                <div style={{ padding: '15px', background: '#f9f9f9', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.85rem', color: '#666' }}>Partner SLA Compliance</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#f29900' }}>98.2%</div>
                </div>
            </div>
            
            <h3 style={{ marginTop: '30px' }}>Partner Performance Ranking</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                <thead>
                    <tr style={{ background: '#f9f9f9', textAlign: 'left' }}>
                        <th style={{ padding: '10px' }}>Partner</th>
                        <th style={{ padding: '10px' }}>Score</th>
                        <th style={{ padding: '10px' }}>SLA Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Bangalore Prints</td>
                        <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>4.9</td>
                        <td style={{ padding: '10px', borderBottom: '1px solid #eee', color: 'green' }}>Excellent</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SLAMonitoring;

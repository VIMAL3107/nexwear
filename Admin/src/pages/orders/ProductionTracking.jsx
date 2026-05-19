import React from 'react';

const ProductionTracking = () => {
    return (
        <div style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h2>Production & QC Tracking (Step 9)</h2>
            <div style={{ marginTop: '20px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: '#f9f9f9', textAlign: 'left' }}>
                            <th style={{ padding: '12px' }}>Order ID</th>
                            <th style={{ padding: '12px' }}>Partner</th>
                            <th style={{ padding: '12px' }}>Production Status</th>
                            <th style={{ padding: '12px' }}>QC Photo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>#1043</td>
                            <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Bangalore Prints</td>
                            <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                                <span style={{ color: 'green' }}>Completed</span>
                            </td>
                            <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                                <button style={{ padding: '4px 8px', background: '#eee', border: '1px solid #ccc', borderRadius: '4px' }}>View Photo</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductionTracking;

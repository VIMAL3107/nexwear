import React from 'react';

const CommunicationHub = () => {
    return (
        <div style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', height: '500px', display: 'flex', flexDirection: 'column' }}>
            <h2>Partner Communication Hub</h2>
            <div style={{ flex: 1, border: '1px solid #eee', borderRadius: '8px', marginTop: '15px', padding: '15px', overflowY: 'auto' }}>
                <div style={{ marginBottom: '15px' }}>
                    <strong>Delhi Custom Prints:</strong> "Hey, the material for order #1045 is ready for printing."
                    <div style={{ fontSize: '0.75rem', color: '#888' }}>10:30 AM</div>
                </div>
                <div style={{ textAlign: 'right', marginBottom: '15px' }}>
                    <strong>Admin:</strong> "Great, please proceed. Quality photos must be uploaded before shipping."
                    <div style={{ fontSize: '0.75rem', color: '#888' }}>10:45 AM</div>
                </div>
            </div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                <input type="text" placeholder="Type a message to partner..." style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} />
                <button style={{ padding: '10px 20px', background: '#000', color: '#fff', border: 'none', borderRadius: '4px' }}>Send</button>
            </div>
        </div>
    );
};

export default CommunicationHub;

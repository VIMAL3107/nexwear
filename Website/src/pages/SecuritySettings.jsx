import React from 'react';

const SecuritySettings = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px', maxWidth: '600px' }}>
            <h1>Security Settings</h1>
            <p style={{ color: '#666' }}>Manage your account security and authentication methods.</p>

            <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '12px' }}>
                    <h3>Change Password</h3>
                    <form style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <input type="password" placeholder="Current Password" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                        <input type="password" placeholder="New Password" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                        <button type="button" className="btn-primary" style={{ padding: '12px' }}>Update Password</button>
                    </form>
                </div>

                <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h3>Two-Factor Authentication</h3>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>Add an extra layer of security to your account.</p>
                    </div>
                    <button className="btn" style={{ background: '#eee' }}>Enable</button>
                </div>

                <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '12px' }}>
                    <h3 style={{ color: 'red' }}>Danger Zone</h3>
                    <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '5px' }}>Deleting your account will permanently remove all your designs and order history.</p>
                    <button className="btn" style={{ marginTop: '15px', background: '#fff', border: '1px solid red', color: 'red' }}>Delete Account</button>
                </div>
            </div>
        </div>
    );
};

export default SecuritySettings;

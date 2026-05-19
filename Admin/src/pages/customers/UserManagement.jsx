import React from 'react';

const UserManagement = () => {
    return (
        <div style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h2>User Management Panel</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px', marginBottom: '15px' }}>
                <input type="text" placeholder="Search users by email or role..." style={{ padding: '10px', width: '300px', borderRadius: '6px', border: '1px solid #ddd' }} />
                <button style={{ padding: '10px 15px', background: '#000', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>+ Add Admin User</button>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ background: '#f9f9f9' }}>
                        <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #eee' }}>Name</th>
                        <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #eee' }}>Email</th>
                        <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #eee' }}>Role</th>
                        <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #eee' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Super Admin</td>
                        <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>admin@nexwear.com</td>
                        <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}><strong>Super Admin</strong></td>
                        <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Edit | Ban</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;

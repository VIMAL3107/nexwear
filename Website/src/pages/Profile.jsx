import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('orders');

    // Mock data
    const user = {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+91 9876543210'
    };

    const mockOrders = [
        { id: '#NXW-1029', date: 'May 10, 2026', total: 1299, status: 'Delivered' },
        { id: '#NXW-1035', date: 'May 14, 2026', total: 2498, status: 'Processing' }
    ];

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
            <h1 style={styles.title}>My Account</h1>
            
            <div style={styles.layout}>
                <div style={styles.sidebar}>
                    <button 
                        style={activeTab === 'orders' ? styles.activeTab : styles.tab}
                        onClick={() => setActiveTab('orders')}
                    >
                        Order History
                    </button>
                    <button 
                        style={activeTab === 'profile' ? styles.activeTab : styles.tab}
                        onClick={() => setActiveTab('profile')}
                    >
                        Profile Details
                    </button>
                    <button 
                        style={activeTab === 'addresses' ? styles.activeTab : styles.tab}
                        onClick={() => setActiveTab('addresses')}
                    >
                        Saved Addresses
                    </button>
                    <button style={styles.logoutBtn}>Logout</button>
                </div>

                <div style={styles.content}>
                    {activeTab === 'orders' && (
                        <div>
                            <h2>Order History</h2>
                            {mockOrders.length > 0 ? (
                                <table style={styles.table}>
                                    <thead>
                                        <tr>
                                            <th style={styles.th}>Order ID</th>
                                            <th style={styles.th}>Date</th>
                                            <th style={styles.th}>Total</th>
                                            <th style={styles.th}>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {mockOrders.map(order => (
                                            <tr key={order.id}>
                                                <td style={styles.td}><strong>{order.id}</strong></td>
                                                <td style={styles.td}>{order.date}</td>
                                                <td style={styles.td}>₹{order.total}</td>
                                                <td style={styles.td}>
                                                    <span style={{
                                                        ...styles.statusBadge,
                                                        background: order.status === 'Delivered' ? '#e6f4ea' : '#fef7e0',
                                                        color: order.status === 'Delivered' ? '#1e8e3e' : '#f29900'
                                                    }}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <p>You have no past orders.</p>
                            )}
                        </div>
                    )}

                    {activeTab === 'profile' && (
                        <div>
                            <h2>Profile Details</h2>
                            <div style={styles.profileInfo}>
                                <p><strong>Name:</strong> {user.name}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Phone:</strong> {user.phone}</p>
                                <button style={styles.editBtn}>Edit Profile</button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'addresses' && (
                        <div>
                            <h2>Saved Addresses</h2>
                            <div style={styles.addressCard}>
                                <p><strong>Home</strong></p>
                                <p>123 Fashion Street, Cyber City</p>
                                <p>Gurugram, Haryana, 122002</p>
                                <p>India</p>
                            </div>
                            <button style={styles.editBtn}>Add New Address</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const styles = {
    title: {
        fontSize: '2.5rem',
        marginBottom: '40px'
    },
    layout: {
        display: 'flex',
        gap: '40px',
        alignItems: 'start'
    },
    sidebar: {
        width: '250px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        background: '#f9f9f9',
        padding: '20px',
        borderRadius: '12px'
    },
    tab: {
        padding: '12px 15px',
        border: 'none',
        background: 'none',
        textAlign: 'left',
        fontSize: '1rem',
        cursor: 'pointer',
        borderRadius: '8px',
        transition: 'background 0.2s'
    },
    activeTab: {
        padding: '12px 15px',
        border: 'none',
        background: '#000',
        color: '#fff',
        textAlign: 'left',
        fontSize: '1rem',
        cursor: 'pointer',
        borderRadius: '8px',
        fontWeight: 'bold'
    },
    logoutBtn: {
        padding: '12px 15px',
        border: 'none',
        background: 'none',
        color: '#d32f2f',
        textAlign: 'left',
        fontSize: '1rem',
        cursor: 'pointer',
        marginTop: '20px',
        fontWeight: 'bold'
    },
    content: {
        flex: 1,
        background: '#fff',
        padding: '30px',
        borderRadius: '12px',
        border: '1px solid #eee'
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px'
    },
    th: {
        textAlign: 'left',
        padding: '15px',
        borderBottom: '2px solid #eee',
        color: '#666'
    },
    td: {
        padding: '15px',
        borderBottom: '1px solid #eee'
    },
    statusBadge: {
        padding: '5px 10px',
        borderRadius: '20px',
        fontSize: '0.85rem',
        fontWeight: 'bold'
    },
    profileInfo: {
        marginTop: '20px',
        lineHeight: '1.8'
    },
    addressCard: {
        border: '1px solid #ddd',
        padding: '20px',
        borderRadius: '8px',
        marginTop: '20px',
        lineHeight: '1.6'
    },
    editBtn: {
        background: '#fff',
        border: '1px solid #000',
        padding: '10px 20px',
        borderRadius: '6px',
        fontWeight: 'bold',
        cursor: 'pointer',
        marginTop: '20px'
    }
};

export default Profile;

import React from 'react';

const Notifications = () => {
    const notifications = [
        { id: 1, title: 'Order Shipped!', message: 'Your order #NXW-1042 has been shipped.', time: '2 hours ago', unread: true },
        { id: 2, title: 'New Collection Out!', message: 'Check out our new Urban Core collection.', time: '1 day ago', unread: false },
    ];

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
            <h1>Notifications</h1>
            <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {notifications.map(n => (
                    <div key={n.id} style={{ 
                        padding: '20px', 
                        borderRadius: '12px', 
                        background: n.unread ? '#f0f7ff' : '#fff', 
                        border: '1px solid #eee',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div>
                            <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{n.title}</h3>
                            <p style={{ margin: '5px 0 0 0', color: '#666' }}>{n.message}</p>
                            <span style={{ fontSize: '0.8rem', color: '#999' }}>{n.time}</span>
                        </div>
                        {n.unread && <div style={{ width: '10px', height: '10px', background: '#007bff', borderRadius: '50%' }}></div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notifications;

import React from 'react';
import { Link } from 'react-router-dom';

const OrderHistory = () => {
    const orders = [
        { id: '#NXW-1045', date: 'Oct 15, 2023', total: 1299, status: 'In Transit' },
        { id: '#NXW-1029', date: 'Sep 12, 2023', total: 899, status: 'Delivered' }
    ];

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
            <h1>My Order History</h1>
            <div style={{ marginTop: '30px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ textAlign: 'left', borderBottom: '2px solid #eee' }}>
                            <th style={{ padding: '15px' }}>Order ID</th>
                            <th style={{ padding: '15px' }}>Date</th>
                            <th style={{ padding: '15px' }}>Total</th>
                            <th style={{ padding: '15px' }}>Status</th>
                            <th style={{ padding: '15px' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id} style={{ borderBottom: '1px solid #eee' }}>
                                <td style={{ padding: '15px' }}>{order.id}</td>
                                <td style={{ padding: '15px' }}>{order.date}</td>
                                <td style={{ padding: '15px' }}>₹{order.total}</td>
                                <td style={{ padding: '15px' }}>
                                    <span style={{ 
                                        padding: '4px 10px', 
                                        borderRadius: '20px', 
                                        background: order.status === 'Delivered' ? '#e6f4ea' : '#fff4e5',
                                        color: order.status === 'Delivered' ? '#1e7e34' : '#b45d00',
                                        fontSize: '0.9rem'
                                    }}>
                                        {order.status}
                                    </span>
                                </td>
                                <td style={{ padding: '15px' }}>
                                    <Link to={`/order/${order.id.replace('#','')}`} style={{ color: '#007bff', textDecoration: 'none' }}>View Details</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderHistory;

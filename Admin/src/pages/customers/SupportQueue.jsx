import React from 'react';

const SupportQueue = () => {
    const tickets = [
        { id: '#T-892', user: 'Neha W.', subject: 'Order Delayed', status: 'Open', priority: 'High' },
        { id: '#T-893', user: 'Arjun K.', subject: 'Return Request Issue', status: 'Pending', priority: 'Medium' }
    ];

    return (
        <div style={styles.container}>
            <h2>Customer Support Queue</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Ticket ID</th>
                        <th style={styles.th}>Customer</th>
                        <th style={styles.th}>Subject</th>
                        <th style={styles.th}>Priority</th>
                        <th style={styles.th}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map((t, idx) => (
                        <tr key={idx}>
                            <td style={styles.td}><strong>{t.id}</strong></td>
                            <td style={styles.td}>{t.user}</td>
                            <td style={styles.td}>{t.subject}</td>
                            <td style={styles.td}><span style={{ color: t.priority === 'High' ? 'red' : 'orange' }}>{t.priority}</span></td>
                            <td style={styles.td}><button style={styles.btn}>Respond</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const styles = {
    container: { padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
    table: { width: '100%', borderCollapse: 'collapse', marginTop: '15px' },
    th: { textAlign: 'left', padding: '12px', borderBottom: '2px solid #eee' },
    td: { padding: '12px', borderBottom: '1px solid #eee' },
    btn: { padding: '6px 12px', background: '#000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default SupportQueue;

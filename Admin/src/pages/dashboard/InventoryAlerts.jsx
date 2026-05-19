import React from 'react';

const InventoryAlerts = () => {
    const alerts = [
        { product: 'Noir Essence Tee (L)', stock: 3, status: 'Critical' },
        { product: 'Urban Core Oversized (M)', stock: 0, status: 'Out of Stock' },
        { product: 'Vibe Theory Print (XL)', stock: 12, status: 'Low Stock' }
    ];

    return (
        <div style={styles.container}>
            <h2 style={{ color: '#d32f2f' }}>⚠️ Inventory Alerts</h2>
            <div style={styles.list}>
                {alerts.map((item, idx) => (
                    <div key={idx} style={styles.alertCard}>
                        <div><strong>{item.product}</strong></div>
                        <div style={{ color: item.stock === 0 ? 'red' : 'orange', fontWeight: 'bold' }}>
                            {item.stock} left ({item.status})
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: { padding: '20px', background: '#fff', borderRadius: '8px', borderLeft: '5px solid #d32f2f', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
    list: { display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' },
    alertCard: { display: 'flex', justifyContent: 'space-between', padding: '12px', background: '#fef2f2', borderRadius: '6px' }
};

export default InventoryAlerts;

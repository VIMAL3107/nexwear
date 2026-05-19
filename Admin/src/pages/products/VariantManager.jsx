import React from 'react';

const VariantManager = () => {
    return (
        <div style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h2>Product Variant Manager</h2>
            <p>Manage SKU-level inventory for color and size combinations.</p>
            
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                    <tr style={{ background: '#f9f9f9' }}>
                        <th>Color</th>
                        <th>Size</th>
                        <th>Stock</th>
                        <th>SKU</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Black</td>
                        <td>M</td>
                        <td>25</td>
                        <td>NXW-TEE-BLK-M</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>Black</td>
                        <td>L</td>
                        <td>12</td>
                        <td>NXW-TEE-BLK-L</td>
                        <td>Edit</td>
                    </tr>
                </tbody>
            </table>
            <button style={{ marginTop: '20px', padding: '10px 20px', background: '#000', color: '#fff', border: 'none', borderRadius: '4px' }}>
                Add New Variant
            </button>
        </div>
    );
};

export default VariantManager;

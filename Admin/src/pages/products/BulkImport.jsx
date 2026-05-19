import React from 'react';

const BulkImport = () => {
    return (
        <div style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h2>Bulk Product Import/Export</h2>
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                <div style={{ flex: 1, padding: '20px', border: '2px dashed #ddd', textAlign: 'center', borderRadius: '8px' }}>
                    <h3>Import CSV</h3>
                    <p>Upload a CSV file to add or update products in bulk.</p>
                    <button style={{ padding: '10px 20px', background: '#000', color: '#fff', border: 'none', borderRadius: '4px' }}>
                        Choose File
                    </button>
                </div>
                <div style={{ flex: 1, padding: '20px', border: '1px solid #ddd', textAlign: 'center', borderRadius: '8px' }}>
                    <h3>Export Catalogue</h3>
                    <p>Download your entire product list as a CSV file.</p>
                    <button style={{ padding: '10px 20px', background: '#fff', border: '1px solid #000', color: '#000', borderRadius: '4px' }}>
                        Export to CSV
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BulkImport;

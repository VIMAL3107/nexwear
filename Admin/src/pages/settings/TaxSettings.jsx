import React from 'react';

const TaxSettings = () => {
    return (
        <div style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h2>GST & Tax Settings</h2>
            <form style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px' }}>CGST (%)</label>
                        <input type="number" defaultValue="2.5" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px' }}>SGST (%)</label>
                        <input type="number" defaultValue="2.5" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px' }}>IGST (%)</label>
                        <input type="number" defaultValue="5.0" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px' }}>HSN Code (Apparel)</label>
                        <input type="text" defaultValue="6109" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} />
                    </div>
                </div>
                <button type="submit" style={{ width: 'fit-content', padding: '10px 20px', background: '#000', color: '#fff', border: 'none', borderRadius: '4px' }}>Save Tax Configuration</button>
            </form>
        </div>
    );
};

export default TaxSettings;

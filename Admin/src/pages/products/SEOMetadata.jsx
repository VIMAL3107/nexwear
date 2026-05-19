import React from 'react';

const SEOMetadata = () => {
    return (
        <div style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h2>SEO Metadata Editor</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
                <div>
                    <label>Meta Title</label>
                    <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} />
                </div>
                <div>
                    <label>Meta Description</label>
                    <textarea style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} rows="3"></textarea>
                </div>
                <div>
                    <label>Keywords (comma separated)</label>
                    <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} />
                </div>
                <button type="submit" style={{ padding: '10px 20px', background: '#000', color: '#fff', border: 'none', borderRadius: '4px', width: 'fit-content' }}>
                    Save SEO Data
                </button>
            </form>
        </div>
    );
};

export default SEOMetadata;

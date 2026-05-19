import React, { useState } from 'react';

const DesignUpload = () => {
    const [file, setFile] = useState(null);

    const handleUpload = (e) => {
        e.preventDefault();
        alert('Your design has been uploaded and sent for quality verification. You will be notified via email once it is ready for printing.');
    };

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px', maxWidth: '600px' }}>
            <h1>Upload Your Own Design</h1>
            <p>Already have a masterpiece? Upload your high-resolution PNG or SVG and we'll print it on our premium cotton tees.</p>

            <form onSubmit={handleUpload} style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ padding: '40px', border: '2px dashed #ddd', borderRadius: '16px', textAlign: 'center' }}>
                    <input type="file" style={{ width: '100%' }} onChange={(e) => setFile(e.target.files[0])} required />
                    <p style={{ marginTop: '10px', fontSize: '0.8rem', color: '#999' }}>Recommended: 300 DPI, Transparent Background.</p>
                </div>
                
                <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '12px' }}>
                    <h3>Printing Guidelines</h3>
                    <ul style={{ fontSize: '0.9rem', marginTop: '10px', color: '#666' }}>
                        <li>No copyright infringement.</li>
                        <li>No offensive or hate-speech content.</li>
                        <li>Min resolution: 2000px on the shortest side.</li>
                    </ul>
                </div>

                <button type="submit" className="btn-primary" style={{ padding: '15px' }}>Upload & Verify</button>
            </form>
        </div>
    );
};

export default DesignUpload;

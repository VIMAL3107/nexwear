import React from 'react';
import { Link } from 'react-router-dom';

const MyDesigns = () => {
    const designs = [
        { id: 1, prompt: 'Cyberpunk Tiger', date: 'Oct 12, 2023', image: 'https://via.placeholder.com/200', status: 'Approved' },
        { id: 2, prompt: 'Vaporwave Sunset', date: 'Oct 14, 2023', image: 'https://via.placeholder.com/200', status: 'Pending Review' }
    ];

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>My AI Designs</h1>
                <Link to="/ai-studio" className="btn-primary" style={{ padding: '10px 20px' }}>Create New</Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '30px' }}>
                {designs.map(design => (
                    <div key={design.id} style={{ border: '1px solid #eee', borderRadius: '12px', overflow: 'hidden' }}>
                        <img src={design.image} alt={design.prompt} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '15px' }}>
                            <h4 style={{ margin: 0 }}>{design.prompt}</h4>
                            <p style={{ fontSize: '0.8rem', color: '#999', margin: '5px 0' }}>{design.date}</p>
                            <span style={{ 
                                fontSize: '0.7rem', 
                                padding: '2px 8px', 
                                borderRadius: '4px', 
                                background: design.status === 'Approved' ? '#e6f4ea' : '#fff4e5',
                                color: design.status === 'Approved' ? '#1e7e34' : '#b45d00'
                            }}>
                                {design.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyDesigns;

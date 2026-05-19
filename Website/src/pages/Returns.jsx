import React, { useState } from 'react';

const Returns = () => {
    const [orderId, setOrderId] = useState('');
    const [reason, setReason] = useState('Size Issue');
    const [comments, setComments] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Return requested for Order ${orderId}. Our team will contact you shortly.`);
        setOrderId('');
        setComments('');
    };

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px', maxWidth: '600px' }}>
            <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '10px' }}>Return & Exchange</h1>
            <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>
                Not perfectly satisfied? We're here to help you exchange or return your item.
            </p>

            <div style={{ background: '#fff', padding: '40px', borderRadius: '12px', border: '1px solid #eee', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontWeight: 'bold' }}>Order ID</label>
                        <input 
                            type="text" 
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                            placeholder="e.g. #NXW-1029" 
                            required 
                            style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none' }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontWeight: 'bold' }}>Reason for Return</label>
                        <select 
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none' }}
                        >
                            <option>Size Issue</option>
                            <option>Defective Product</option>
                            <option>Not What I Expected</option>
                            <option>Received Wrong Item</option>
                        </select>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontWeight: 'bold' }}>Additional Comments & Photo Links</label>
                        <textarea 
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                            rows="4" 
                            placeholder="Please provide any extra details..."
                            style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none', resize: 'vertical' }}
                        ></textarea>
                    </div>

                    <button type="submit" style={{ background: '#000', color: '#fff', padding: '15px', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>
                        Submit Request
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Returns;

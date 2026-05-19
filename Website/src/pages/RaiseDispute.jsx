import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const RaiseDispute = () => {
    const [searchParams] = useSearchParams();
    const orderId = searchParams.get('orderId') || '';
    const [formData, setFormData] = useState({
        orderId: orderId,
        issue: '',
        description: '',
        evidence: null
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Dispute for order ${formData.orderId} has been logged. Our resolution team will review the evidence and get back to you within 48 hours.`);
    };

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px', maxWidth: '700px' }}>
            <h1>Raise a Dispute</h1>
            <p>If you're unhappy with a resolution or have a serious issue with your order (quality, missing items, or lost shipment), please file a formal dispute below.</p>

            <form onSubmit={handleSubmit} style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Order ID</label>
                    <input 
                        type="text" 
                        value={formData.orderId}
                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} 
                        onChange={(e) => setFormData({...formData, orderId: e.target.value})}
                        required
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Primary Issue</label>
                    <select 
                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                        onChange={(e) => setFormData({...formData, issue: e.target.value})}
                        required
                    >
                        <option value="">Select an issue</option>
                        <option value="quality">Significant Quality Defect</option>
                        <option value="missing">Items missing from package</option>
                        <option value="lost">Shipment marked delivered but not received</option>
                        <option value="refund">Refund not processed after 14 days</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Detailed Description</label>
                    <textarea 
                        rows="6"
                        required
                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} 
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                    ></textarea>
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Upload Evidence (Photos/Video)</label>
                    <input type="file" style={{ width: '100%' }} />
                    <span style={{ fontSize: '0.8rem', color: '#999' }}>Max file size: 10MB. Accepted formats: JPG, PNG, MP4.</span>
                </div>
                <button type="submit" className="btn-primary" style={{ padding: '15px' }}>File Dispute</button>
            </form>
        </div>
    );
};

export default RaiseDispute;

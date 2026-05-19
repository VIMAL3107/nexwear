import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CancelOrder = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const [reason, setReason] = useState('');

    const handleCancel = (e) => {
        e.preventDefault();
        if (!reason) {
            alert('Please select a reason for cancellation.');
            return;
        }
        alert(`Cancellation request for order ${orderId} has been submitted.`);
        navigate('/profile');
    };

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px', maxWidth: '600px' }}>
            <h1>Cancel Order {orderId}</h1>
            <p>We're sorry to see you cancel. Please let us know why so we can improve.</p>

            <form onSubmit={handleCancel} style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Reason for cancellation</label>
                    <select 
                        value={reason} 
                        onChange={(e) => setReason(e.target.value)}
                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                    >
                        <option value="">Select a reason</option>
                        <option value="Changed my mind">Changed my mind</option>
                        <option value="Found a better price elsewhere">Found a better price elsewhere</option>
                        <option value="Ordered by mistake">Ordered by mistake</option>
                        <option value="Delivery time too long">Delivery time too long</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Additional Details (Optional)</label>
                    <textarea style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} rows="4"></textarea>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                    <button type="submit" style={{ flex: 1, padding: '15px', background: '#e53935', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                        Confirm Cancellation
                    </button>
                    <button type="button" onClick={() => navigate(-1)} style={{ flex: 1, padding: '15px', background: '#fff', border: '1px solid #000', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                        Keep Order
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CancelOrder;

import React, { useState } from 'react';

const BulkOrderForm = () => {
    const [formData, setFormData] = useState({
        organization: '',
        contactName: '',
        email: '',
        phone: '',
        quantity: '',
        requirements: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your bulk order inquiry has been submitted. Our team will contact you with a quotation within 24 hours.');
        console.log(formData);
    };

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px', maxWidth: '800px' }}>
            <h1>Bulk Order Inquiries</h1>
            <p>Planning a college fest, corporate event, or starting your own brand? We offer premium quality printing at wholesale rates for orders above 50 pieces.</p>

            <form onSubmit={handleSubmit} style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ gridColumn: 'span 2' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Organization / Brand Name</label>
                    <input 
                        type="text" 
                        required
                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} 
                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Contact Person</label>
                    <input 
                        type="text" 
                        required
                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} 
                        onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Work Email</label>
                    <input 
                        type="email" 
                        required
                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} 
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Phone Number</label>
                    <input 
                        type="tel" 
                        required
                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} 
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Estimated Quantity</label>
                    <input 
                        type="number" 
                        min="50"
                        required
                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} 
                        onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                    />
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Tell us about your requirements</label>
                    <textarea 
                        rows="5"
                        required
                        placeholder="E.g. 500 Black Oversized Tees with front and back screen printing..."
                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} 
                        onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                    ></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ gridColumn: 'span 2', padding: '15px' }}>Request Quotation</button>
            </form>
        </div>
    );
};

export default BulkOrderForm;

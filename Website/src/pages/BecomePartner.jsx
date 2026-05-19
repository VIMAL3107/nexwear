import React from 'react';

const BecomePartner = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px', maxWidth: '900px' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <h1>Become a Nexwear Print Partner</h1>
                <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '10px' }}>Join India's fastest growing AI-driven T-shirt platform. We handle the sales, you handle the prints.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                <div>
                    <h3>Why Partner with us?</h3>
                    <ul style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px', paddingLeft: '20px' }}>
                        <li><strong>Automated Orders:</strong> No more manual coordination. Our AI routes orders directly to your floor.</li>
                        <li><strong>Timely Payouts:</strong> Guaranteed bi-weekly payouts directly to your bank account.</li>
                        <li><strong>Quality Standards:</strong> We help you improve your factory scores with real-time QC feedback.</li>
                        <li><strong>Scale your business:</strong> Access a pan-India customer base without spending a rupee on marketing.</li>
                    </ul>
                </div>
                <div style={{ padding: '30px', background: '#f9f9f9', borderRadius: '16px' }}>
                    <h3>Start Onboarding</h3>
                    <form style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <input type="text" placeholder="Factory / Company Name" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                        <input type="text" placeholder="City" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                        <input type="email" placeholder="Business Email" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                        <select style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}>
                            <option>Daily Print Capacity</option>
                            <option>50-100 units</option>
                            <option>100-500 units</option>
                            <option>500+ units</option>
                        </select>
                        <button type="button" className="btn-primary" style={{ padding: '15px' }}>Apply to Join</button>
                    </form>
                    <p style={{ fontSize: '0.8rem', color: '#999', marginTop: '15px', textAlign: 'center' }}>By applying, you agree to our Partner SLA and Terms of Service.</p>
                </div>
            </div>
        </div>
    );
};

export default BecomePartner;

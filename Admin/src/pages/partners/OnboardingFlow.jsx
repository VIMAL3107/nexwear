import React from 'react';

const OnboardingFlow = () => {
    return (
        <div style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h2>Partner Onboarding Flow</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
                <div style={{ padding: '15px', border: '1px solid #eee', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <strong>Mumbai Prints Co.</strong>
                        <div style={{ fontSize: '0.85rem', color: '#666' }}>Documents pending verification</div>
                    </div>
                    <button style={{ padding: '8px 16px', background: '#000', color: '#fff', border: 'none', borderRadius: '4px' }}>Review Docs</button>
                </div>
                <div style={{ padding: '15px', border: '1px solid #eee', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <strong>Delhi Tech Fabrics</strong>
                        <div style={{ fontSize: '0.85rem', color: '#666' }}>Pending contract signature</div>
                    </div>
                    <button style={{ padding: '8px 16px', background: '#fff', border: '1px solid #000', borderRadius: '4px' }}>Send Contract</button>
                </div>
            </div>
        </div>
    );
};

export default OnboardingFlow;

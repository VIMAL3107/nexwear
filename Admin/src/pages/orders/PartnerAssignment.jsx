import React, { useState } from 'react';

const defaultAssignments = [
    { 
        orderId: 'ORD-4818', 
        partner: 'Mumbai Prints Co.', 
        reason: 'Proximity (2.4km) & Quality Score (4.9/5)', 
        status: 'Auto-assigned', 
        time: '2 mins ago',
        capacity: '84%',
        avgDelivery: '1.8 days'
    },
    { 
        orderId: 'ORD-4817', 
        partner: 'Bangalore Prints', 
        reason: 'High capacity & Screen print specialty (4.8/5)', 
        status: 'Auto-assigned', 
        time: '10 mins ago',
        capacity: '42%',
        avgDelivery: '2.1 days'
    },
    { 
        orderId: 'ORD-4816', 
        partner: 'TeeLink Hyderabad', 
        reason: 'Proximity (1.8km) & Low load queue (4.7/5)', 
        status: 'Manual-assigned', 
        time: '24 mins ago',
        capacity: '15%',
        avgDelivery: '1.5 days'
    }
];

const alternativePartners = [
    'Delhi Custom Prints',
    'InkMate Chennai',
    'ColorPro Pune',
    'PrintX Ahmedabad'
];

const PartnerAssignment = ({ assignments: propAssignments }) => {
    const [assignments, setAssignments] = useState(propAssignments || defaultAssignments);
    const [activeHoverId, setActiveHoverId] = useState(null);
    const [reassigningId, setReassigningId] = useState(null);

    const handleReassign = (orderId) => {
        setReassigningId(orderId);
        
        // Simulate AI recalculation & re-routing latency
        setTimeout(() => {
            setAssignments(prev => prev.map(item => {
                if (item.orderId === orderId) {
                    const currentPartnerIndex = alternativePartners.indexOf(item.partner);
                    const nextPartner = alternativePartners[(currentPartnerIndex + 1) % alternativePartners.length];
                    return {
                        ...item,
                        partner: nextPartner,
                        reason: 'AI Recalculated: Secondary path optimized for speed & lowest carbon footprint',
                        status: 'Auto-assigned',
                        time: 'Just now'
                    };
                }
                return item;
            }));
            setReassigningId(null);
        }, 800);
    };

    return (
        <div style={{
            padding: '28px',
            background: 'linear-gradient(135deg, #ffffff 0%, #fcfdfe 100%)',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
            border: '1px solid #f0f3f6',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            color: '#1a202c',
            maxWidth: '900px',
            margin: '0 auto'
        }}>
            {/* Header Section */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #edf2f7',
                paddingBottom: '20px',
                marginBottom: '24px'
            }}>
                <div>
                    <h2 style={{
                        margin: 0,
                        fontSize: '1.6rem',
                        fontWeight: '700',
                        letterSpacing: '-0.5px',
                        background: 'linear-gradient(90deg, #1a202c 0%, #4a5568 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        AI Partner Routing & Fulfillment
                    </h2>
                    <p style={{ margin: '4px 0 0 0', fontSize: '0.875rem', color: '#718096' }}>
                        Step 8: Automated printer allocation and routing telemetry.
                    </p>
                </div>
                
                {/* AI Telemetry Badge */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    background: 'rgba(56, 178, 172, 0.08)',
                    border: '1px solid rgba(56, 178, 172, 0.2)'
                }}>
                    <span style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#319795',
                        display: 'inline-block',
                        boxShadow: '0 0 8px #38b2ac',
                        animation: 'pulse 1.5s infinite alternate'
                    }}></span>
                    <span style={{
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        color: '#234e52',
                        letterSpacing: '0.5px'
                    }}>
                        AI ROUTING ENGINE ONLINE
                    </span>
                </div>
            </div>

            {/* Metrics Dashboard Row */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                marginBottom: '28px'
            }}>
                <div style={{ padding: '16px', background: '#f7fafc', borderRadius: '12px', border: '1px solid #edf2f7' }}>
                    <div style={{ fontSize: '0.75rem', color: '#718096', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Active Routings</div>
                    <div style={{ fontSize: '1.6rem', fontWeight: '800', marginTop: '4px', color: '#2d3748' }}>{assignments.length} Orders</div>
                </div>
                <div style={{ padding: '16px', background: '#f7fafc', borderRadius: '12px', border: '1px solid #edf2f7' }}>
                    <div style={{ fontSize: '0.75rem', color: '#718096', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Auto-Route Rate</div>
                    <div style={{ fontSize: '1.6rem', fontWeight: '800', marginTop: '4px', color: '#319795' }}>94.2%</div>
                </div>
                <div style={{ padding: '16px', background: '#f7fafc', borderRadius: '12px', border: '1px solid #edf2f7' }}>
                    <div style={{ fontSize: '0.75rem', color: '#718096', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Avg Latency</div>
                    <div style={{ fontSize: '1.6rem', fontWeight: '800', marginTop: '4px', color: '#4a5568' }}>420ms</div>
                </div>
            </div>

            {/* Real-time Logs List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '0.9rem', color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Fulfillment Logs & Allocation
                </h4>
                
                {assignments.map(a => {
                    const isHovered = activeHoverId === a.orderId;
                    const isReassigning = reassigningId === a.orderId;
                    const isAuto = a.status === 'Auto-assigned';

                    return (
                        <div 
                            key={a.orderId}
                            onMouseEnter={() => setActiveHoverId(a.orderId)}
                            onMouseLeave={() => setActiveHoverId(null)}
                            style={{
                                padding: '20px',
                                background: '#ffffff',
                                border: `1px solid ${isHovered ? '#cbd5e0' : '#e2e8f0'}`,
                                borderRadius: '12px',
                                boxShadow: isHovered ? '0 4px 15px rgba(0, 0, 0, 0.04)' : 'none',
                                transition: 'all 0.2s ease-in-out',
                                transform: isHovered ? 'translateY(-2px)' : 'none',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: '16px'
                            }}
                        >
                            <div style={{ flex: '1', minWidth: '280px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                                    <strong style={{ fontSize: '1.05rem', color: '#2d3748' }}>{a.orderId}</strong>
                                    <span style={{ color: '#a0aec0' }}>&rarr;</span>
                                    <span style={{ 
                                        fontWeight: '700', 
                                        color: '#1a202c', 
                                        background: '#edf2f7', 
                                        padding: '4px 10px', 
                                        borderRadius: '6px', 
                                        fontSize: '0.9rem' 
                                    }}>
                                        {a.partner}
                                    </span>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        color: '#a0aec0',
                                        marginLeft: '4px'
                                    }}>
                                        {a.time}
                                    </span>
                                </div>
                                
                                <div style={{ fontSize: '0.85rem', color: '#4a5568', lineHeight: '1.4', marginBottom: '8px' }}>
                                    <strong style={{ color: '#718096' }}>Allocation Metric:</strong> {a.reason}
                                </div>

                                {/* Mini Telemetry Badges */}
                                <div style={{ display: 'flex', gap: '12px', fontSize: '0.75rem', color: '#718096' }}>
                                    <span>🏭 Partner Load: <strong>{a.capacity}</strong></span>
                                    <span>⏱️ Avg Delivery: <strong>{a.avgDelivery}</strong></span>
                                </div>
                            </div>

                            <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '12px',
                                minWidth: '200px',
                                justifyContent: 'flex-end'
                            }}>
                                {/* Assignment Type Pill */}
                                <span style={{
                                    fontSize: '0.75rem',
                                    fontWeight: '700',
                                    padding: '6px 12px',
                                    borderRadius: '30px',
                                    background: isAuto ? 'rgba(49, 151, 149, 0.08)' : 'rgba(90, 103, 216, 0.08)',
                                    color: isAuto ? '#234e52' : '#2b6cb0',
                                    border: `1px solid ${isAuto ? 'rgba(49, 151, 149, 0.2)' : 'rgba(90, 103, 216, 0.2)'}`
                                }}>
                                    {a.status}
                                </span>

                                {/* Re-assign Action Button */}
                                <button 
                                    onClick={() => handleReassign(a.orderId)}
                                    disabled={isReassigning}
                                    style={{
                                        padding: '8px 16px',
                                        background: isHovered ? '#1a202c' : '#ffffff',
                                        color: isHovered ? '#ffffff' : '#4a5568',
                                        border: `1px solid ${isHovered ? '#1a202c' : '#cbd5e0'}`,
                                        borderRadius: '8px',
                                        fontSize: '0.8rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        transition: 'all 0.15s ease',
                                        outline: 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        boxShadow: isHovered ? '0 4px 10px rgba(0, 0, 0, 0.1)' : 'none'
                                    }}
                                >
                                    {isReassigning ? (
                                        <>
                                            <span style={{
                                                width: '12px',
                                                height: '12px',
                                                border: '2px solid rgba(255,255,255,0.3)',
                                                borderTop: '2px solid #ffffff',
                                                borderRadius: '50%',
                                                animation: 'spin 0.6s linear infinite',
                                                display: 'inline-block'
                                            }}></span>
                                            Recalculating...
                                        </>
                                    ) : (
                                        <>🔄 Re-assign</>
                                    )}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Embed animations directly in styles */}
            <style>{`
                @keyframes pulse {
                    0% { transform: scale(0.9); opacity: 0.7; }
                    100% { transform: scale(1.1); opacity: 1; }
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default PartnerAssignment;

import React, { useState } from 'react';
import StatusBadge from './StatusBadge';

export const SubmodelList = ({ submodels, validatingIds, runValidation }) => {
    const [expandedSubmodelId, setExpandedSubmodelId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedSubmodelId(prev => prev === id ? null : id);
    };

    return (
        <div style={{ width: '100%', overflowX: 'auto', border: '1px solid var(--color-bisque)', borderRadius: 'var(--radius-md)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                <thead>
                    <tr style={{ 
                        borderBottom: '2px solid var(--color-bisque)', 
                        color: 'var(--color-mocha)', 
                        fontSize: '0.8rem', 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.5px',
                        background: 'var(--color-sugar)',
                        fontFamily: 'var(--font-secondary)',
                        fontWeight: '600'
                    }}>
                        <th style={{ padding: '16px' }}>Submodel Name / ID</th>
                        <th style={{ padding: '16px' }}>Type Schema</th>
                        <th style={{ padding: '16px' }}>Last Audited</th>
                        <th style={{ padding: '16px' }}>Integrity Status</th>
                        <th style={{ padding: '16px', textAlign: 'right' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {submodels.map(sub => {
                        const isChecking = validatingIds.has(sub._id);
                        const hasErrors = sub.validationErrors && sub.validationErrors.length > 0;
                        const isExpanded = expandedSubmodelId === sub._id;

                        return (
                            <React.Fragment key={sub._id}>
                                <tr style={{ 
                                    borderBottom: '1px solid var(--color-bisque)',
                                    background: isExpanded ? 'rgba(181, 189, 172, 0.08)' : 'transparent',
                                    transition: 'background-color 0.15s ease'
                                }}>
                                    {/* Name & ID */}
                                    <td style={{ padding: '16px' }}>
                                        <div style={{ fontWeight: '500', color: 'var(--color-espresso)', fontSize: '0.95rem', fontFamily: 'var(--font-primary)' }}>{sub.name}</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--color-mocha)', fontFamily: 'monospace', marginTop: '2px' }}>{sub._id}</div>
                                    </td>

                                    {/* Type Schema */}
                                    <td style={{ padding: '16px', fontSize: '0.9rem', color: 'var(--color-espresso)' }}>
                                        <code style={{ background: 'var(--color-bisque)', padding: '3px 8px', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', color: 'var(--color-espresso)' }}>
                                            {sub.schemaType || 'String'}
                                        </code>
                                    </td>

                                    {/* Last Checked */}
                                    <td style={{ padding: '16px', fontSize: '0.85rem', color: 'var(--color-mocha)' }}>
                                        {sub.lastChecked ? new Date(sub.lastChecked).toLocaleString() : 'Never'}
                                    </td>

                                    {/* Status Badge */}
                                    <td style={{ padding: '16px' }}>
                                        <StatusBadge status={sub.status || 'pending'} />
                                    </td>

                                    {/* Actions */}
                                    <td style={{ padding: '16px', textAlign: 'right' }}>
                                        <div style={{ display: 'inline-flex', gap: '8px' }}>
                                            {hasErrors && (
                                                <button 
                                                    onClick={() => toggleExpand(sub._id)}
                                                    style={{
                                                        padding: '6px 12px',
                                                        background: 'var(--accent-indigo-glow)',
                                                        color: 'var(--accent-indigo)',
                                                        border: 'none',
                                                        borderRadius: 'var(--radius-sm)',
                                                        cursor: 'pointer',
                                                        fontSize: '0.8rem',
                                                        fontWeight: '600',
                                                        transition: 'all 0.15s ease'
                                                    }}
                                                >
                                                    {isExpanded ? 'Hide Details' : 'View Errors'}
                                                </button>
                                            )}
                                            <button 
                                                onClick={() => runValidation(sub._id)}
                                                disabled={isChecking}
                                                style={{
                                                    padding: '6px 12px',
                                                    background: '#ffffff',
                                                    color: isChecking ? 'var(--color-wheat)' : 'var(--color-espresso)',
                                                    border: '1px solid var(--color-bisque)',
                                                    borderRadius: 'var(--radius-sm)',
                                                    cursor: 'pointer',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '600',
                                                    transition: 'all 0.15s ease',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '6px'
                                                }}
                                            >
                                                {isChecking ? (
                                                    <>
                                                        <span style={{
                                                            width: '10px',
                                                            height: '10px',
                                                            border: '2px solid rgba(0,0,0,0.1)',
                                                            borderTop: '2px solid var(--color-espresso)',
                                                            borderRadius: '50%',
                                                            animation: 'spin 0.6s linear infinite',
                                                            display: 'inline-block'
                                                        }}></span>
                                                        Checking...
                                                    </>
                                                ) : 'Check'}
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                {/* Collapsible Error Logger */}
                                {isExpanded && hasErrors && (
                                    <tr>
                                        <td colSpan="5" style={{ background: '#fffaf0', padding: '16px 24px', borderBottom: '1px solid var(--color-bisque)' }}>
                                            <div style={{ fontSize: '0.85rem', color: '#c05621' }}>
                                                <strong style={{ display: 'block', marginBottom: '6px', fontFamily: 'var(--font-primary)' }}>🚨 Structural Auditing Failures Detected:</strong>
                                                <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: '1.5', color: 'var(--color-espresso)' }}>
                                                    {sub.validationErrors.map((err, i) => (
                                                        <li key={i} style={{ marginBottom: '4px' }}>{err}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        );
                    })}
                </tbody>
            </table>
            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default SubmodelList;

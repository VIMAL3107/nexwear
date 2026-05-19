import React from 'react';

export const ValidationSummary = ({ submodels }) => {
    const total = submodels.length;
    const valid = submodels.filter(s => s.status === 'valid').length;
    const invalid = submodels.filter(s => s.status === 'invalid').length;
    const unchecked = total - valid - invalid;

    const successRate = total > 0 ? Math.round((valid / total) * 100) : 0;
    const totalErrors = submodels.reduce((acc, curr) => acc + (curr.validationErrors?.length || 0), 0);

    return (
        <div className="premium-card" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-xs)',
            background: 'linear-gradient(135deg, var(--color-sugar) 0%, var(--color-bisque) 100%)',
            border: '1px solid var(--color-bisque)',
            marginBottom: 'var(--spacing-md)'
        }}>
            <h4 style={{ 
                margin: 0, 
                fontSize: '0.85rem', 
                color: 'var(--color-espresso)', 
                fontFamily: 'var(--font-primary)',
                fontWeight: '600',
                textTransform: 'uppercase', 
                letterSpacing: '0.5px' 
            }}>
                Auditing Summary & Telemetry Analytics
            </h4>

            {/* Metrics Dashboard */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '12px'
            }}>
                {/* Total */}
                <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-bisque)' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-mocha)', fontWeight: '600' }}>Total Elements</span>
                    <div style={{ fontSize: '1.4rem', fontWeight: '500', color: 'var(--color-espresso)', fontFamily: 'var(--font-primary)', marginTop: '2px' }}>{total} Nodes</div>
                </div>

                {/* Accuracy */}
                <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-bisque)' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-mocha)', fontWeight: '600' }}>Integrity Score</span>
                    <div style={{ fontSize: '1.4rem', fontWeight: '500', color: successRate > 75 ? 'var(--accent-teal)' : '#dd6b20', fontFamily: 'var(--font-primary)', marginTop: '2px' }}>{successRate}%</div>
                </div>

                {/* Errors */}
                <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-bisque)' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-mocha)', fontWeight: '600' }}>Logged Errors</span>
                    <div style={{ fontSize: '1.4rem', fontWeight: '500', color: totalErrors > 0 ? '#e53e3e' : 'var(--color-espresso)', fontFamily: 'var(--font-primary)', marginTop: '2px' }}>{totalErrors} Anomalies</div>
                </div>
            </div>

            {/* Structured Completion Bar */}
            <div style={{ marginTop: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--color-mocha)', marginBottom: '6px', fontWeight: '600' }}>
                    <span>Allocation Integrity Pipeline</span>
                    <span>{valid} of {total} verified</span>
                </div>
                <div style={{
                    width: '100%',
                    height: '8px',
                    background: 'var(--color-bisque)',
                    borderRadius: '4px',
                    display: 'flex',
                    overflow: 'hidden'
                }}>
                    {valid > 0 && (
                        <div style={{
                            width: `${(valid / total) * 100}%`,
                            background: 'var(--accent-teal)',
                            height: '100%',
                            transition: 'width 0.3s ease'
                        }} />
                    )}
                    {invalid > 0 && (
                        <div style={{
                            width: `${(invalid / total) * 100}%`,
                            background: '#e53e3e',
                            height: '100%',
                            transition: 'width 0.3s ease'
                        }} />
                    )}
                    {unchecked > 0 && (
                        <div style={{
                            width: `${(unchecked / total) * 100}%`,
                            background: 'var(--color-wheat)',
                            height: '100%',
                            transition: 'width 0.3s ease'
                        }} />
                    )}
                </div>
                <div style={{ display: 'flex', gap: '12px', marginTop: '8px', fontSize: '0.7rem', color: 'var(--color-mocha)', flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-teal)', display: 'inline-block' }}></span>
                        Valid ({valid})
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#e53e3e', display: 'inline-block' }}></span>
                        Invalid ({invalid})
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-wheat)', display: 'inline-block' }}></span>
                        Unchecked ({unchecked})
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ValidationSummary;

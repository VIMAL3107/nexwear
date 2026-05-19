import React from 'react';

export const StatusBadge = ({ status }) => {
    const isValid = status === 'valid';
    const isInvalid = status === 'invalid';

    const styles = {
        padding: '6px 12px',
        borderRadius: '30px',
        fontSize: '0.75rem',
        fontWeight: '700',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        letterSpacing: '0.5px',
        textTransform: 'uppercase'
    };

    if (isValid) {
        return (
            <span style={{ 
                ...styles, 
                background: 'rgba(56, 178, 172, 0.08)', 
                color: '#234e52', 
                border: '1px solid rgba(56, 178, 172, 0.2)' 
            }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#319795', display: 'inline-block' }}></span>
                Valid
            </span>
        );
    }
    if (isInvalid) {
        return (
            <span style={{ 
                ...styles, 
                background: 'rgba(229, 62, 62, 0.08)', 
                color: '#742a2a', 
                border: '1px solid rgba(229, 62, 62, 0.2)' 
            }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#e53e3e', display: 'inline-block', boxShadow: '0 0 6px #e53e3e' }}></span>
                Error
            </span>
        );
    }
    return (
        <span style={{ 
            ...styles, 
            background: '#f7fafc', 
            color: '#4a5568', 
            border: '1px solid #e2e8f0' 
        }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a0aec0', display: 'inline-block' }}></span>
            Unchecked
        </span>
    );
};

export default StatusBadge;

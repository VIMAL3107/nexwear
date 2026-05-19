import React from 'react';

/**
 * Enterprise Form Input Field Component
 * Matches specification in enterprise_design_system.md
 */
export const FormInput = ({
  id,
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  errorText = null,
  helperText = null,
  isRequired = false,
  style = {}
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px', width: '100%', ...style }}>
      <label 
        htmlFor={id} 
        style={{ 
          fontSize: '0.875rem', 
          fontWeight: '600', 
          color: 'var(--color-espresso, #392E26)',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <span>{label} {isRequired && <span style={{ color: 'var(--color-error, #ef4444)' }}>*</span>}</span>
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={isRequired}
        aria-invalid={!!errorText}
        aria-describedby={errorText ? `${id}-error` : helperText ? `${id}-helper` : undefined}
        style={{
          width: '100%',
          padding: '10px 14px',
          backgroundColor: '#ffffff',
          border: `1px solid ${errorText ? 'var(--color-error, #ef4444)' : 'var(--color-bisque, #E2D9CD)'}`,
          borderRadius: 'var(--radius-sm, 4px)',
          fontSize: '0.95rem',
          color: 'var(--color-espresso, #392E26)',
          outline: 'none',
          transition: 'all 0.2s ease',
          boxShadow: errorText ? '0 0 0 3px rgba(239, 68, 68, 0.08)' : 'none'
        }}
        onFocus={(e) => {
          if (!errorText) {
            e.target.style.borderColor = 'var(--color-wheat, #B6A593)';
            e.target.style.boxShadow = '0 0 0 3px rgba(182, 165, 147, 0.08)';
          }
        }}
        onBlur={(e) => {
          if (!errorText) {
            e.target.style.borderColor = 'var(--color-bisque, #E2D9CD)';
            e.target.style.boxShadow = 'none';
          }
        }}
      />
      {errorText ? (
        <span 
          id={`${id}-error`} 
          style={{ fontSize: '0.8rem', color: 'var(--color-error, #ef4444)', fontWeight: '600', marginTop: '2px' }}
        >
          ⚠️ {errorText}
        </span>
      ) : helperText ? (
        <span 
          id={`${id}-helper`} 
          style={{ fontSize: '0.75rem', color: 'var(--color-mocha, #6B5B4D)', marginTop: '2px' }}
        >
          {helperText}
        </span>
      ) : null}
    </div>
  );
};

export default FormInput;

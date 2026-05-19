import React from 'react';

/**
 * Enterprise Unified Design System Button Component
 * Matches specification in enterprise_design_system.md
 */
export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  isDisabled = false, 
  onClick, 
  icon = null,
  ariaLabel = undefined,
  style = {}
}) => {
  const sizeStyles = {
    sm: { padding: '6px 12px', fontSize: '0.8rem' },
    md: { padding: '10px 18px', fontSize: '0.9rem' },
    lg: { padding: '14px 24px', fontSize: '1rem' }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return {
          background: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-border-standard)',
          color: 'var(--color-text-primary)'
        };
      case 'danger':
        return {
          background: 'var(--color-error, #ef4444)',
          color: '#ffffff',
          border: '1px solid transparent'
        };
      case 'ghost':
        return {
          background: 'transparent',
          border: '1px solid transparent',
          color: 'var(--color-text-primary)'
        };
      case 'accent':
        return {
          background: 'var(--color-pistachio, #B5BDAC)',
          color: 'var(--color-espresso, #392E26)',
          border: '1px solid transparent'
        };
      case 'primary':
      default:
        return {
          background: 'var(--color-espresso, #392E26)',
          color: 'var(--color-sugar, #FCF8F0)',
          border: '1px solid transparent'
        };
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      aria-label={ariaLabel}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--spacing-xs, 8px)',
        fontWeight: '600',
        borderRadius: 'var(--radius-sm, 4px)',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.6 : 1,
        transition: 'all 0.3s ease',
        ...sizeStyles[size],
        ...getVariantStyles(),
        ...style
      }}
    >
      {icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;

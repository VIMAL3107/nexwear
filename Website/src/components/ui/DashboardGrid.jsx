import React from 'react';

/**
 * Custom Analytical Dashboard Grid Wrapper
 * Matches specification in enterprise_design_system.md
 */
export const DashboardGrid = ({ children, style = {} }) => {
  return (
    <div 
      className="grid-3" 
      style={{
        gap: 'var(--spacing-md, 2rem)',
        width: '100%',
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default DashboardGrid;

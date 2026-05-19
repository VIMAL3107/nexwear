import React from 'react';
import { useSubmodels } from '../hooks/useSubmodels';
import ValidationSummary from '../components/ModelManager/ValidationSummary';
import SubmodelList from '../components/ModelManager/SubmodelList';

export const ModelManagerPage = () => {
    // Parent models list context
    const parentModels = [
        { id: 'MODEL-NXW-ACTIVE-77', name: 'Fulfillment Node Alpha (Graphic Tees Division)' },
        { id: 'MODEL-NXW-ACTIVE-88', name: 'Fulfillment Node Beta (Premium Knitwear Division)' },
        { id: 'MODEL-NXW-ACTIVE-99', name: 'Fulfillment Node Gamma (Outerwear & Denims Division)' }
    ];

    const [selectedModelId, setSelectedModelId] = React.useState('MODEL-NXW-ACTIVE-77');
    const activeModel = parentModels.find(m => m.id === selectedModelId) || parentModels[0];

    const { 
        submodels, 
        loading, 
        error, 
        validatingIds, 
        runValidation, 
        runBulkValidation, 
        refetch 
    } = useSubmodels(selectedModelId);

    return (
        <div className="container" style={{
            paddingTop: '120px', 
            paddingBottom: 'var(--spacing-lg)',
            fontFamily: 'var(--font-secondary)'
        }}>
            {/* Header Control Panel */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid var(--color-bisque)',
                paddingBottom: 'var(--spacing-sm)',
                marginBottom: 'var(--spacing-md)',
                flexWrap: 'wrap',
                gap: '16px'
            }}>
                <div style={{ flex: '1 1 320px' }}>
                    <h2 style={{ 
                        margin: 0, 
                        fontSize: '2rem', 
                        fontWeight: '600', 
                        color: 'var(--color-espresso)',
                        fontFamily: 'var(--font-primary)'
                    }}>
                        Submodel Auditor & Integrity Manager
                    </h2>
                    
                    {/* Dynamic Responsive Parent Model Selector Dropdown */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                        <span style={{ fontSize: '0.85rem', color: 'var(--color-mocha)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            Parent Model:
                        </span>
                        <select
                            value={selectedModelId}
                            onChange={(e) => setSelectedModelId(e.target.value)}
                            style={{
                                padding: '8px 12px',
                                background: '#ffffff',
                                border: '1px solid var(--color-bisque)',
                                borderRadius: 'var(--radius-sm)',
                                color: 'var(--color-espresso)',
                                fontSize: '0.875rem',
                                fontWeight: '600',
                                outline: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                maxWidth: '100%'
                            }}
                        >
                            {parentModels.map(model => (
                                <option key={model.id} value={model.id}>
                                    {model.name} ({model.id})
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                    <button 
                        onClick={refetch}
                        disabled={loading}
                        style={{
                            padding: '10px 16px',
                            background: '#ffffff',
                            color: 'var(--color-espresso)',
                            border: '1px solid var(--color-bisque)',
                            borderRadius: 'var(--radius-sm)',
                            cursor: 'pointer',
                            fontWeight: '600',
                            fontSize: '0.85rem',
                            transition: 'var(--transition-spring)'
                        }}
                    >
                        🔄 Refresh Logs
                    </button>
                    <button 
                        onClick={runBulkValidation}
                        disabled={loading || submodels.length === 0}
                        style={{
                            padding: '10px 20px',
                            background: 'var(--color-espresso)',
                            color: 'var(--color-sugar)',
                            border: 'none',
                            borderRadius: 'var(--radius-sm)',
                            cursor: 'pointer',
                            fontWeight: '600',
                            fontSize: '0.85rem',
                            boxShadow: 'var(--shadow-sm)',
                            transition: 'var(--transition-spring)'
                        }}
                    >
                        ⚡ Audit All Submodels
                    </button>
                </div>
            </div>

            {/* Error Logger */}
            {error && (
                <div style={{
                    padding: '14px 20px',
                    background: 'rgba(229, 62, 62, 0.05)',
                    border: '1px solid rgba(229, 62, 62, 0.2)',
                    borderRadius: 'var(--radius-sm)',
                    color: '#c53030',
                    marginBottom: 'var(--spacing-sm)',
                    fontSize: '0.9rem'
                }}>
                    <strong>Integrity Fetch Error:</strong> {error}
                </div>
            )}

            {/* Industry-Grade Flexible Content Stack */}
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 'var(--spacing-md)',
                width: '100%',
                overflow: 'visible'
            }}>
                {/* Visual Analytics Telemetry Card */}
                {submodels.length > 0 && (
                    <ValidationSummary submodels={submodels} />
                )}

                {/* Submodel Audit Data List */}
                {loading && submodels.length === 0 ? (
                    <div style={{ 
                        textAlign: 'center', 
                        padding: '60px', 
                        background: '#ffffff',
                        border: '1px solid var(--color-bisque)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--color-mocha)' 
                    }}>
                        <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '12px', animation: 'spin 1.2s linear infinite' }}>⏳</span>
                        Running validation scanner...
                    </div>
                ) : (
                    <div className="premium-card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-sm)' }}>
                            <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '500', color: 'var(--color-espresso)', fontFamily: 'var(--font-primary)' }}>
                                Child Component Database Schemas
                            </h3>
                            <span style={{ fontSize: '0.8rem', color: 'var(--color-mocha)' }}>
                                showing {submodels.length} of {submodels.length} items
                            </span>
                        </div>
                        <SubmodelList 
                            submodels={submodels} 
                            validatingIds={validatingIds} 
                            runValidation={runValidation} 
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ModelManagerPage;

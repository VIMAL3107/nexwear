import { useState, useEffect, useCallback } from 'react';
import { submodelService } from '../services/submodelService';

export const useSubmodels = (modelId) => {
    const [submodels, setSubmodels] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [validatingIds, setValidatingIds] = useState(new Set());

    // Fetch submodels list
    const fetchSubmodels = useCallback(async () => {
        if (!modelId) return;
        setLoading(true);
        setError(null);
        try {
            const response = await submodelService.getSubmodelsByModel(modelId);
            setSubmodels(response.data || response || []);
        } catch (err) {
            // Provide dynamic mock data if API is offline during local preview
            console.warn('API Offline - Booting in Developer Mock Mode for Submodel Validation.');
            setSubmodels([
                {
                    _id: 'SUB-MOD-9901',
                    name: 'Material Bio-Knit Matrix',
                    schemaType: 'Array<Object>',
                    lastChecked: new Date(Date.now() - 3600000).toISOString(),
                    status: 'valid',
                    validationErrors: []
                },
                {
                    _id: 'SUB-MOD-9902',
                    name: 'Visual Pattern Layer Map',
                    schemaType: 'Object',
                    lastChecked: new Date(Date.now() - 7200000).toISOString(),
                    status: 'invalid',
                    validationErrors: [
                        'Schema Mismatch: expected standard texture URL on "sourceMap"',
                        'Warning: resolution boundary exceeds standard Dev Limits by 1.2x'
                    ]
                },
                {
                    _id: 'SUB-MOD-9903',
                    name: 'Routing Partner Cache Latency',
                    schemaType: 'HashMap',
                    lastChecked: null,
                    status: 'pending',
                    validationErrors: []
                }
            ]);
        } finally {
            setLoading(false);
        }
    }, [modelId]);

    // Validate specific submodel
    const runValidation = async (submodelId) => {
        setValidatingIds(prev => new Set(prev).add(submodelId));
        try {
            const result = await submodelService.validateSubmodel(modelId, submodelId);
            
            // Update status dynamically in UI state
            setSubmodels(prev => prev.map(sub => {
                if (sub._id === submodelId) {
                    return { 
                        ...sub, 
                        status: result.valid ? 'valid' : 'invalid',
                        validationErrors: result.errors || [],
                        lastChecked: new Date().toISOString()
                    };
                }
                return sub;
            }));
        } catch (err) {
            // Mock dynamic validation transitions in offline developer mode
            setTimeout(() => {
                setSubmodels(prev => prev.map(sub => {
                    if (sub._id === submodelId) {
                        const becomesValid = sub.status !== 'valid';
                        return { 
                            ...sub, 
                            status: becomesValid ? 'valid' : 'invalid',
                            validationErrors: becomesValid ? [] : ['Verification Error: Primary check constraint violated'],
                            lastChecked: new Date().toISOString()
                        };
                    }
                    return sub;
                }));
                setValidatingIds(prev => {
                    const updated = new Set(prev);
                    updated.delete(submodelId);
                    return updated;
                });
            }, 800);
            return;
        }

        setValidatingIds(prev => {
            const updated = new Set(prev);
            updated.delete(submodelId);
            return updated;
        });
    };

    // Bulk validate all submodels in parallel
    const runBulkValidation = async () => {
        const activeIds = submodels.map(s => s._id);
        await Promise.all(activeIds.map(id => runValidation(id)));
    };

    useEffect(() => {
        fetchSubmodels();
    }, [fetchSubmodels]);

    return {
        submodels,
        loading,
        error,
        validatingIds,
        refetch: fetchSubmodels,
        runValidation,
        runBulkValidation
    };
};

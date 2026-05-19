/**
 * ══════════════════════════════════════════════════════
 * SERVICES: Submodel API Integration Layer
 * ══════════════════════════════════════════════════════
 */
import { apiClient } from './apiClient';

export const submodelService = {
    /**
     * Fetch all submodels registered under a specific parent model
     * @param {string} modelId - Parent model identifier
     */
    async getSubmodelsByModel(modelId) {
        return apiClient(`/models/${modelId}/submodels`);
    },

    /**
     * Validate a specific submodel's data structure, schema compliance, and integrity
     * @param {string} modelId - Parent model identifier
     * @param {string} submodelId - Submodel identifier to audit
     */
    async validateSubmodel(modelId, submodelId) {
        return apiClient(`/models/${modelId}/submodels/${submodelId}/validate`, {
            method: 'POST'
        });
    }
};

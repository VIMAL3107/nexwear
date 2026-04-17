/**
 * API Client configuration
 * Currently using native fetch API, could be swapped with Axios
 */
import { API_BASE_URL } from '../config/env';

export const apiClient = async (endpoint, options = {}) => {
    const defaultHeaders = {
        'Content-Type': 'application/json',
    };

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: { ...defaultHeaders, ...options.headers },
    });

    if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
    }

    return response.json();
};

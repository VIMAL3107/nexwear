/**
 * formatCurrency.js
 * Utility to format numbers into Indian Rupees (INR) or standard currency strings.
 */
export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
    }).format(amount);
};

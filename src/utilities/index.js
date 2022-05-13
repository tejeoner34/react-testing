
/**
 * @function formatCurrency
 * Format number as currency in US Dollars
 * @param {number} amount 
 * @returns {string}
 */

export function formatCurrency(amount){
    return new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    }).format(amount);
}
/**
 * ══════════════════════════════════════════════════════
 * CUSTOMERS MODULE
 * ══════════════════════════════════════════════════════
 */

export const Customers = {
    data: [
        { name: 'Arjun Kumar', city: 'Chennai', orders: 12, spent: '₹14,200', segment: 'College', status: 'Active' },
        { name: 'Priya Sharma', city: 'Mumbai', orders: 4, spent: '₹5,600', segment: 'Corporate', status: 'Active' },
        { name: 'Sameer V.', city: 'Delhi', orders: 1, spent: '₹480', segment: 'Gen Z', status: 'New' }
    ],

    init() {
        console.log('Customers Initialized');
        this.renderTable();
    },

    renderTable() {
        const tbody = document.getElementById('customers-tbody');
        if (!tbody) return;

        tbody.innerHTML = this.data.map(c => `
            <tr>
                <td class="primary">${c.name}</td>
                <td>${c.city}</td>
                <td>${c.orders}</td>
                <td>${c.spent}</td>
                <td><span class="pill pill-teal">${c.segment}</span></td>
                <td>10 Apr 2026</td>
                <td><span class="pill pill-teal">${c.status}</span></td>
                <td><button class="btn">History</button></td>
            </tr>
        `).join('');
    }
};

Customers.init();

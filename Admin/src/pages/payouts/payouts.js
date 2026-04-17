/**
 * ══════════════════════════════════════════════════════
 * PAYOUTS MODULE
 * ══════════════════════════════════════════════════════
 */

export const Payouts = {
    upcoming: [
        { partner: 'PrintX — Chennai', orders: 42, costs: '₹28,400', comm: '₹8,200', amount: '₹20,200', status: 'Scheduled' },
        { partner: 'ColorPro — Bng', orders: 31, costs: '₹18,200', comm: '₹4,100', amount: '₹14,100', status: 'Scheduled' },
        { partner: 'InkMate — Mum', orders: 12, costs: '₹12,400', comm: '₹3,200', amount: '₹9,200', status: 'Held' }
    ],

    init() {
        console.log('Payouts Initialized');
        this.renderTable();
    },

    renderTable() {
        const tbody = document.getElementById('payouts-tbody');
        if (!tbody) return;

        tbody.innerHTML = this.upcoming.map(p => `
            <tr>
                <td class="primary">${p.partner}</td>
                <td>${p.orders}</td>
                <td>${p.costs}</td>
                <td>${p.comm}</td>
                <td>${p.amount}</td>
                <td><span class="pill ${p.status === 'Held' ? 'pill-red' : 'pill-teal'}">${p.status}</span></td>
                <td><button class="btn">Details</button></td>
            </tr>
        `).join('');
    }
};

Payouts.init();

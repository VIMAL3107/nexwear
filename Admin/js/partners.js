/**
 * ══════════════════════════════════════════════════════
 * PARTNERS MODULE
 * ══════════════════════════════════════════════════════
 */

export const Partners = {
    data: [
        { name: 'PrintX', city: 'Chennai', orders: 1240, score: 94, payout: '₹20,200', sla: 'On track', joined: 'Jan 2026' },
        { name: 'ColorPro', city: 'Bangalore', orders: 860, score: 88, payout: '₹14,100', sla: 'On track', joined: 'Feb 2026' },
        { name: 'InkMate', city: 'Mumbai', orders: 420, score: 72, payout: '₹9,200', sla: 'Delayed', joined: 'Mar 2026' },
        { name: 'TeeLink', city: 'Hyderabad', orders: 280, score: 91, payout: '₹4,300', sla: 'On track', joined: 'Apr 2026' }
    ],

    init() {
        console.log('Partners Initialized');
        this.renderTable();
    },

    renderTable() {
        const tbody = document.getElementById('partners-tbody');
        if (!tbody) return;

        tbody.innerHTML = this.data.map(p => `
            <tr>
                <td class="primary">${p.name}</td>
                <td>${p.city}</td>
                <td>${p.orders}</td>
                <td>
                    <div class="score-wrap">
                        <div class="score-track"><div class="score-fill" style="width:${p.score}%; background:var(--teal)"></div></div>
                        <span style="font-size:14px; font-weight:700">${p.score}</span>
                    </div>
                </td>
                <td>${p.payout}</td>
                <td><span class="pill ${p.sla === 'Delayed' ? 'pill-red' : 'pill-teal'}">${p.sla}</span></td>
                <td>${p.joined}</td>
                <td><button class="btn">Manage</button></td>
            </tr>
        `).join('');
    }
};

Partners.init();

/**
 * ══════════════════════════════════════════════════════
 * MARKETING MODULE
 * ══════════════════════════════════════════════════════
 */

export const Marketing = {
    queue: [
        { time: 'Today 4:00pm', platform: 'Instagram', preview: 'Chennai Pride collection...', design: 'CP-2026', segment: 'Regional', status: 'Pending' },
        { time: 'Tomorrow 10am', platform: 'Pinterest', preview: 'Minimal aesthetics for...', design: 'MIN-08', segment: 'Aesthetic', status: 'Approved' },
        { time: 'Oct 14 11:00am', platform: 'WhatsApp', preview: 'New Fan group launch...', design: 'FAN-X', segment: 'Fans', status: 'Draft' }
    ],

    init() {
        console.log('Marketing Initialized');
        this.renderQueue();
    },

    renderQueue() {
        const tbody = document.getElementById('marketing-tbody');
        if (!tbody) return;

        tbody.innerHTML = this.queue.map(q => `
            <tr>
                <td>${q.time}</td>
                <td class="primary">${q.platform}</td>
                <td style="font-size:14px;color:var(--text-dim)">${q.preview}</td>
                <td>${q.design}</td>
                <td><span class="pill pill-teal">${q.segment}</span></td>
                <td><span class="pill ${q.status === 'Pending' ? 'pill-amber' : 'pill-teal'}">${q.status}</span></td>
                <td><button class="btn btn-primary">Approve</button></td>
            </tr>
        `).join('');
    }
};

Marketing.init();

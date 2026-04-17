/**
 * ══════════════════════════════════════════════════════
 * AGENT MODULE
 * ══════════════════════════════════════════════════════
 */

export const Agent = {
    permissions: [
        { name: 'Order Agent', actions: 'Assign partners, Verify address', trigger: 'High value >₹5,000', status: 'Active' },
        { name: 'Refund Agent', actions: 'Process <₹500, Chat support', trigger: 'Quality complaints', status: 'Active' },
        { name: 'Design Agent', actions: 'Upscale AI, Filter content', trigger: 'Copyright match', status: 'Active' }
    ],

    init() {
        console.log('Agent Initialized');
        this.renderPermissions();
    },

    renderPermissions() {
        const tbody = document.getElementById('agents-tbody');
        if (!tbody) return;

        tbody.innerHTML = this.permissions.map(p => `
            <tr>
                <td class="primary">${p.name}</td>
                <td style="font-size:14px">${p.actions}</td>
                <td style="font-size:14px">${p.trigger}</td>
                <td><span class="pill pill-teal">${p.status}</span></td>
                <td><button class="toggle-switch on"></button></td>
            </tr>
        `).join('');
    }
};

Agent.init();

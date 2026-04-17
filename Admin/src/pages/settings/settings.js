/**
 * ══════════════════════════════════════════════════════
 * SETTINGS MODULE
 * ══════════════════════════════════════════════════════
 */

export const Settings = {
    init() {
        console.log('Settings Initialized');
        this.initToggles();
        this.renderIntegrations();
    },

    initToggles() {
        document.querySelectorAll('.toggle-switch').forEach(sw => {
            sw.addEventListener('click', () => {
                sw.classList.toggle('on');
                const state = sw.classList.contains('on') ? 'enabled' : 'disabled';
                showToast(`Setting ${state}`, 'info');
            });
        });
    },

    renderIntegrations() {
        const tbody = document.getElementById('integrations-tbody');
        if (!tbody) return;

        const apps = [
            { name: 'WhatsApp API', status: 'Connected' },
            { name: 'Razorpay', status: 'Operational' },
            { name: 'Instagram Graph', status: 'Connected' },
            { name: 'ShipRocket', status: 'Connected' }
        ];

        tbody.innerHTML = apps.map(a => `
            <tr>
                <td class="primary">${a.name}</td>
                <td><span class="pill pill-teal">${a.status}</span></td>
            </tr>
        `).join('');
    }
};

Settings.init();

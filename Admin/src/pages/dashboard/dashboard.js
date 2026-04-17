/**
 * ══════════════════════════════════════════════════════
 * DASHBOARD MODULE
 * ══════════════════════════════════════════════════════
 */

export const Dashboard = {
    init() {
        console.log('Dashboard Initialized');
        this.renderCharts();
        this.renderEscalations();
        this.renderTopDesigns();
        this.initAIHandlers();
    },

    renderCharts() {
        const container = document.getElementById('rev-chart-bars');
        if (!container) return;

        const data = [40, 65, 30, 85, 45, 90, 75];
        container.innerHTML = data.map(h => `
            <div class="chart-bar" style="height: ${h}%"></div>
        `).join('');
    },

    renderEscalations() {
        const container = document.getElementById('alert-items-container');
        if (!container) return;

        const alerts = [
            { id: '#4818', title: 'Duplicate order', icon: '🚨', bg: 'var(--red-bg)', sub: 'Same customer' },
            { id: '#4817', title: 'SLA breach', icon: '⚠️', bg: 'var(--amber-bg)', sub: 'Mumbai partner' }
        ];

        container.innerHTML = alerts.map(a => `
            <div class="alert-item">
                <div class="alert-icon" style="background:${a.bg}">${a.icon}</div>
                <div class="alert-body">
                    <div class="alert-title">${a.id} — ${a.title}</div>
                    <div class="alert-sub">${a.sub}</div>
                </div>
                <button class="btn btn-primary">Review</button>
            </div>
        `).join('');
    },

    renderTopDesigns() {
        const container = document.getElementById('top-designs-grid');
        if (!container) return;

        const top = [
            { name: 'Chennai Pride', count: 14, art: '👕', bg: '#1e1b3a' },
            { name: 'Minimal Logo', count: 11, art: '👕', bg: '#0d2a1f' }
        ];

        container.innerHTML = top.map(d => `
            <div class="design-card">
                <div class="design-art" style="background:${d.bg}">${d.art}</div>
                <div class="design-name">${d.name}</div>
                <div class="design-cnt">${d.count} orders</div>
            </div>
        `).join('');
    },

    initAIHandlers() {
        const input = document.getElementById('dash-ai-input');
        if (!input) return;

        // Quick button handlers
        document.querySelectorAll('.ai-quick-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                input.value = btn.dataset.q;
            });
        });
    }
};

// Auto-init for now, could be managed by app.js
Dashboard.init();

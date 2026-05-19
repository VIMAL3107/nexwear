/**
 * ══════════════════════════════════════════════════════
 * DASHBOARD MODULE
 * ══════════════════════════════════════════════════════
 */

export const Dashboard = {
    alerts: [
        { id: '#4818', title: 'Duplicate order', type: 'duplicate', sub: 'Same customer' },
        { id: '#4817', title: 'SLA breach', type: 'sla', sub: 'Mumbai partner' }
    ],

    topDesigns: [
        { name: 'Chennai Pride', count: 14, color: '#1e293b' },
        { name: 'Minimal Logo', count: 11, color: '#0d2a1f' }
    ],

    liveFeed: [
        { id: '#NXW-1045', customer: 'Rahul K.', action: 'placed a new order!', time: '2 mins ago', amount: '₹1,260', status: 'success' },
        { id: '#NXW-1044', customer: 'Bangalore Prints', action: 'payout processed successfully.', time: '10 mins ago', amount: '₹14,100', status: 'payout' },
        { id: '#NXW-1043', customer: 'PrintX Chennai', action: 'completed printing for order #4814.', time: '24 mins ago', amount: '', status: 'success' }
    ],

    inventoryAlerts: [
        { item: 'Noir Essence Tee (L) - Black', stock: 3, status: 'Low Stock', color: 'red' },
        { item: 'Urban Core Oversized (M) - Olive', stock: 0, status: 'Out of Stock', color: 'red' },
        { item: 'Sustainable Bamboo (S) - Off-White', stock: 5, status: 'Low Stock', color: 'amber' }
    ],

    notifications: [
        { msg: '🔔 New partner "Delhi Custom Prints" has submitted verification documents.', time: '1 hour ago', action: 'Verify Now', page: 'onboarding' },
        { msg: '🔔 Unusual 24h refund spike alert triggered by operational analytics agent.', time: '2 hours ago', action: 'Investigate', page: 'anomaly' },
        { msg: '🔔 High-similarity flag on design "Vintage College Badge" by user Sneha K.', time: 'Yesterday', action: 'Review Scan', page: 'design-approval' }
    ],

    anomalies: [
        { title: 'Unusual Refund Volume Spike', description: 'Refund count exceeds standard dev limits by 3.4x in Mumbai regional node.', risk: 'Medium Risk', date: 'Today, 08:30 AM' },
        { title: 'Duplicate Gateway Double Debit Capture', description: 'Same Razorpay reference ID routed twice for client Arjun Kumar (#ORD-4816).', risk: 'High Risk', date: 'Today, 09:14 AM' }
    ],

    init() {
        console.log('Dashboard Initialized');
        this.renderCharts();
        this.renderEscalations();
        this.renderTopDesigns();
        this.initAIHandlers();
        window._Dashboard = this;
    },

    onPageLoad(pageId) {
        console.log('Dashboard page load delegate called for:', pageId);
        switch (pageId) {
            case 'dashboard':
                this.renderCharts();
                this.renderEscalations();
                this.renderTopDesigns();
                break;
            case 'live-feed':
                this.renderLiveFeed();
                break;
            case 'inventory-alerts':
                this.renderInventoryAlerts();
                break;
            case 'notif-center':
                this.renderNotificationCenter();
                break;
            case 'anomaly':
                this.renderAnomalies();
                break;
        }
    },

    getTshirtSvg(color) {
        return `
        <svg width="34" height="34" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="color: ${color}; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.06));">
            <path d="M30 20 L40 12 C45 15 55 15 60 12 L70 20 L88 28 L78 40 L70 34 L70 85 C70 87.8 67.8 90 65 90 L35 90 C32.2 90 30 87.8 30 85 L30 34 L22 40 L12 28 Z" fill="currentColor" />
            <path d="M40 12 C45 15 55 15 60 12 C60 18 40 18 40 12 Z" fill="#000000" fill-opacity="0.12" />
        </svg>
        `;
    },

    getAlertIconSvg(type) {
        if (type === 'duplicate') {
            return `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                <circle cx="12" cy="12" r="3" fill="#ef4444" fill-opacity="0.2" stroke="none" />
            </svg>
            `;
        }
        return `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" fill="#F97316" fill-opacity="0.15" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
        `;
    },

    renderCharts() {
        const container = document.getElementById('rev-chart-bars');
        if (!container) return;

        const data = [
            { day: 'Apr 4', height: 40 },
            { day: 'Apr 5', height: 65 },
            { day: 'Apr 6', height: 30 },
            { day: 'Apr 7', height: 85 },
            { day: 'Apr 8', height: 45 },
            { day: 'Apr 9', height: 90 },
            { day: 'Apr 10', height: 75 }
        ];

        container.innerHTML = data.map(item => `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 100%; flex: 1; position: relative;">
              <!-- Solid Green Bar matching palette #22C55E exactly -->
              <div style="width: 60%; max-width: 28px; height: ${item.height}%; background: #22C55E; border-radius: 6px 6px 0 0; transition: height 0.6s ease; z-index: 2;"></div>
              <!-- X-Axis Label -->
              <span style="font-size: 10px; font-weight: 600; color: #6B7280; position: absolute; bottom: -18px; white-space: nowrap;">${item.day}</span>
            </div>
        `).join('');
    },

    renderEscalations() {
        const container = document.getElementById('alert-items-container');
        if (!container) return;

        container.innerHTML = this.alerts.map(a => `
            <div class="alert-item" style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; margin-bottom: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.01);">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <!-- Custom SVG warning icon wrapper -->
                    <div style="width: 30px; height: 30px; border-radius: 8px; background: ${a.type === 'duplicate' ? '#fee2e2' : '#ffedd5'}; display: flex; align-items: center; justify-content: center;">
                        ${this.getAlertIconSvg(a.type)}
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 1px;">
                        <span style="font-family:'Outfit', sans-serif; font-size: 12px; font-weight: 700; color: #1F2937;">${a.id} — ${a.title}</span>
                        <span style="font-size: 10px; font-weight: 500; color: #6B7280;">${a.sub}</span>
                    </div>
                </div>
                
                <!-- Mint Green / Soft Green review button exactly like mockup -->
                <button style="border: none; outline: none; background: #e6fbf3; color: #059669; font-family: 'Outfit', sans-serif; font-size: 10px; font-weight: 700; padding: 4px 10px; border-radius: 6px; cursor: pointer; transition: all 0.2s;" onclick="showToast('Loading escalation panel for ${a.id}...', 'info')">Review</button>
            </div>
        `).join('');
    },

    renderTopDesigns() {
        const container = document.getElementById('top-designs-grid');
        if (!container) return;

        container.innerHTML = this.topDesigns.map(d => `
            <div class="design-card" style="cursor:pointer; display: flex; flex-direction: column; align-items: center; padding: 6px 10px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; text-align: center; gap: 4px; flex: 1; transition: all 0.2s;" onclick="showToast('Total orders for ${d.name}: ${d.count}', 'info')">
                <div class="design-art" style="width: 100%; height: 54px; background: #f8fafc; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: ${d.color};">
                    ${this.getTshirtSvg(d.color)}
                </div>
                <div style="display: flex; flex-direction: column; gap: 1px; align-items: center;">
                    <div class="design-name" style="font-family:'Outfit', sans-serif; font-size: 11px; font-weight: 700; color: #1F2937;">${d.name}</div>
                    <div class="design-cnt" style="font-size: 10px; font-weight: 600; color: #22C55E;">${d.count} orders</div>
                </div>
            </div>
        `).join('');
    },

    initAIHandlers() {
        const input = document.getElementById('dash-ai-input');
        if (!input) return;

        document.querySelectorAll('.ai-quick-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                input.value = btn.dataset.q;
                window.askAgent?.('dash-ai-input');
            });
        });
    },

    renderLiveFeed() {
        const page = document.getElementById('page-live-feed');
        if (!page) return;

        const card = page.querySelector('.card');
        if (!card) return;

        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:15px;">
                <h3 style="margin:0;">Real-Time Operational Activity Stream</h3>
                <span class="pill pill-teal">Live telemetry</span>
            </div>
            <div style="display:flex; flex-direction:column; gap:12px;">
                ${this.liveFeed.map(item => `
                    <div class="partner-row" style="display:flex; justify-content:space-between; align-items:center; padding:12px 15px; background:#f9f9f9; border-radius:6px; border-left:4px solid ${item.status === 'payout' ? 'var(--purple)' : 'var(--teal)'};">
                        <div>
                            <strong>${item.id}</strong> — <span style="font-weight:600;">${item.customer}</span> ${item.action}
                            <div style="font-size:11px; color:#777; margin-top:2px;">${item.time}</div>
                        </div>
                        ${item.amount ? `<span class="pill" style="font-family:monospace; font-weight:bold; background:rgba(45,203,142,0.1); color:var(--teal);">${item.amount}</span>` : ''}
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderInventoryAlerts() {
        const page = document.getElementById('page-inventory-alerts');
        if (!page) return;

        const card = page.querySelector('.card');
        if (!card) return;

        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:15px;">
                <h3 style="margin:0;">Low Stock & Out-of-Stock Triggers</h3>
                <button class="btn btn-primary btn-sm" onclick="showToast('Restock purchase orders triggered automatically!', 'success')">Restock All</button>
            </div>
            <div style="display:flex; flex-direction:column; gap:12px;">
                ${this.inventoryAlerts.map(alert => `
                    <div style="padding:15px; border:1px solid #eee; border-radius:8px; background:#fff; display:flex; justify-content:space-between; align-items:center; box-shadow:0 1px 3px rgba(0,0,0,0.02);">
                        <div>
                            <strong style="font-size:14px; color:#333;">${alert.item}</strong>
                            <div style="font-size:11px; color:#666; margin-top:3px;">Stock Level: <strong style="color:${alert.color === 'red' ? 'red' : 'orange'};">${alert.stock} units</strong></div>
                        </div>
                        <span class="pill ${alert.color === 'red' ? 'pill-red' : 'pill-amber'}" style="font-size:11px; font-weight:bold; padding:4px 10px;">${alert.status}</span>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderNotificationCenter() {
        const page = document.getElementById('page-notif-center');
        if (!page) return;

        const card = page.querySelector('.card');
        if (!card) return;

        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:15px;">
                <h3 style="margin:0;">System Notifications & Tasks</h3>
                <button class="btn btn-sm" onclick="showToast('All notifications archived.', 'info')">Mark All Read</button>
            </div>
            <div style="display:flex; flex-direction:column; gap:10px;">
                ${this.notifications.map(n => `
                    <div style="padding:15px; border:1px solid #eee; border-radius:6px; background:#f9f9f9; display:flex; justify-content:space-between; align-items:center;">
                        <span style="font-size:13px; color:#333;">${n.msg}</span>
                        <div style="display:flex; gap:8px; align-items:center;">
                            <span style="font-size:10px; color:#777; margin-right:5px;">${n.time}</span>
                            <button class="btn btn-primary btn-sm" onclick="window.location.hash='#page-${n.page}'; showToast('Routing to dashboard module...', 'info');">${n.action}</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderAnomalies() {
        const page = document.getElementById('page-anomaly');
        if (!page) return;

        const card = page.querySelector('.card');
        if (!card) return;

        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:15px;">
                <h3 style="margin:0;">AI Anomaly and Security Auditor</h3>
                <span class="pill pill-red">Real-time risk scans</span>
            </div>
            <div style="display:flex; flex-direction:column; gap:12px;">
                ${this.anomalies.map(a => `
                    <div style="padding:15px; border:1px solid #eee; border-radius:8px; background:#fff; border-left:4px solid ${a.risk === 'High Risk' ? 'red' : 'orange'}; box-shadow:0 1px 3px rgba(0,0,0,0.02);">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                            <strong style="font-size:14px; color:#333;">${a.title}</strong>
                            <span class="pill ${a.risk === 'High Risk' ? 'pill-red' : 'pill-amber'}" style="font-size:10px; font-weight:bold; padding:2px 8px;">${a.risk}</span>
                        </div>
                        <p style="margin:0; font-size:13px; color:#666; line-height:1.4;">${a.description}</p>
                        <div style="font-size:10px; color:#777; margin-top:8px; text-align:right;">Detected: ${a.date}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }
};

Dashboard.init();

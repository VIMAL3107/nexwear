/**
 * ══════════════════════════════════════════════════════
 * MARKETING MODULE
 * ══════════════════════════════════════════════════════
 */

export const Marketing = {
    data: [
        { time: 'Apr 12, 10:00 AM', platform: 'Instagram', caption: 'Step into sustainable comfort with Bamboo Tees! 🎋', design: 'Minimal Zen', segment: 'College', status: 'Pending Approval' },
        { time: 'Apr 13, 04:00 PM', platform: 'Instagram', caption: 'Unleash your pride. Chennai Special Tiger Drop! 🐅', design: 'Chennai Pride', segment: 'Regional', status: 'Scheduled' },
        { time: 'Apr 14, 11:00 AM', platform: 'Twitter/X', caption: 'Engineered for developers. Dark Mode Essential Tees.', design: 'Synthwave Sunset', segment: 'Corporate', status: 'Scheduled' }
    ],

    campaigns: [
        { name: 'College Fest Drop 2026', channel: 'Email Newsletter', sent: '12,450', openRate: '34.2%', clickRate: '12.4%', conversions: '412 sales' },
        { name: 'Tech Minimalist Launch', channel: 'SMS Blast', sent: '4,100', openRate: '98.0%', clickRate: '18.1%', conversions: '180 sales' }
    ],

    coupons: [
        { code: 'NEXSTART20', type: 'Percentage (20%)', limit: '1000 uses', expiry: 'May 30, 2026', status: 'Active' },
        { code: 'FESTYOUTH', type: 'Flat ₹500 Off', limit: '500 uses', expiry: 'Jun 15, 2026', status: 'Active' },
        { code: 'CORP30', type: 'Percentage (30%)', limit: '200 uses', expiry: 'Expired', status: 'Expired' }
    ],

    init() {
        console.log('Marketing Initialized');
        this.renderTable();
        window._Marketing = this;
    },

    onPageLoad(pageId) {
        console.log('Marketing page load delegate called for:', pageId);
        switch (pageId) {
            case 'marketing':
                this.renderTable();
                break;
            case 'campaigns':
                this.renderCampaigns();
                break;
            case 'coupons':
                this.renderCoupons();
                break;
        }
    },

    renderTable() {
        const tbody = document.getElementById('marketing-tbody');
        if (!tbody) return;

        tbody.innerHTML = this.data.map(m => `
            <tr>
                <td class="primary">${m.time}</td>
                <td>${m.platform}</td>
                <td><span class="text-dim">${m.caption}</span></td>
                <td>${m.design}</td>
                <td>${m.segment}</td>
                <td><span class="pill ${m.status === 'Pending Approval' ? 'pill-amber' : 'pill-teal'}">${m.status}</span></td>
                <td>
                    ${m.status === 'Pending Approval' ? `
                        <button class="btn btn-teal btn-sm" onclick="showToast('Post approved for scheduling!', 'success'); this.parentElement.parentElement.style.opacity = '0.5';">Approve</button>
                    ` : `
                        <button class="btn btn-sm" onclick="showToast('Post already in system queue', 'info')">Track</button>
                    `}
                </td>
            </tr>
        `).join('');
    },

    renderCampaigns() {
        const page = document.getElementById('page-campaigns');
        if (!page) return;

        const card = page.querySelector('.card');
        if (!card) return;

        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:15px;">
                <h3 style="margin:0;">Active & Past Marketing Campaigns</h3>
                <button class="btn btn-primary btn-sm" onclick="showToast('Newsletter composer coming soon...', 'info')">+ Build Newsletter</button>
            </div>
            
            <table class="data-table">
                <thead>
                    <tr>
                        <th style="width:180px">Campaign Name</th>
                        <th style="width:120px">Channel</th>
                        <th style="width:100px">Sent To</th>
                        <th style="width:100px">Open Rate</th>
                        <th style="width:100px">Click Rate</th>
                        <th>Conversions</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.campaigns.map(c => `
                        <tr>
                            <td class="primary">${c.name}</td>
                            <td>${c.channel}</td>
                            <td><strong>${c.sent}</strong></td>
                            <td style="color:var(--teal); font-weight:bold;">${c.openRate}</td>
                            <td style="color:var(--teal); font-weight:bold;">${c.clickRate}</td>
                            <td><span class="pill pill-teal" style="font-size:12px; font-weight:bold;">${c.conversions}</span></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    },

    renderCoupons() {
        const page = document.getElementById('page-coupons');
        if (!page) return;

        const tbody = page.querySelector('tbody');
        if (!tbody) return;

        tbody.innerHTML = this.coupons.map(c => `
            <tr>
                <td class="primary" style="font-family:monospace; font-weight:bold; letter-spacing:1px;">${c.code}</td>
                <td>${c.type}</td>
                <td>${c.limit}</td>
                <td>${c.expiry}</td>
                <td><span class="pill ${c.status === 'Active' ? 'pill-teal' : 'pill-red'}">${c.status}</span></td>
                <td>
                    <button class="btn btn-sm" onclick="showToast('Editing settings for ${c.code}...', 'info')">Edit</button>
                </td>
            </tr>
        `).join('');
    }
};

Marketing.init();

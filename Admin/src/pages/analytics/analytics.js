/**
 * ══════════════════════════════════════════════════════
 * ANALYTICS MODULE
 * ══════════════════════════════════════════════════════
 */

export const Analytics = {
    citiesHeatmap: [
        { city: 'Bangalore', state: 'Karnataka', revenue: '₹2,64,000', repeatRate: '42%' },
        { city: 'Chennai', state: 'Tamil Nadu', revenue: '₹2,10,000', repeatRate: '48%' },
        { city: 'Mumbai', state: 'Maharashtra', revenue: '₹1,90,000', repeatRate: '36%' },
        { city: 'Hyderabad', state: 'Telangana', revenue: '₹1,24,000', repeatRate: '31%' },
        { city: 'Delhi NCR', state: 'Delhi', revenue: '₹54,000', repeatRate: '24%' }
    ],

    forecastingData: [
        { month: 'May (Forecast)', demand: '1,450 units', confidence: '94%', reason: 'College Fest Season Peaks' },
        { month: 'June (Forecast)', demand: '1,200 units', confidence: '89%', reason: 'Monsoon Corporate Orders spike' },
        { month: 'July (Forecast)', demand: '1,100 units', confidence: '85%', reason: 'E-commerce Monsoon sales' }
    ],

    segmentsList: [
        { name: 'College / Youth', percentage: '42%', stylePreference: 'Streetwear, Graphic Tees', val: '₹3.2L' },
        { name: 'Corporate Clients', percentage: '28%', stylePreference: 'Minimalist, Solid Polos', val: '₹2.6L' },
        { name: 'Folk / Regional Fans', percentage: '15%', stylePreference: 'Regional motifs, Local prints', val: '₹1.6L' },
        { name: 'Community Groups', percentage: '10%', stylePreference: 'Custom jerseys, Fan kits', val: '₹1.1L' }
    ],

    feedbacks: [
        { customer: 'Sanjay P.', score: 'NPS: 9/10', text: '"Outstanding fabric quality. Soft organic bamboo tee exceeds standard cotton models."', sentiment: 'Positive (98%)' },
        { customer: 'Kriti R.', score: 'NPS: 8/10', text: '"AI Sizing Assistant was spot on. Fits like a glove!"', sentiment: 'Positive (94%)' },
        { customer: 'Vikram S.', score: 'NPS: 5/10', text: '"Print quality is stunning but shipping took 5 days. Needs faster shipping options."', sentiment: 'Neutral (52%)' }
    ],

    taxes: [
        { month: 'April 2026', cgst: '₹75,780', sgst: '₹75,780', igst: '₹1,51,560', status: 'Filed' },
        { month: 'March 2026', cgst: '₹62,120', sgst: '₹62,120', igst: '₹1,24,240', status: 'Filed' }
    ],

    init() {
        console.log('Analytics Initialized');
        this.initAIHandlers();
        window._Analytics = this;
    },

    onPageLoad(pageId) {
        console.log('Analytics page load delegate called for:', pageId);
        switch (pageId) {
            case 'analytics':
                this.initAIHandlers();
                break;
            case 'heatmap':
                this.renderHeatmap();
                break;
            case 'forecasting':
                this.renderForecasting();
                break;
            case 'segmentation':
                this.renderSegmentation();
                break;
            case 'feedback-ai':
                this.renderFeedbackAI();
                break;
            case 'tax-reports':
                this.renderTaxReports();
                break;
        }
    },

    initAIHandlers() {
        const analyticsInput = document.getElementById('ai-input');
        if (!analyticsInput) return;

        // Make sure quick buttons work
        const quickBtns = document.querySelectorAll('.ai-quick-btn');
        quickBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const q = btn.dataset.q;
                if (q) {
                    analyticsInput.value = q;
                    window.askAgent?.('ai-input');
                }
            });
        });
    },

    renderHeatmap() {
        const page = document.getElementById('page-heatmap');
        if (!page) return;

        const card = page.querySelector('.card');
        if (!card) return;

        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:15px;">
                <h3 style="margin:0;">India Revenue Concentration</h3>
                <span class="pill pill-teal">Agent dynamic telemetry</span>
            </div>
            
            <table class="data-table">
                <thead>
                    <tr>
                        <th style="width:140px">City</th>
                        <th style="width:140px">State</th>
                        <th style="width:120px">Total Revenue</th>
                        <th>Repeat Purchase Rate</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.citiesHeatmap.map(c => `
                        <tr>
                            <td class="primary">${c.city}</td>
                            <td>${c.state}</td>
                            <td><strong>${c.revenue}</strong></td>
                            <td style="font-weight:bold; color:var(--teal);">${c.repeatRate}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    },

    renderForecasting() {
        const page = document.getElementById('page-forecasting');
        if (!page) return;

        const tbody = page.querySelector('tbody');
        if (!tbody) return;

        tbody.innerHTML = this.forecastingData.map(f => `
            <tr>
                <td class="primary">${f.month}</td>
                <td><strong>${f.demand}</strong></td>
                <td>
                    <span style="font-weight:bold; color:var(--teal);">${f.confidence} Confidence</span>
                </td>
                <td>${f.reason}</td>
            </tr>
        `).join('');
    },

    renderSegmentation() {
        const page = document.getElementById('page-segmentation');
        if (!page) return;

        const card = page.querySelector('.card');
        if (!card) return;

        card.innerHTML = `
            <h3 style="margin-bottom:15px;">Auto-Generated Customer Marketing Groups</h3>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px;">
                ${this.segmentsList.map(s => `
                    <div style="padding:15px; border:1px solid #eee; border-radius:8px; background:#f9f9f9; display:flex; flex-direction:column; justify-content:space-between;">
                        <div>
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <strong style="font-size:15px;">${s.name}</strong>
                                <span class="pill pill-teal" style="font-size:11px;">${s.percentage} of buyers</span>
                            </div>
                            <div style="font-size:12px; color:#555; margin-top:8px;">Style Preference: ${s.stylePreference}</div>
                        </div>
                        <div style="display:flex; justify-content:space-between; margin-top:15px; align-items:center; border-top:1px solid #eee; padding-top:10px;">
                            <span style="font-size:12px; color:#666;">Revenue Kept: <strong>${s.val}</strong></span>
                            <button class="btn btn-sm" onclick="showToast('Loading targeted coupon algorithms...', 'success')">Target Segment</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderFeedbackAI() {
        const page = document.getElementById('page-feedback-ai');
        if (!page) return;

        const card = page.querySelector('.card');
        if (!card) return;

        card.innerHTML = `
            <h3 style="margin-bottom:12px;">NLP Sentiment Analytics Bench</h3>
            <div style="display:flex; flex-direction:column; gap:12px;">
                ${this.feedbacks.map(f => `
                    <div style="padding:15px; border:1px solid #eee; border-radius:8px; background:#f9f9f9; display:flex; justify-content:space-between; align-items:center;">
                        <div style="flex:1; margin-right:15px;">
                            <div style="display:flex; gap:10px; align-items:center;">
                                <strong>${f.customer}</strong>
                                <span class="pill pill-teal" style="font-size:10px;">${f.score}</span>
                            </div>
                            <p style="margin:6px 0 0 0; font-style:italic; font-size:13px; color:#333;">${f.text}</p>
                        </div>
                        <span class="pill" style="font-size:11px; background:${f.sentiment.includes('Positive') ? 'var(--green-bg)' : 'var(--amber-bg)'}; color:${f.sentiment.includes('Positive') ? 'var(--teal)' : 'var(--amber)'};">${f.sentiment}</span>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderTaxReports() {
        const page = document.getElementById('page-tax-reports');
        if (!page) return;

        const tbody = page.querySelector('tbody');
        if (!tbody) return;

        tbody.innerHTML = this.taxes.map(t => `
            <tr>
                <td class="primary">${t.month}</td>
                <td>${t.cgst}</td>
                <td>${t.sgst}</td>
                <td>${t.igst}</td>
                <td><span class="pill pill-teal">${t.status}</span></td>
                <td>
                    <button class="btn btn-sm" onclick="showToast('Downloading GSTR-1 Excel Ledger...', 'success')">Download Ledger</button>
                </td>
            </tr>
        `).join('');
    }
};

Analytics.init();

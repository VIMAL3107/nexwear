/**
 * ══════════════════════════════════════════════════════
 * SETTINGS MODULE
 * ══════════════════════════════════════════════════════
 */

export const Settings = {
    auditLogs: [
        { time: 'Today, 03:42 PM', user: 'Super Admin (dev@nexwear.com)', action: 'Approved refund #ORD-4815', ip: '192.168.1.42' },
        { time: 'Today, 01:10 PM', user: 'Operations (ops@nexwear.com)', action: 'Re-routed Print Partner for order #ORD-4818', ip: '192.168.1.18' },
        { time: 'Yesterday, 04:15 PM', user: 'Finance (finance@nexwear.com)', action: 'Approved upcoming April 12 partner payout cycles', ip: '192.168.1.33' }
    ],

    rolesList: [
        { name: 'Super Admin', users: 1, permissions: 'Full System Access', status: 'Active' },
        { name: 'Operations Manager', users: 2, permissions: 'Order Routing, Partner Portal, QC Bench', status: 'Active' },
        { name: 'Financial Officer', users: 1, permissions: 'Payouts Cycle, Refunds Gateway, Taxes Reports', status: 'Active' }
    ],

    init() {
        console.log('Settings Initialized');
        window._Settings = this;
    },

    onPageLoad(pageId) {
        console.log('Settings page load delegate called for:', pageId);
        switch (pageId) {
            case 'tax-settings':
                this.renderTaxSettings();
                break;
            case 'tax-calc':
                this.renderTaxCalculator();
                break;
            case 'media-library':
                this.renderMediaLibrary();
                break;
            case 'roles':
                this.renderRoles();
                break;
            case 'audit-log':
                this.renderAuditLog();
                break;
            case 'policy-settings':
                this.renderPolicySettings();
                break;
            case 'email-templates':
                this.renderEmailTemplates();
                break;
            case 'shipping-rates':
                this.renderShippingRates();
                break;
        }
    },

    renderTaxSettings() {
        const page = document.getElementById('page-tax-settings');
        if (!page) return;

        const card = page.querySelector('.card');
        if (!card) return;

        card.innerHTML = `
            <h3 style="margin-bottom:15px;">National GST Rates (India)</h3>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom:20px;">
                <div class="form-group">
                    <label style="font-weight:bold; display:block; margin-bottom:5px;">CGST Rate (%)</label>
                    <input class="form-input" style="width:100%; padding:10px; border-radius:6px; border:1px solid #ddd;" value="2.5" id="tax-cgst-rate"/>
                </div>
                <div class="form-group">
                    <label style="font-weight:bold; display:block; margin-bottom:5px;">SGST Rate (%)</label>
                    <input class="form-input" style="width:100%; padding:10px; border-radius:6px; border:1px solid #ddd;" value="2.5" id="tax-sgst-rate"/>
                </div>
            </div>
            
            <div class="form-group" style="margin-bottom:20px;">
                <label style="font-weight:bold; display:block; margin-bottom:5px;">IGST Rate (%) (Inter-State)</label>
                <input class="form-input" style="width:100%; padding:10px; border-radius:6px; border:1px solid #ddd;" value="5.0" id="tax-igst-rate"/>
            </div>

            <button class="btn btn-primary" onclick="showToast('GST tax parameters saved successfully!', 'success')">Save Tax Rules</button>
        `;
    },

    renderTaxCalculator() {
        const page = document.getElementById('page-tax-calc');
        if (!page) return;

        const card = page.querySelector('.card');
        if (!card) return;

        card.innerHTML = `
            <h3 style="margin-bottom:12px;">GST Compliance Simulator</h3>
            <p style="font-size:12px; color:#666; margin-bottom:15px;">Simulate HSN / SAC apparel tax calculations based on purchase value and customer state location.</p>
            
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom:20px;">
                <div class="form-group">
                    <label style="font-weight:bold; display:block; margin-bottom:5px;">Base Price (₹)</label>
                    <input class="form-input" type="number" style="width:100%; padding:10px; border-radius:6px; border:1px solid #ddd;" value="1200" id="sim-base-price"/>
                </div>
                <div class="form-group">
                    <label style="font-weight:bold; display:block; margin-bottom:5px;">Customer Location</label>
                    <select class="form-input" style="width:100%; padding:10px; border-radius:6px; border:1px solid #ddd;" id="sim-location">
                        <option value="MH">Maharashtra (Intra-state CGST+SGST)</option>
                        <option value="KA">Karnataka (Inter-state IGST)</option>
                        <option value="TN">Tamil Nadu (Inter-state IGST)</option>
                    </select>
                </div>
            </div>

            <div style="padding:15px; background:#f9f9f9; border:1px solid #eee; border-radius:8px; margin-bottom:20px; font-family:monospace; font-size:13px;" id="sim-results">
                <div>Base: ₹1,200.00</div>
                <div>CGST (2.5%): ₹30.00</div>
                <div>SGST (2.5%): ₹30.00</div>
                <div style="border-top:1px solid #ddd; margin-top:8px; padding-top:8px; font-weight:bold;">Total Price: ₹1,260.00</div>
            </div>

            <button class="btn btn-teal" id="sim-btn">Recalculate Tax</button>
        `;

        const priceInput = card.querySelector('#sim-base-price');
        const locInput = card.querySelector('#sim-location');
        const results = card.querySelector('#sim-results');
        const calcBtn = card.querySelector('#sim-btn');

        const calc = () => {
            const base = parseFloat(priceInput.value) || 0;
            const loc = locInput.value;
            let cgst = 0, sgst = 0, igst = 0;

            if (loc === 'MH') {
                cgst = base * 0.025;
                sgst = base * 0.025;
                results.innerHTML = `
                    <div>Base: ₹${base.toLocaleString('en-IN', {minimumFractionDigits: 2})}</div>
                    <div>CGST (2.5%): ₹${cgst.toLocaleString('en-IN', {minimumFractionDigits: 2})}</div>
                    <div>SGST (2.5%): ₹${sgst.toLocaleString('en-IN', {minimumFractionDigits: 2})}</div>
                    <div style="border-top:1px solid #ddd; margin-top:8px; padding-top:8px; font-weight:bold;">Total Price: ₹${(base+cgst+sgst).toLocaleString('en-IN', {minimumFractionDigits: 2})}</div>
                `;
            } else {
                igst = base * 0.05;
                results.innerHTML = `
                    <div>Base: ₹${base.toLocaleString('en-IN', {minimumFractionDigits: 2})}</div>
                    <div>IGST (5%): ₹${igst.toLocaleString('en-IN', {minimumFractionDigits: 2})}</div>
                    <div style="border-top:1px solid #ddd; margin-top:8px; padding-top:8px; font-weight:bold;">Total Price: ₹${(base+igst).toLocaleString('en-IN', {minimumFractionDigits: 2})}</div>
                `;
            }
            showToast('Tax simulation calculated! 📊', 'success');
        };

        calcBtn.addEventListener('click', calc);
        [priceInput, locInput].forEach(el => el.addEventListener('change', calc));
    },

    renderMediaLibrary() {
        const page = document.getElementById('page-media-library');
        if (!page) return;

        const card = page.querySelector('.card');
        if (!card) return;

        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:15px;">
                <h3 style="margin:0;">High-Res Design & Print Asset Library</h3>
                <button class="btn btn-teal btn-sm" onclick="showToast('Choose texture from disk...', 'info')">+ Upload Asset</button>
            </div>
            
            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px;">
                <div style="border:1px solid #eee; border-radius:6px; padding:10px; text-align:center; background:#f9f9f9;">
                    <div style="font-size:36px; padding:10px;">🐅</div>
                    <strong style="font-size:12px; display:block;">chennai_tiger.png</strong>
                    <span style="font-size:10px; color:#777;">4.2 MB</span>
                </div>
                <div style="border:1px solid #eee; border-radius:6px; padding:10px; text-align:center; background:#f9f9f9;">
                    <div style="font-size:36px; padding:10px;">🌅</div>
                    <strong style="font-size:12px; display:block;">synthwave_sun.png</strong>
                    <span style="font-size:10px; color:#777;">2.8 MB</span>
                </div>
                <div style="border:1px solid #eee; border-radius:6px; padding:10px; text-align:center; background:#f9f9f9;">
                    <div style="font-size:36px; padding:10px;">🎋</div>
                    <strong style="font-size:12px; display:block;">zen_bamboo.png</strong>
                    <span style="font-size:10px; color:#777;">1.5 MB</span>
                </div>
                <div style="border:1px solid #eee; border-radius:6px; padding:10px; text-align:center; background:#f9f9f9;">
                    <div style="font-size:36px; padding:10px;">🛡️</div>
                    <strong style="font-size:12px; display:block;">college_crest.png</strong>
                    <span style="font-size:10px; color:#777;">820 KB</span>
                </div>
            </div>
        `;
    },

    renderRoles() {
        const page = document.getElementById('page-roles');
        if (!page) return;

        const tbody = page.querySelector('tbody');
        if (!tbody) return;

        tbody.innerHTML = this.rolesList.map(r => `
            <tr>
                <td class="primary" style="font-weight:bold;">${r.name}</td>
                <td>${r.users} assigned</td>
                <td><span class="text-dim">${r.permissions}</span></td>
                <td><span class="pill pill-teal">${r.status}</span></td>
                <td>
                    <button class="btn btn-sm" onclick="showToast('Configure permissions for ${r.name}...', 'info')">Modify</button>
                </td>
            </tr>
        `).join('');
    },

    renderAuditLog() {
        const page = document.getElementById('page-audit-log');
        if (!page) return;

        const tbody = page.querySelector('tbody');
        if (!tbody) return;

        tbody.innerHTML = this.auditLogs.map(l => `
            <tr>
                <td class="primary" style="font-family:monospace; font-size:12px;">${l.time}</td>
                <td>${l.user}</td>
                <td><strong>${l.action}</strong></td>
                <td style="font-family:monospace; font-size:12px;">${l.ip}</td>
            </tr>
        `).join('');
    },

    renderPolicySettings() {
        const page = document.getElementById('page-policy-settings');
        if (!page) return;

        const card = page.querySelector('.card');
        if (!card) return;

        card.innerHTML = `
            <h3 style="margin-bottom:15px; border-bottom:1px solid #eee; padding-bottom:8px;">Customer Policy Guidelines</h3>
            
            <div class="form-group" style="margin-bottom:15px;">
                <label style="font-weight:bold; display:block; margin-bottom:5px;">Exchange Window Duration (Days)</label>
                <input class="form-input" type="number" style="width:100%; padding:10px; border-radius:6px; border:1px solid #ddd;" value="7" />
            </div>

            <div class="form-group" style="margin-bottom:15px;">
                <label style="font-weight:bold; display:block; margin-bottom:5px;">Auto-Refund Threshold Value (₹)</label>
                <input class="form-input" type="number" style="width:100%; padding:10px; border-radius:6px; border:1px solid #ddd;" value="500" />
                <span style="font-size:11px; color:#666;">Refunds below this threshold are auto-issued via the NLP AI Agent.</span>
            </div>

            <div class="form-group" style="margin-bottom:20px;">
                <label style="font-weight:bold; display:block; margin-bottom:5px;">Allowed Return Reasons</label>
                <textarea class="form-input" style="width:100%; padding:10px; border-radius:6px; border:1px solid #ddd; height:80px; resize:none;">Size mismatch, Print discolouration, Fabric tearing defect, Stitching loose defect</textarea>
            </div>

            <button class="btn btn-primary" onclick="showToast('Customer policies successfully saved & published to storefront!', 'success')">Save Policies</button>
        `;
    },

    renderEmailTemplates() {
        const page = document.getElementById('page-email-templates');
        if (!page) return;

        const card = page.querySelector('.card');
        if (!card) return;

        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:15px;">
                <h3 style="margin:0;">Transactional Email Templates (SendGrid)</h3>
            </div>
            
            <div style="display:flex; flex-direction:column; gap:12px;">
                <div style="padding:15px; border:1px solid #eee; border-radius:8px; background:#f9f9f9; display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <strong>Order Confirmation Email Template</strong>
                        <div style="font-size:11px; color:#555; margin-top:2px;">Trigger: Sent to customer immediately upon Razorpay gateway capture confirmation.</div>
                    </div>
                    <button class="btn btn-sm" onclick="showToast('Opening SendGrid Template Editor...', 'info')">Edit Template</button>
                </div>
                <div style="padding:15px; border:1px solid #eee; border-radius:8px; background:#f9f9f9; display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <strong>Partner SLA Breach Escalation</strong>
                        <div style="font-size:11px; color:#555; margin-top:2px;">Trigger: Sent to Print Partner automatically when print operations exceed 48h limit.</div>
                    </div>
                    <button class="btn btn-sm" onclick="showToast('Opening SendGrid Template Editor...', 'info')">Edit Template</button>
                </div>
            </div>
        `;
    },

    renderShippingRates() {
        const page = document.getElementById('page-shipping-rates');
        if (!page) return;

        const card = page.querySelector('.card');
        if (!card) return;

        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:15px;">
                <h3 style="margin:0;">Logistics & Courier Delivery Estimation</h3>
            </div>
            
            <div style="display:flex; flex-direction:column; gap:12px;">
                <div style="padding:15px; border:1px solid #eee; border-radius:8px; background:#f9f9f9; display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <strong>Standard Surface Shipping Zone (India National)</strong>
                        <div style="font-size:11px; color:#555; margin-top:2px;">Rate: <strong>Free Shipping</strong> above ₹999 purchase (otherwise ₹80 flat rate).</div>
                    </div>
                    <button class="btn btn-sm" onclick="showToast('Configuring logistics weights...', 'info')">Configure</button>
                </div>
                <div style="padding:15px; border:1px solid #eee; border-radius:8px; background:#f9f9f9; display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <strong>Express Air Courier (Metro Cities)</strong>
                        <div style="font-size:11px; color:#555; margin-top:2px;">Rate: ₹150 flat premium rate. Guarantees delivery within 48 hours.</div>
                    </div>
                    <button class="btn btn-sm" onclick="showToast('Configuring logistics weights...', 'info')">Configure</button>
                </div>
            </div>
        `;
    }
};

Settings.init();

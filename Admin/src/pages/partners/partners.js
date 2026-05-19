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

    onboardings: [
        { company: 'Mumbai Prints Co.', owner: 'Ramesh Shah', capabilities: 'DTG, Screen Print', status: 'Docs Pending Review' },
        { company: 'Delhi Custom Prints', owner: 'Amrit Singh', capabilities: 'Embroidery, Screen Print', status: 'Background Check' }
    ],

    chatMessages: [
        { sender: 'PrintX Chennai', message: 'Material for order #ORD-4814 is loaded and ready for QC.', time: '10:15 AM' },
        { sender: 'Admin', message: 'Perfect! Please upload the QC photo so the AI agent can pass it.', time: '10:20 AM' },
        { sender: 'PrintX Chennai', message: 'Sure, uploading photo in 5 mins.', time: '10:22 AM' }
    ],

    init() {
        console.log('Partners Initialized');
        this.renderTable();
        window._Partners = this;
    },

    onPageLoad(pageId) {
        console.log('Partners page load delegate called for:', pageId);
        switch (pageId) {
            case 'partners':
                this.renderTable();
                break;
            case 'onboarding':
                this.renderOnboarding();
                break;
            case 'sla-monitor':
                this.renderSLAMonitor();
                break;
            case 'partner-chat':
                this.renderPartnerChat();
                break;
            case 'partner-reports':
                this.renderPartnerReports();
                break;
        }
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
                <td><button class="btn" onclick="showToast('Loading communication logs for ${p.name}', 'info')">Manage</button></td>
            </tr>
        `).join('');
    },

    renderOnboarding() {
        const page = document.getElementById('page-onboarding');
        if (!page) return;

        const card = page.querySelector('.card');
        if (!card) return;

        card.innerHTML = `
            <h3 style="margin-bottom:15px; border-bottom:1px solid #eee; padding-bottom:8px;">Verification & Background Checks</h3>
            <div style="display:flex; flex-direction:column; gap:12px;">
                ${this.onboardings.map(o => `
                    <div class="partner-row" style="padding:15px; background:#f9f9f9; border:1px solid #eee; border-radius:8px; display:flex; justify-content:space-between; align-items:center;">
                        <div>
                            <strong>${o.company}</strong>
                            <div style="font-size:11px; color:#555; margin-top:4px;">Owner: ${o.owner} | Capabilities: ${o.capabilities}</div>
                        </div>
                        <div style="display:flex; gap:6px; align-items:center;">
                            <span class="pill pill-amber" style="font-size:10px;">${o.status}</span>
                            <button class="btn btn-teal btn-sm" onclick="showToast('Verifying documents for ${o.company}...', 'info'); setTimeout(() => showToast('Onboarding approved! Welcome email dispatched.', 'success'), 1500)">Verify Docs</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderSLAMonitor() {
        const page = document.getElementById('page-sla-monitor');
        if (!page) return;

        const kpis = page.querySelector('.kpi-row');
        if (kpis) {
            kpis.innerHTML = `
                <div class="kpi-card">
                    <div class="kpi-label">Avg Delivery Time</div>
                    <div class="kpi-value">3.2 Days</div>
                    <div class="kpi-sub text-up">↑ 0.4 Days faster</div>
                </div>
                <div class="kpi-card">
                    <div class="kpi-label">Defect Rate</div>
                    <div class="kpi-value">0.4%</div>
                    <div class="kpi-sub text-up">↓ 0.1% defect reduction</div>
                </div>
                <div class="kpi-card">
                    <div class="kpi-label">SLA Compliance</div>
                    <div class="kpi-value">98%</div>
                    <div class="kpi-sub text-dim">Active targets met</div>
                </div>
            `;
        }
    },

    renderPartnerChat() {
        const page = document.getElementById('page-partner-chat');
        if (!page) return;

        const card = page.querySelector('.card');
        if (!card) return;

        card.innerHTML = `
            <div style="flex:1; background:#f9f9f9; padding:20px; border-radius:8px; overflow-y:auto; height:280px; display:flex; flex-direction:column; gap:10px;" id="chat-messages-container">
                ${this.chatMessages.map(m => `
                    <div style="align-self:${m.sender === 'Admin' ? 'flex-end' : 'flex-start'}; background:${m.sender === 'Admin' ? 'var(--teal)' : '#fff'}; color:${m.sender === 'Admin' ? '#fff' : '#000'}; padding:10px 14px; border-radius:8px; box-shadow:0 1px 3px rgba(0,0,0,0.05); max-width:70%;">
                        <div style="font-size:10px; font-weight:bold; opacity:0.8; margin-bottom:2px;">${m.sender}</div>
                        <div style="font-size:13px;">${m.message}</div>
                        <div style="font-size:9px; text-align:right; opacity:0.6; margin-top:4px;">${m.time}</div>
                    </div>
                `).join('')}
            </div>
            <div style="display:flex; margin-top:15px; gap:10px">
                <input class="form-input" id="chat-reply-input" style="flex:1; padding:10px; border-radius:6px; border:1px solid #ddd;" placeholder="Type message..." />
                <button class="btn btn-primary" id="chat-send-btn">Send</button>
            </div>
        `;

        // Add event listeners for chat send
        const sendBtn = card.querySelector('#chat-send-btn');
        const replyInput = card.querySelector('#chat-reply-input');
        const chatContainer = card.querySelector('#chat-messages-container');

        const sendMessage = () => {
            const val = replyInput.value.trim();
            if (!val) return;

            const timeNow = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
            
            // Add admin message
            this.chatMessages.push({ sender: 'Admin', message: val, time: timeNow });
            replyInput.value = '';
            
            // Render
            chatContainer.innerHTML += `
                <div style="align-self:flex-end; background:var(--teal); color:#fff; padding:10px 14px; border-radius:8px; box-shadow:0 1px 3px rgba(0,0,0,0.05); max-width:70%;">
                    <div style="font-size:10px; font-weight:bold; opacity:0.8; margin-bottom:2px;">Admin</div>
                    <div style="font-size:13px;">${val}</div>
                    <div style="font-size:9px; text-align:right; opacity:0.6; margin-top:4px;">${timeNow}</div>
                </div>
            `;
            chatContainer.scrollTop = chatContainer.scrollHeight;

            showToast('Message sent successfully', 'success');

            // Simulate partner reply
            setTimeout(() => {
                const partnerReply = 'Acknowledged. We are working on it!';
                this.chatMessages.push({ sender: 'PrintX Chennai', message: partnerReply, time: timeNow });
                chatContainer.innerHTML += `
                    <div style="align-self:flex-start; background:#fff; color:#000; padding:10px 14px; border-radius:8px; box-shadow:0 1px 3px rgba(0,0,0,0.05); max-width:70%;">
                        <div style="font-size:10px; font-weight:bold; opacity:0.8; margin-bottom:2px;">PrintX Chennai</div>
                        <div style="font-size:13px;">${partnerReply}</div>
                        <div style="font-size:9px; text-align:right; opacity:0.6; margin-top:4px;">${timeNow}</div>
                    </div>
                `;
                chatContainer.scrollTop = chatContainer.scrollHeight;
                showToast('New message from PrintX Chennai 🔴', 'info');
            }, 2000);
        };

        sendBtn.addEventListener('click', sendMessage);
        replyInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    },

    renderPartnerReports() {
        const page = document.getElementById('page-partner-reports');
        if (!page) return;

        const tbody = page.querySelector('tbody');
        if (!tbody) return;

        tbody.innerHTML = `
            <tr>
                <td class="primary">PrintX Chennai</td>
                <td>98.2%</td>
                <td>0.1%</td>
                <td><strong>94</strong></td>
            </tr>
            <tr>
                <td class="primary">ColorPro Bangalore</td>
                <td>95.5%</td>
                <td>0.3%</td>
                <td><strong>88</strong></td>
            </tr>
            <tr>
                <td class="primary">TeeLink Hyderabad</td>
                <td>96.1%</td>
                <td>0.2%</td>
                <td><strong>91</strong></td>
            </tr>
            <tr>
                <td class="primary">InkMate Mumbai</td>
                <td>74.2%</td>
                <td>1.4%</td>
                <td><strong style="color:red;">72</strong></td>
            </tr>
        `;
    }
};

Partners.init();

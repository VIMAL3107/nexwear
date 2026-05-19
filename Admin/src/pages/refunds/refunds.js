/**
 * ══════════════════════════════════════════════════════
 * REFUNDS & DISPUTES MODULE
 * ══════════════════════════════════════════════════════
 */

export const Refunds = {
    dataPending: [
        { id: 'ORD-4818', customer: 'Anjali R.', value: '₹4,820', reason: 'Size mismatch — requested exchange', note: 'Exceeds ₹500 limit' },
        { id: 'ORD-4811', customer: 'Siddharth M.', value: '₹1,400', reason: 'Late delivery — refused shipment', note: 'Exceeds ₹500 limit' }
    ],

    dataAuto: [
        { id: 'ORD-4815', customer: 'Karan J.', value: '₹340', reason: 'Minor stitching defect', resolved: '10:05 AM', status: 'Refunded (Auto)' },
        { id: 'ORD-4812', customer: 'Meera N.', value: '₹480', reason: 'Slight print discolouration', resolved: '09:42 AM', status: 'Refunded (Auto)' }
    ],

    returnRequests: [
        { id: 'RET-201', orderId: 'ORD-4817', customer: 'Vikram S.', reason: 'Stitching loose on sleeve', photo: 'stitching_loose.jpg', status: 'Reviewing' },
        { id: 'RET-202', orderId: 'ORD-4813', customer: 'Meera N.', reason: 'Received wrong size color combo', photo: 'wrong_color_size.jpg', status: 'Approved' }
    ],

    disputes: [
        { id: 'DISP-401', orderId: 'ORD-4816', gateway: 'Razorpay', type: 'Chargeback', amount: '₹6,400', status: 'Open' },
        { id: 'DISP-402', orderId: 'ORD-4810', gateway: 'Razorpay', type: 'Double Debit', amount: '₹1,200', status: 'Resolved' }
    ],

    init() {
        console.log('Refunds Initialized');
        this.renderTable();
        window._Refunds = this;
    },

    onPageLoad(pageId) {
        console.log('Refunds page load delegate called for:', pageId);
        switch (pageId) {
            case 'refunds':
                this.renderTable();
                break;
            case 'return-req':
                this.renderReturnRequests();
                break;
            case 'disputes':
                this.renderDisputes();
                break;
        }
    },

    renderTable() {
        const pendingTbody = document.getElementById('refunds-pending-tbody');
        const autoTbody = document.getElementById('refunds-auto-tbody');

        if (pendingTbody) {
            pendingTbody.innerHTML = this.dataPending.map(r => `
                <tr>
                    <td class="primary">${r.id}</td>
                    <td>${r.customer}</td>
                    <td>${r.value}</td>
                    <td>${r.reason}</td>
                    <td><span class="text-dim">${r.note}</span></td>
                    <td>
                        <button class="btn btn-teal btn-sm" onclick="showToast('Refund of ${r.value} approved! Transferred via Razorpay API.', 'success'); this.parentElement.parentElement.style.opacity = '0.5';">Approve</button>
                        <button class="btn btn-red btn-sm" onclick="showToast('Refund request rejected.', 'error'); this.parentElement.parentElement.style.opacity = '0.5';">Reject</button>
                    </td>
                </tr>
            `).join('');
        }

        if (autoTbody) {
            autoTbody.innerHTML = this.dataAuto.map(r => `
                <tr>
                    <td class="primary">${r.id}</td>
                    <td>${r.customer}</td>
                    <td>${r.value}</td>
                    <td>${r.reason}</td>
                    <td>${r.resolved}</td>
                    <td><span class="pill pill-teal">${r.status}</span></td>
                </tr>
            `).join('');
        }
    },

    renderReturnRequests() {
        const page = document.getElementById('page-return-req');
        if (!page) return;

        const card = page.querySelector('.card');
        if (!card) return;

        card.innerHTML = `
            <h3 style="margin-bottom:12px;">Reverse Logistics & Exchanges Queue</h3>
            <p style="font-size:12px; color:#666; margin-bottom:15px;">Monitor and approve exchange requests and return logistics workflows.</p>
            
            <div style="display:flex; flex-direction:column; gap:12px;">
                ${this.returnRequests.map(r => `
                    <div style="padding:15px; border:1px solid #eee; border-radius:8px; background:#f9f9f9; display:flex; justify-content:space-between; align-items:center;">
                        <div>
                            <strong>Request ID: ${r.id}</strong> (Order: ${r.orderId})
                            <div style="font-size:11px; color:#555; margin-top:4px;">Customer: ${r.customer} | Reason: ${r.reason}</div>
                        </div>
                        
                        <div style="display:flex; gap:6px; align-items:center;">
                            <span class="pill ${r.status === 'Approved' ? 'pill-teal' : 'pill-amber'}" style="font-size:10px;">${r.status}</span>
                            <button class="btn btn-sm" onclick="showToast('Loading uploaded return photo: ${r.photo}', 'info')">View Photo</button>
                            ${r.status === 'Reviewing' ? `
                                <button class="btn btn-teal btn-sm" onclick="showToast('Return approved. Courier reverse pickup scheduled!', 'success'); this.parentElement.parentElement.style.opacity = '0.5';">Approve Return</button>
                            ` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderDisputes() {
        const page = document.getElementById('page-disputes');
        if (!page) return;

        const tbody = page.querySelector('tbody');
        if (!tbody) return;

        tbody.innerHTML = this.disputes.map(d => `
            <tr>
                <td class="primary">${d.id}</td>
                <td>${d.orderId}</td>
                <td>${d.gateway}</td>
                <td>${d.type}</td>
                <td><strong>${d.amount}</strong></td>
                <td><span class="pill ${d.status === 'Open' ? 'pill-red' : 'pill-teal'}">${d.status}</span></td>
                <td>
                    ${d.status === 'Open' ? `
                        <button class="btn btn-teal btn-sm" onclick="showToast('Uploading evidence to payment gateway...', 'success')">Resolve Dispute</button>
                    ` : `
                        <button class="btn btn-sm" onclick="showToast('Dispute already archived', 'info')">Archived</button>
                    `}
                </td>
            </tr>
        `).join('');
    }
};

Refunds.init();

/**
 * ══════════════════════════════════════════════════════
 * REFUNDS MODULE
 * ══════════════════════════════════════════════════════
 */

export const Refunds = {
    pending: [
        { order: '#ORD-4811', customer: 'Anjali R.', amount: '₹960', reason: 'Print quality complaint', note: 'AI: Above threshold' },
        { order: '#ORD-4798', customer: 'Vikram S.', amount: '₹1,250', reason: 'Design mismatch', note: 'AI: Photo attached' },
        { order: '#ORD-4805', customer: 'Rahul D.', amount: '₹640', reason: 'Delayed > 7 days', note: 'AI: Auto-escalated' }
    ],

    init() {
        console.log('Refunds Initialized');
        this.renderPending();
    },

    renderPending() {
        const tbody = document.getElementById('refunds-pending-tbody');
        if (!tbody) return;

        tbody.innerHTML = this.pending.map(r => `
            <tr>
                <td class="primary">${r.order}</td>
                <td>${r.customer}</td>
                <td>${r.amount}</td>
                <td><span style="font-size:14px">${r.reason}</span></td>
                <td><span style="font-size:13px;color:var(--purple)">${r.note}</span></td>
                <td>
                    <div style="display:flex;gap:4px">
                        <button class="btn btn-primary" onclick="showToast('Refund approved for ${r.order}', 'success')">Approve</button>
                        <button class="btn" onclick="showToast('Refund denied', 'error')">Deny</button>
                    </div>
                </td>
            </tr>
        `).join('');
    }
};

Refunds.init();

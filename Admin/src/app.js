/**
 * ══════════════════════════════════════════════════════
 * OPENCLAW ADMIN — MAIN APP CONTROLLER
 * ══════════════════════════════════════════════════════
 */

if (!sessionStorage.getItem('admin_token')) {
    window.location.replace('./login.html');
}

// Import Page Modules
import './pages/dashboard/dashboard.js';
import './pages/orders/orders.js';
import './pages/products/products.js';
import './pages/designs/designs.js';
import './pages/partners/partners.js';
import './pages/payouts/payouts.js';
import './pages/customers/customers.js';
import './pages/refunds/refunds.js';
import './pages/analytics/analytics.js';
import './pages/marketing/marketing.js';
import './pages/settings/settings.js';
import './pages/agent/agent.js';
import { AddProduct } from './pages/products/add-product.js';

// ── Bootstrap (ES modules run after DOM is ready — no DOMContentLoaded needed) ──
initToasts();      // define showToast first so modules can call it
initNavigation();
initSubmenus();

/**
 * Handle Main Sidebar Navigation
 */
function initNavigation() {
    const allClickable = document.querySelectorAll('.nav-item[data-page], .nav-sub-item[data-page]');
    const pages = document.querySelectorAll('.page');

    allClickable.forEach(item => {
        item.addEventListener('click', () => {
            const pageId = item.dataset.page;
            if (!pageId) return;

            // 1. Update active highlight on sidebar
            document.querySelectorAll('.nav-item, .nav-sub-item').forEach(ni => ni.classList.remove('active'));
            item.classList.add('active');

            // 2. Show matching page
            pages.forEach(p => p.classList.remove('active'));
            const targetPage = document.getElementById(`page-${pageId}`);
            if (targetPage) targetPage.classList.add('active');

            // 3. Lazy-init page modules when first visited
            if (pageId === 'add-product') AddProduct.init();

            // 4. Delegate page load events to page controllers
            const modules = [
                window._Dashboard,
                window._Orders,
                window._Products,
                window._Designs,
                window._Partners,
                window._Payouts,
                window._Customers,
                window._Refunds,
                window._Analytics,
                window._Marketing,
                window._Settings,
                window._Agent
            ];

            modules.forEach(mod => {
                if (mod && typeof mod.onPageLoad === 'function') {
                    try {
                        mod.onPageLoad(pageId);
                    } catch (e) {
                        console.error('Error in onPageLoad delegation:', e);
                    }
                }
            });

            console.log(`→ page-${pageId}`);
        });
    });
}

/**
 * Handle Collapsible Submenus
 */
function initSubmenus() {
    const parents = document.querySelectorAll('.nav-parent');

    parents.forEach(parent => {
        // Build submenu id from the data-page value. e.g. "products" → "submenu-products"
        const pageId = parent.dataset.page;
        const submenu = document.getElementById(`submenu-${pageId}`);
        const chevron = parent.querySelector('.nav-chevron');
        if (!submenu) return;

        parent.addEventListener('click', (e) => {
            // If the actual click was on the parent (not a sub-item bubbling up)
            if (e.target.closest('.nav-parent') === parent && !e.target.closest('.nav-submenu')) {
                const isOpen = submenu.classList.contains('open');

                // Close all first
                document.querySelectorAll('.nav-submenu').forEach(sm => sm.classList.remove('open'));
                document.querySelectorAll('.nav-chevron').forEach(ch => ch.classList.remove('open'));

                // Toggle open if it was closed
                if (!isOpen) {
                    submenu.classList.add('open');
                    chevron?.classList.add('open');
                }
            }
        });

        // Auto-open if a child is already active on load
        if (submenu.querySelector('.nav-sub-item.active')) {
            submenu.classList.add('open');
            chevron?.classList.add('open');
        }
    });
}

/**
 * Toast Notification System
 */
function initToasts() {
    window.showToast = (message, type = 'info') => {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;

        const icons = { success: '✅', error: '❌', warn: '⚠️', info: '🔔' };
        const icon = icons[type] || '🔔';

        toast.innerHTML = `
            <span class="toast-icon">${icon}</span>
            <span class="toast-msg">${message}</span>
        `;

        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(60px)';
            setTimeout(() => toast.remove(), 400);
        }, 3000);
    };
}

/**
 * AI Agent Query Mock
 */
window.askAgent = (inputId) => {
    const input = document.getElementById(inputId);
    if (!input || !input.value.trim()) return;

    showToast(`Analyzing: "${input.value}"`, 'info');
    setTimeout(() => {
        showToast('Nexwear agent answered your query. Check the results below.', 'success');
        input.value = '';
    }, 1500);
};

/**
 * ── ASK NEXWEAR AGENT MODAL LOGIC ──
 */
window.openAgentModal = () => {
    const modal = document.getElementById('agent-modal');
    if (modal) {
        modal.style.display = 'flex';
        setTimeout(() => {
            document.getElementById('modal-ai-input')?.focus();
        }, 100);
    }
};

window.closeAgentModal = () => {
    const modal = document.getElementById('agent-modal');
    if (modal) modal.style.display = 'none';
};

window.sendModalQuery = (queryText) => {
    const input = document.getElementById('modal-ai-input');
    const query = queryText || input?.value?.trim();
    if (!query) return;

    const chatLog = document.getElementById('agent-chat-log');
    if (!chatLog) return;

    // Append User Message
    const userMsg = document.createElement('div');
    userMsg.className = 'agent-chat-msg user';
    userMsg.innerHTML = `
        <div class="avatar-sm" style="background: var(--purple-bg); color: var(--purple); font-weight: bold;">👤</div>
        <div class="msg-bubble">${query}</div>
    `;
    chatLog.appendChild(userMsg);
    chatLog.scrollTop = chatLog.scrollHeight;

    if (input) input.value = '';

    // Append System Typing/Loading Bubble
    const typingMsg = document.createElement('div');
    typingMsg.className = 'agent-chat-msg system typing';
    typingMsg.innerHTML = `
        <div class="avatar-sm">🤖</div>
        <div class="msg-bubble" style="display:flex; align-items:center; gap:4px; padding: 12px 16px;">
            <span class="dot-typing" style="width:6px; height:6px; background:#64748b; border-radius:50%; animation: bounce 1.4s infinite ease-in-out both;"></span>
            <span class="dot-typing" style="width:6px; height:6px; background:#64748b; border-radius:50%; animation: bounce 1.4s infinite ease-in-out both 0.2s;"></span>
            <span class="dot-typing" style="width:6px; height:6px; background:#64748b; border-radius:50%; animation: bounce 1.4s infinite ease-in-out both 0.4s;"></span>
        </div>
    `;
    chatLog.appendChild(typingMsg);
    chatLog.scrollTop = chatLog.scrollHeight;

    // Simulate Agent Response
    setTimeout(() => {
        typingMsg.remove();

        const agentResponse = getAgentMockResponse(query);

        const systemMsg = document.createElement('div');
        systemMsg.className = 'agent-chat-msg system';
        systemMsg.innerHTML = `
            <div class="avatar-sm">🤖</div>
            <div class="msg-bubble">${agentResponse}</div>
        `;
        chatLog.appendChild(systemMsg);
        chatLog.scrollTop = chatLog.scrollHeight;
    }, 1500);
};

function getAgentMockResponse(query) {
    const q = query.toLowerCase();
    if (q.includes('partner') && (q.includes('delay') || q.includes('most') || q.includes('score') || q.includes('delays'))) {
        return `Based on live operational telemetry: <strong>InkMate — Mumbai</strong> has the most delays this week with an SLA rating of <strong>72/100</strong> due to printing load bottlenecks. I recommend routing high-priority orders to <strong>PrintX — Chennai</strong> (SLA 94/100).`;
    }
    if (q.includes('design') && (q.includes('category') || q.includes('top'))) {
        return `Currently, <strong>Streetwear / Oversized Tees</strong> is the top-selling category, capturing <strong>38%</strong> of this month's order volume, followed by <strong>Minimal Logo</strong> designs.`;
    }
    if (q.includes('drop') || q.includes('apr 7')) {
        return `On <strong>April 7</strong>, daily revenue dropped to <strong>₹18,500</strong>. This anomaly was caused by a temporary payment gateway timeout at 2:00 PM - 5:00 PM, resulting in <strong>14 failed checkouts</strong>. Operations have since stabilized.`;
    }
    if (q.includes('payout')) {
        return `Upcoming payouts scheduled for <strong>April 12</strong> total <strong>₹1,24,500</strong> across 8 partners. The largest disbursement is allocated to <strong>PrintX Chennai</strong> (₹42,380). All details are cleared for disbursement.`;
    }
    if (q.includes('city') || q.includes('repeat')) {
        return `<strong>Chennai</strong> is leading repeat purchase rates at <strong>46%</strong>, closely followed by <strong>Bangalore</strong> at <strong>41%</strong>. Our marketing campaigns in Chennai have driven this high engagement.`;
    }
    return `I've analyzed your operational query. The system shows all metrics are active. Is there a specific partner, design, or revenue transaction you would like to audit?`;
}

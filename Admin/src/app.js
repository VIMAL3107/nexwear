/**
 * ══════════════════════════════════════════════════════
 * OPENCLAW ADMIN — MAIN APP CONTROLLER
 * ══════════════════════════════════════════════════════
 */

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

        parent.addEventListener('click', () => {
            const isOpen = submenu.classList.contains('open');

            // Close all first
            document.querySelectorAll('.nav-submenu').forEach(sm => sm.classList.remove('open'));
            document.querySelectorAll('.nav-chevron').forEach(ch => ch.classList.remove('open'));

            // Toggle open if it was closed
            if (!isOpen) {
                submenu.classList.add('open');
                chevron?.classList.add('open');
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

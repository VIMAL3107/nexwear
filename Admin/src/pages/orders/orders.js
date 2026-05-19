/**
 * ══════════════════════════════════════════════════════
 * ORDERS MODULE (Unified Data Registry & Controller)
 * ══════════════════════════════════════════════════════
 */

export const Orders = {
    data: [
        { 
            id: 'ORD-4818', 
            customer: 'Anjali R.', 
            items: 3, 
            value: '₹4,820', 
            partner: 'PrintX', 
            status: 'Flagged', 
            date: '09 Apr', 
            partnerCity: 'Chennai', 
            colors: ['#0f766e', '#1e3a8a'], 
            extra: 1, 
            partnerLogoBg: '#10b981', 
            partnerLogoColor: '#ffffff',
            segment: 'Corporate'
        },
        { 
            id: 'ORD-4817', 
            customer: 'Vikram S.', 
            items: 1, 
            value: '₹1,250', 
            partner: 'ColorPro', 
            status: 'Printing', 
            date: '10 Apr', 
            partnerCity: 'Bangalore', 
            colors: ['#0f766e'], 
            extra: 0, 
            partnerLogoBg: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)', 
            partnerLogoColor: '#ffffff',
            segment: 'College'
        },
        { 
            id: 'ORD-4816', 
            customer: 'Priya M.', 
            items: 5, 
            value: '₹6,400', 
            partner: 'TeeLink', 
            status: 'Shipped', 
            date: '10 Apr', 
            partnerCity: 'Chennai', 
            colors: ['#1e3a8a', '#1e3a8a', '#0f766e'], 
            extra: 2, 
            partnerLogoBg: '#3b82f6', 
            partnerLogoColor: '#ffffff',
            segment: 'Regional'
        },
        { 
            id: 'ORD-4815', 
            customer: 'Karan J.', 
            items: 1, 
            value: '₹980', 
            partner: 'InkMate', 
            status: 'Delivered', 
            date: '08 Apr', 
            partnerCity: 'Mumbai', 
            colors: ['#0f766e'], 
            extra: 0, 
            partnerLogoBg: '#f59e0b', 
            partnerLogoColor: '#ffffff',
            segment: 'Fan'
        },
        { 
            id: 'ORD-4814', 
            customer: 'Neha T.', 
            items: 3, 
            value: '₹3,450', 
            partner: 'PrintX', 
            status: 'Printing', 
            date: '08 Apr', 
            partnerCity: 'Delhi', 
            colors: ['#1e3a8a', '#0f766e'], 
            extra: 1, 
            partnerLogoBg: '#10b981', 
            partnerLogoColor: '#ffffff',
            segment: 'Corporate'
        },
        { 
            id: 'ORD-4813', 
            customer: 'Arjun D.', 
            items: 1, 
            value: '₹1,150', 
            partner: 'ColorPro', 
            status: 'QC Pending', 
            date: '07 Apr', 
            partnerCity: 'Bangalore', 
            colors: ['#0f766e'], 
            extra: 0, 
            partnerLogoBg: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)', 
            partnerLogoColor: '#ffffff',
            segment: 'College'
        },
        { 
            id: 'ORD-4812', 
            customer: 'Rahul K.', 
            items: 6, 
            value: '₹7,990', 
            partner: 'TeeLink', 
            status: 'Printing', 
            date: '07 Apr', 
            partnerCity: 'Chennai', 
            colors: ['#1e3a8a', '#1e3a8a', '#0f766e'], 
            extra: 3, 
            partnerLogoBg: '#3b82f6', 
            partnerLogoColor: '#ffffff',
            segment: 'Regional'
        },
        { 
            id: 'ORD-4811', 
            customer: 'Sneha P.', 
            items: 1, 
            value: '₹1,430', 
            partner: 'InkMate', 
            status: 'Shipped', 
            date: '06 Apr', 
            partnerCity: 'Mumbai', 
            colors: ['#0f766e'], 
            extra: 0, 
            partnerLogoBg: '#f59e0b', 
            partnerLogoColor: '#ffffff',
            segment: 'Fan'
        }
    ],

    bulkInquiries: [
        { id: 'BULK-101', org: 'IIT Delhi - Fest Tees', qty: 500, status: 'Quotation Sent', date: '08 Apr' },
        { id: 'BULK-102', org: 'Google Developers India', qty: 250, status: 'Approved', date: '09 Apr' },
        { id: 'BULK-103', org: 'BITS Pilani Oasis', qty: 700, status: 'Under Review', date: '11 Apr' }
    ],

    assignments: [
        { orderId: 'ORD-4818', partner: 'PrintX Delhi', reason: 'Proximity & low capacity load queue (4.9/5)', status: 'Auto-assigned' },
        { orderId: 'ORD-4817', partner: 'ColorPro Bangalore', reason: 'Screen print specialty hub optimized SLA', status: 'Auto-assigned' },
        { orderId: 'ORD-4816', partner: 'TeeLink Hyderabad', reason: 'Assigned manually for urgent air corridor speed', status: 'Manual-assigned' }
    ],

    productionList: [
        { orderId: 'ORD-4817', partner: 'ColorPro Bangalore', status: 'Printing', qcPhoto: 'bangalore_qc_1043.jpg' },
        { orderId: 'ORD-4818', partner: 'PrintX Chennai', status: 'Curing', qcPhoto: 'mumbai_qc_1045.jpg' },
        { orderId: 'ORD-4814', partner: 'PrintX Delhi', status: 'QC Passed', qcPhoto: 'chennai_qc_1040.jpg' }
    ],

    shipmentsList: [
        { orderId: 'ORD-4816', courier: 'Delhivery', awb: 'DELH987654321', status: 'In Transit' },
        { orderId: 'ORD-4815', courier: 'Shiprocket', awb: 'SHIP881273921', status: 'Out for Delivery' },
        { orderId: 'ORD-4811', courier: 'Delhivery', awb: 'DELH331902882', status: 'Delivered' }
    ],

    init() {
        console.log('Orders Initialized');
        this.renderTable();
        this.initFilters();
        window._Orders = this;
    },

    onPageLoad(pageId) {
        console.log('Orders page load delegate called for:', pageId);
        switch (pageId) {
            case 'orders':
                this.renderTable();
                break;
            case 'bulk-orders':
                this.renderBulkOrders();
                break;
            case 'partner-assign':
                this.renderPartnerAssignment();
                break;
            case 'production':
                this.renderProduction();
                break;
            case 'shipments':
                this.renderShipments();
                break;
            case 'order-detail':
                this.renderOrderDetail();
                break;
        }
    },

    renderTable(filterData = this.data) {
        const tbody = document.getElementById('orders-tbody');
        if (!tbody) return;

        tbody.innerHTML = ''; // Clear

        filterData.forEach(order => {
            const tr = document.createElement('tr');

            // Checkbox
            const checkCell = document.createElement('td');
            checkCell.innerHTML = '<input type="checkbox" style="cursor:pointer;" />';

            // ID
            const idCell = document.createElement('td');
            idCell.innerHTML = `<strong>${order.id}</strong>`;

            // Customer
            const customerCell = document.createElement('td');
            customerCell.textContent = order.customer;

            // Items (T-shirts Preview Stack)
            const itemsCell = document.createElement('td');
            itemsCell.innerHTML = this.getGarmentStackHtml(order.colors, order.extra, order.items);

            // Value
            const valueCell = document.createElement('td');
            valueCell.textContent = order.value;

            // Partner Logo & City block
            const partnerCell = document.createElement('td');
            partnerCell.innerHTML = this.getPartnerBlockHtml(order);

            // Date
            const dateCell = document.createElement('td');
            dateCell.textContent = order.date;

            // Status Badge
            const statusCell = document.createElement('td');
            statusCell.innerHTML = this.getStatusBadgeHtml(order.status);

            // Actions Eye & Menu
            const actionCell = document.createElement('td');
            actionCell.innerHTML = this.getActionCellHtml(order.id);

            tr.append(checkCell, idCell, customerCell, itemsCell, valueCell, partnerCell, dateCell, statusCell, actionCell);
            tbody.appendChild(tr);
        });

        // Update counts and elements matching the mockup
        const totalCountSpan = document.querySelector('.orders-pagination-text');
        if (totalCountSpan) {
            totalCountSpan.textContent = `Showing 1 to ${filterData.length} of ${this.data.length} orders`;
        }
    },

    getGarmentStackHtml(colors, extra, itemsCount) {
        let html = '<div class="garment-stack">';
        colors.slice(0, 3).forEach(c => {
            html += `<svg width="18" height="18" viewBox="0 0 24 24" fill="${c}" style="flex-shrink:0;">
                <path d="M18 2h-3a1 1 0 0 0-1 1 2 2 0 0 1-4 0 1 1 0 0 0-1-1H6a2 2 0 0 0-2 2v3a2 2 0 0 0 .58 1.42l2 2a1 1 0 0 1 .42.78V19a3 3 0 0 0 3 3h4v-3h2v3h4a3 3 0 0 0 3-3v-7.8a1 1 0 0 1 .42-.78l2-2A2 2 0 0 0 20 7V4a2 2 0 0 0-2-2z"/>
            </svg>`;
        });
        if (itemsCount === 1) {
            html += `<span class="garment-single-text">1</span>`;
        } else if (extra > 0) {
            html += `<span class="garment-badge">+${extra}</span>`;
        }
        html += '</div>';
        return html;
    },

    getPartnerBlockHtml(order) {
        return `
            <div class="orders-partner-block">
                <div class="orders-partner-logo" style="background: ${order.partnerLogoBg}; color: ${order.partnerLogoColor};">
                    ${order.partner[0]}
                </div>
                <div class="orders-partner-details">
                    <span class="orders-partner-name">${order.partner}</span>
                    <span class="orders-partner-city">${order.partnerCity}</span>
                </div>
            </div>
        `;
    },

    getStatusBadgeHtml(status) {
        let bg, fg;
        const s = status.toUpperCase();
        if (s === 'FLAGGED') { bg = '#fef2f2'; fg = '#ef4444'; }
        else if (s === 'PRINTING') { bg = '#ecfdf5'; fg = '#10b981'; }
        else if (s === 'SHIPPED') { bg = '#eff6ff'; fg = '#3b82f6'; }
        else if (s === 'DELIVERED') { bg = '#ecfdf5'; fg = '#10b981'; }
        else if (s === 'QC PENDING') { bg = '#fffbeb'; fg = '#f59e0b'; }
        else { bg = '#f1f5f9'; fg = '#64748b'; }

        return `<span style="background: ${bg}; color: ${fg}; font-weight: 700; font-size: 10px; border-radius: 6px; padding: 4px 8px; text-transform: uppercase;">${status}</span>`;
    },

    getActionCellHtml(orderId) {
        return `
            <div style="display:flex; align-items:center; gap:8px;">
                <button class="orders-icon-btn" style="width:28px; height:28px; border-radius:8px;" onclick="window._Orders.openDetail('${orderId}')">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </button>
                <button class="orders-icon-btn" style="width:28px; height:28px; border-radius:8px;" onclick="showToast('Actions menu for ${orderId}', 'info')">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                </button>
            </div>
        `;
    },

    initFilters() {
        const searchInput = document.getElementById('order-search-main');
        const statusFilter = document.getElementById('order-status-filter');
        const partnerFilter = document.getElementById('order-partner-filter');
        const segmentFilter = document.getElementById('order-segment-filter');
        
        const tabs = document.querySelectorAll('.orders-tab');

        const applyFilters = () => {
            const searchVal = searchInput ? searchInput.value.toLowerCase() : '';
            const statusVal = statusFilter ? statusFilter.value.toLowerCase() : 'all';
            const partnerVal = partnerFilter ? partnerFilter.value : 'all';
            const segmentVal = segmentFilter ? segmentFilter.value : 'all';

            // Find active tab filter
            const activeTab = document.querySelector('.orders-tab.active');
            const tabVal = activeTab ? activeTab.dataset.tab : 'all';

            const filtered = this.data.filter(o => {
                const matchesSearch = o.id.toLowerCase().includes(searchVal) || o.customer.toLowerCase().includes(searchVal) || o.partner.toLowerCase().includes(searchVal);
                
                const matchesStatus = statusVal === 'all' || o.status.toLowerCase() === statusVal;
                
                const matchesPartner = partnerVal === 'all' || o.partner === partnerVal;
                
                const matchesSegment = segmentVal === 'all' || o.segment === segmentVal;

                let matchesTab = true;
                if (tabVal !== 'all') {
                    matchesTab = o.status.toLowerCase() === tabVal;
                }

                return matchesSearch && matchesStatus && matchesPartner && matchesSegment && matchesTab;
            });

            this.renderTable(filtered);
        };

        // Inputs & Selects
        if (searchInput) searchInput.addEventListener('input', applyFilters);
        if (statusFilter) statusFilter.addEventListener('change', () => {
            // Sync with tabs
            const tabStatus = statusFilter.value;
            tabs.forEach(t => {
                if (t.dataset.tab === tabStatus) {
                    tabs.forEach(x => x.classList.remove('active'));
                    t.classList.add('active');
                }
            });
            applyFilters();
        });
        if (partnerFilter) partnerFilter.addEventListener('change', applyFilters);
        if (segmentFilter) segmentFilter.addEventListener('change', applyFilters);

        // Tabs Clicking
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Sync select filter
                if (statusFilter) {
                    const selectVal = tab.dataset.tab === 'all' ? 'all' : tab.dataset.tab;
                    statusFilter.value = selectVal;
                }
                
                applyFilters();
            });
        });
    },

    openDetail(orderId) {
        if (window.showToast) window.showToast(`Loading details for ${orderId}`, 'info');
        
        // Open order detail page
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        const detailPage = document.getElementById('page-order-detail');
        if (detailPage) {
            detailPage.classList.add('active');
            this.renderOrderDetail(orderId);
        }
    },

    renderBulkOrders() {
        const page = document.getElementById('page-bulk-orders');
        if (!page) return;

        const table = page.querySelector('.data-table');
        if (!table) return;

        let tbody = table.querySelector('tbody');
        if (!tbody) {
            tbody = document.createElement('tbody');
            table.appendChild(tbody);
        }

        tbody.innerHTML = this.bulkInquiries.map(b => `
            <tr>
                <td class="primary" style="font-weight: 600; color: #0f172a; padding: 12px;">${b.org}</td>
                <td style="padding: 12px; font-weight: 500;">${b.qty} units</td>
                <td style="padding: 12px;"><span class="pill ${this.getStatusClass(b.status)}">${b.status}</span></td>
                <td style="padding: 12px;">
                    <button class="btn btn-sm" onclick="showToast('Loading inquiry: ${b.org}', 'info')">View Details</button>
                </td>
            </tr>
        `).join('');
    },

    renderPartnerAssignment() {
        const page = document.getElementById('page-partner-assign');
        if (!page) return;
    },

    renderProduction() {
    },

    renderShipments() {
    },

    getStatusClass(status) {
        const map = {
            'Printing': 'pill-teal',
            'Shipped': 'pill-teal',
            'Delivered': 'pill-teal',
            'Flagged': 'pill-red',
            'Approved': 'pill-teal',
            'Quotation Sent': 'pill-amber',
            'Under Review': 'pill-amber',
            'In Transit': 'pill-teal',
            'Out for Delivery': 'pill-teal',
            'QC Passed': 'pill-teal',
            'Curing': 'pill-amber'
        };
        return map[status] || 'pill-amber';
    },

    renderOrderDetail(orderId = 'ORD-4818') {
        const page = document.getElementById('page-order-detail');
        if (!page) return;

        const order = this.data.find(o => o.id === orderId) || this.data[0];

        const topbar = page.querySelector('.topbar-left');
        if (topbar) {
            topbar.innerHTML = `
                <div class="page-title" style="font-family:'Outfit'; font-weight:700;">Order Details: ${order.id}</div>
                <div class="page-sub">Customer: ${order.customer} &middot; Status: ${order.status}</div>
            `;
        }

        const grid = page.querySelector('.grid-2');
        if (grid) {
            grid.innerHTML = `
                <div class="card" style="border-radius:20px; border: 1px solid #e2e8f0; padding: 20px;">
                    <h3 style="margin-bottom:15px; border-bottom:1px solid #f1f5f9; padding-bottom:8px; font-family:'Outfit'; font-weight:700;">🛒 Ordered Items</h3>
                    <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                        <span>3x Noir Bio-Wash Tee (L) - Custom Printed</span>
                        <strong>${order.value}</strong>
                    </div>
                    <hr style="border:0; border-top:1px solid #f1f5f9; margin:15px 0;"/>
                    <div style="display:flex; justify-content:space-between;">
                        <span>Subtotal</span>
                        <span>${order.value}</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-top:5px; color:#22c55e;">
                        <span>Free Shipping</span>
                        <span>₹0.00</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; font-weight:bold; font-size:1.1rem; margin-top:10px;">
                        <span>Total Paid</span>
                        <span>${order.value}</span>
                    </div>
                </div>
                <div class="card" style="border-radius:20px; border: 1px solid #e2e8f0; padding: 20px;">
                    <h3 style="margin-bottom:15px; border-bottom:1px solid #f1f5f9; padding-bottom:8px; font-family:'Outfit'; font-weight:700;">📍 Fulfillment Details</h3>
                    <p style="margin-bottom:10px;"><strong>Shipping Address:</strong><br/>123 MG Road, ${order.partnerCity}, India</p>
                    <p style="margin-bottom:10px;"><strong>Assigned Partner:</strong> ${order.partner} (${order.partnerCity})</p>
                    <p style="margin-bottom:15px;"><strong>Payment Status:</strong> Paid via UPI (Razorpay)</p>
                    <div style="display:flex; gap:8px;">
                        <button class="btn btn-primary" onclick="showToast('GST compliant invoice downloaded! 📄', 'success')" style="border-radius:8px; font-weight:600;">Download Invoice</button>
                        <button class="btn btn-teal" onclick="showToast('AI recalculating partner routing...', 'info')" style="border-radius:8px; font-weight:600;">Re-route Order</button>
                    </div>
                </div>
            `;
        }
    }
};

Orders.init();

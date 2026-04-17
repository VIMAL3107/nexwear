/**
 * ══════════════════════════════════════════════════════
 * ORDERS MODULE
 * ══════════════════════════════════════════════════════
 */

export const Orders = {
    data: [
        { id: 'ORD-4818', customer: 'Anjali R.', items: 2, value: '₹4,820', partner: 'PrintX', status: 'Flagged', date: '09 Apr' },
        { id: 'ORD-4817', customer: 'Vikram S.', items: 1, value: '₹1,250', partner: 'ColorPro', status: 'Printing', date: '10 Apr' },
        { id: 'ORD-4816', customer: 'Priya M.', items: 3, value: '₹6,400', partner: 'TeeLink', status: 'Shipped', date: '10 Apr' },
        { id: 'ORD-4815', customer: 'Karan J.', items: 1, value: '₹980', partner: 'InkMate', status: 'Delivered', date: '08 Apr' }
    ],

    init() {
        console.log('Orders Initialized');
        this.renderTable();
        this.initFilters();
    },

    renderTable(filterData = this.data) {
        const tbody = document.getElementById('orders-tbody');
        if (!tbody) return;

        tbody.innerHTML = filterData.map(order => `
            <tr>
                <td class="primary">${order.id}</td>
                <td>${order.customer}</td>
                <td>${order.items}</td>
                <td>${order.value}</td>
                <td>${order.partner}</td>
                <td>${order.date}</td>
                <td><span class="pill ${this.getStatusClass(order.status)}">${order.status}</span></td>
                <td><button class="btn" onclick="showToast('Loading details for ${order.id}')">View</button></td>
            </tr>
        `).join('');
    },

    getStatusClass(status) {
        const map = {
            'Printing': 'pill-teal',
            'Shipped': 'pill-teal',
            'Delivered': 'pill-teal',
            'Flagged': 'pill-red'
        };
        return map[status] || 'pill-amber';
    },

    initFilters() {
        const search = document.getElementById('order-search');
        if (!search) return;

        search.addEventListener('input', (e) => {
            const val = e.target.value.toLowerCase();
            const filtered = this.data.filter(o =>
                o.id.toLowerCase().includes(val) ||
                o.customer.toLowerCase().includes(val)
            );
            this.renderTable(filtered);
        });
    }
};

Orders.init();

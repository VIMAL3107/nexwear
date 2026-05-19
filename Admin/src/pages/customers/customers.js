/**
 * ══════════════════════════════════════════════════════
 * CUSTOMERS MODULE
 * ══════════════════════════════════════════════════════
 */

export const Customers = {
    data: [
        { name: 'Arjun Kumar', city: 'Chennai', orders: 12, spent: '₹14,200', segment: 'College', status: 'Active' },
        { name: 'Priya Sharma', city: 'Mumbai', orders: 4, spent: '₹5,600', segment: 'Corporate', status: 'Active' },
        { name: 'Sameer V.', city: 'Delhi', orders: 1, spent: '₹480', segment: 'Gen Z', status: 'New' }
    ],

    init() {
        console.log('Customers Initialized');
        this.renderTable();
    },

    renderTable() {
        const tbody = document.getElementById('customers-tbody');
        if (!tbody) return;

        tbody.innerHTML = '';

        this.data.forEach(c => {
            const tr = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.className = 'primary';
            nameCell.textContent = c.name;

            const cityCell = document.createElement('td');
            cityCell.textContent = c.city;

            const ordersCell = document.createElement('td');
            ordersCell.textContent = c.orders;

            const spentCell = document.createElement('td');
            spentCell.textContent = c.spent;

            const segmentCell = document.createElement('td');
            const segmentPill = document.createElement('span');
            segmentPill.className = 'pill pill-teal';
            segmentPill.textContent = c.segment;
            segmentCell.appendChild(segmentPill);

            const dateCell = document.createElement('td');
            dateCell.textContent = '10 Apr 2026';

            const statusCell = document.createElement('td');
            const statusPill = document.createElement('span');
            statusPill.className = 'pill pill-teal';
            statusPill.textContent = c.status;
            statusCell.appendChild(statusPill);

            const actionCell = document.createElement('td');
            const historyBtn = document.createElement('button');
            historyBtn.className = 'btn';
            historyBtn.textContent = 'History';
            actionCell.appendChild(historyBtn);

            tr.append(nameCell, cityCell, ordersCell, spentCell, segmentCell, dateCell, statusCell, actionCell);
            tbody.appendChild(tr);
        });
    }
};

Customers.init();

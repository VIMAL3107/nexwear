/**
 * ══════════════════════════════════════════════════════
 * PRODUCTS MODULE
 * ══════════════════════════════════════════════════════
 */

export const Products = {
    data: [
        { type: 'Cotton Premium (Bio-wash)', gsm: 180, cloth: '₹180', print: '₹120', commission: '20%', total: '₹300', status: 'Active' },
        { type: 'Heavyweight Oversized', gsm: 240, cloth: '₹220', print: '₹140', commission: '22%', total: '₹360', status: 'Active' },
        { type: 'Performance Polyester', gsm: 140, cloth: '₹120', print: '₹100', commission: '25%', total: '₹220', status: 'Active' },
        { type: 'French Terry (Sweatshirt)', gsm: 320, cloth: '₹380', print: '₹180', commission: '18%', total: '₹560', status: 'Active' },
        { type: 'Sustainable Bamboo', gsm: 160, cloth: '₹240', print: '₹120', commission: '20%', total: '₹360', status: 'Active' }
    ],

    init() {
        console.log('Products Initialized');
        this.renderTable();
    },

    renderTable() {
        const tbody = document.getElementById('products-tbody');
        if (!tbody) return;

        tbody.innerHTML = this.data.map(p => `
            <tr>
                <td class="primary">${p.type}</td>
                <td>${p.gsm}</td>
                <td>${p.cloth}</td>
                <td>${p.print}</td>
                <td>${p.commission}</td>
                <td>${p.total}</td>
                <td><span class="pill pill-teal">${p.status}</span></td>
                <td><button class="btn" onclick="showToast('Edit mode for ${p.type}')">Edit</button></td>
            </tr>
        `).join('');
    }
};

Products.init();

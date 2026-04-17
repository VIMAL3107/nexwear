/**
 * ══════════════════════════════════════════════════════
 * DESIGNS MODULE
 * ══════════════════════════════════════════════════════
 */

export const Designs = {
    data: [
        { name: 'Chennai Pride', orders: 124, emoji: '👕', style: 'Regional' },
        { name: 'Cyberpunk Red', orders: 85, emoji: '👕', style: 'Aesthetic' },
        { name: 'Minimal Zen', orders: 62, emoji: '👕', style: 'Minimal' },
        { name: 'Folk Pattern', orders: 48, emoji: '👕', style: 'Regional' },
        { name: "University '26", orders: 34, emoji: '👕', style: 'College' }
    ],

    init() {
        console.log('Designs Initialized');
        this.renderGrid();
    },

    renderGrid() {
        const grid = document.getElementById('designs-grid');
        if (!grid) return;

        grid.innerHTML = this.data.map(d => `
            <div class="design-card">
                <div class="design-art">${d.emoji}</div>
                <div class="design-name">${d.name}</div>
                <div class="design-cnt">${d.orders} orders</div>
            </div>
        `).join('');
    }
};

Designs.init();

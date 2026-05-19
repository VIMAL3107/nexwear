/**
 * ══════════════════════════════════════════════════════
 * DESIGNS MODULE
 * ══════════════════════════════════════════════════════
 */

export const Designs = {
    data: [
        { id: 1, name: 'Chennai Pride', orders: 124, emoji: '🐅', style: 'Regional', bg: '#1e1b3a' },
        { id: 2, name: 'Cyberpunk Red', orders: 85, emoji: '🦾', style: 'Aesthetic', bg: '#2b0d1e' },
        { id: 3, name: 'Minimal Zen', orders: 62, emoji: '🎋', style: 'Minimal', bg: '#0d2a1f' },
        { id: 4, name: 'Folk Pattern', orders: 48, emoji: '💮', style: 'Regional', bg: '#2d1e0d' },
        { id: 5, name: "University '26", orders: 34, emoji: '🎓', style: 'College', bg: '#0d1e2a' },
        { id: 6, name: 'Synthwave Sunset', orders: 77, emoji: '🌅', style: 'Aesthetic', bg: '#2a0d25' },
        { id: 7, name: 'Tech Minimalist', orders: 53, emoji: '📐', style: 'Minimal', bg: '#1c1c1c' }
    ],

    approvals: [
        { id: 'DS-9901', name: 'Cyberpunk Tiger Logo', designer: 'Rohan Dev (Developer)', similarity: '15%', copyright: 'Pass', image: '🐅', status: 'Pending' },
        { id: 'DS-9902', name: 'Vintage College Badge', designer: 'Sneha K. (User)', similarity: '84%', copyright: 'Flagged (Harvard Shield Similarity)', image: '🛡️', status: 'Flagged' },
        { id: 'DS-9903', name: 'Neo-Folk Motif', designer: 'Kabir Lal (Partner)', similarity: '42%', copyright: 'Needs Verification', image: '🏵️', status: 'Pending' }
    ],

    init() {
        console.log('Designs Initialized');
        this.renderGrid();
        this.initStyleFilters();
        window._Designs = this;
    },

    onPageLoad(pageId) {
        console.log('Designs page load delegate called for:', pageId);
        switch (pageId) {
            case 'designs':
                this.renderGrid();
                break;
            case 'design-approval':
                this.renderDesignApproval();
                break;
            case 'plagiarism-reports':
                this.renderPlagiarismReports();
                break;
        }
    },

    renderGrid(filterStyle = 'All') {
        const grid = document.getElementById('designs-grid');
        if (!grid) return;

        let filtered = this.data;
        if (filterStyle === 'Flagged (3)') {
            filtered = this.data.slice(0, 2); // Simulating filtered subset
        } else if (filterStyle !== 'All') {
            filtered = this.data.filter(d => d.style === filterStyle);
        }

        grid.innerHTML = filtered.map(d => `
            <div class="design-card" style="cursor:pointer;" onclick="showToast('Loading details for design: ${d.name}', 'info')">
                <div class="design-art" style="background:${d.bg}">${d.emoji}</div>
                <div class="design-name">${d.name}</div>
                <div class="design-cnt">${d.orders} orders</div>
            </div>
        `).join('');
    },

    initStyleFilters() {
        const segRow = document.querySelector('#page-designs .seg-row');
        if (!segRow) return;

        const btns = segRow.querySelectorAll('.seg-btn');
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                btns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                let styleParam = btn.textContent.trim();
                // Map buttons to correct style categories
                if (styleParam === 'Folk / regional') styleParam = 'Regional';
                if (styleParam === 'Y2K / aesthetic') styleParam = 'Aesthetic';
                
                this.renderGrid(styleParam);
            });
        });
    },

    renderDesignApproval() {
        const page = document.getElementById('page-design-approval');
        if (!page) return;

        const card = page.querySelector('.card');
        if (!card) return;

        card.innerHTML = `
            <h3 style="margin-bottom:12px;">AI-Driven Creative Workflow Queue</h3>
            <p style="font-size:12px; color:#666; margin-bottom:15px;">Moderate user-submitted or automated generative prints before catalogue publishing.</p>
            
            <div style="display:flex; flex-direction:column; gap:12px;">
                ${this.approvals.map(a => `
                    <div style="padding:15px; border:1px solid #eee; border-radius:8px; background:#f9f9f9; display:flex; justify-content:space-between; align-items:center;">
                        <div style="display:flex; gap:15px; align-items:center;">
                            <div style="width:50px; height:50px; border-radius:6px; background:#f0f0f0; display:flex; align-items:center; justify-content:center; font-size:24px;">
                                ${a.image}
                            </div>
                            <div>
                                <strong>${a.name}</strong> (${a.id})
                                <div style="font-size:11px; color:#555; margin-top:2px;">Designer: ${a.designer} | Similarity Score: <strong style="color:${parseFloat(a.similarity) > 50 ? 'red' : 'inherit'};">${a.similarity}</strong></div>
                            </div>
                        </div>
                        
                        <div style="display:flex; gap:6px;">
                            ${a.status === 'Flagged' ? `
                                <span class="pill pill-red" style="font-size:10px; height:20px; display:flex; align-items:center;">Flagged</span>
                            ` : `
                                <span class="pill pill-amber" style="font-size:10px; height:20px; display:flex; align-items:center;">Pending</span>
                            `}
                            <button class="btn btn-teal btn-sm" onclick="showToast('Design approved and synced to storefront! 👕', 'success'); this.parentElement.parentElement.style.opacity = '0.5';">Approve</button>
                            <button class="btn btn-red btn-sm" onclick="showToast('Design rejected. Copyright breach alert logged.', 'error'); this.parentElement.parentElement.style.opacity = '0.5';">Reject</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderPlagiarismReports() {
        const page = document.getElementById('page-plagiarism-reports');
        if (!page) return;

        const card = page.querySelector('.card');
        if (!card) return;

        card.innerHTML = `
            <div class="partner-row" style="display:flex; flex-direction:column; gap:15px; padding:15px;">
                <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding-bottom:10px; width:100%;">
                    <div>
                        <strong>Copyright Scanner: AI-992 (Vintage College Badge)</strong>
                        <div style="font-size:11px; color:#666; margin-top:4px;">Requested by: Sneha K. (User Portfolio)</div>
                    </div>
                    <span class="pill pill-red">High Risk Flag</span>
                </div>
                
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin:10px 0; width:100%;">
                    <div style="padding:12px; background:#fff; border:1px solid #eee; border-radius:6px;">
                        <h4 style="margin:0 0 8px 0; font-size:12px; color:#555;">Uploaded Design</h4>
                        <div style="font-size:36px; text-align:center; padding:10px; background:#f9f9f9; border-radius:4px;">🛡️</div>
                    </div>
                    <div style="padding:12px; background:#fff; border:1px solid #eee; border-radius:6px;">
                        <h4 style="margin:0 0 8px 0; font-size:12px; color:#555;">Trademark Match</h4>
                        <div style="font-size:36px; text-align:center; padding:10px; background:#f9f9f9; border-radius:4px;">🛡️</div>
                        <div style="font-size:10px; text-align:center; color:red; font-weight:bold; margin-top:4px;">84% Similarity to Harvard Shield</div>
                    </div>
                </div>

                <div style="display:flex; gap:8px; justify-content:flex-end; width:100%;">
                    <button class="btn" onclick="showToast('Requesting manual human arbiter...', 'info')">Escalate to Legal</button>
                    <button class="btn btn-red" onclick="showToast('Plagiarism report resolved: Design permanently rejected.', 'error')">Reject Design</button>
                </div>
            </div>
        `;
    }
};

Designs.init();

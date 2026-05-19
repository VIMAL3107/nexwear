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

    variants: [
        { color: 'Midnight Black', size: 'S', stock: 18, sku: 'NXW-TEE-BLK-S' },
        { color: 'Midnight Black', size: 'M', stock: 25, sku: 'NXW-TEE-BLK-M' },
        { color: 'Midnight Black', size: 'L', stock: 12, sku: 'NXW-TEE-BLK-L' },
        { color: 'Earthy Olive', size: 'M', stock: 32, sku: 'NXW-TEE-OLV-M' },
        { color: 'Earthy Olive', size: 'L', stock: 45, sku: 'NXW-TEE-OLV-L' },
        { color: 'Off-White', size: 'M', stock: 15, sku: 'NXW-TEE-OWH-M' }
    ],

    reviews: [
        { id: 1, name: 'Rahul K.', rating: 5, comment: 'Incredible heavyweight drape. Feels like an international luxury brand!', product: 'Heavyweight Oversized', status: 'Approved' },
        { id: 2, name: 'Pooja S.', rating: 4, comment: 'Color is lovely, fabric is very soft. Would buy again!', product: 'Sustainable Bamboo', status: 'Pending' },
        { id: 3, name: 'Arjun M.', rating: 5, comment: 'Premium feel, standard fit is excellent.', product: 'Cotton Premium', status: 'Pending' }
    ],

    init() {
        console.log('Products Initialized');
        this.renderTable();
        window._Products = this;
    },

    onPageLoad(pageId) {
        console.log('Products page load delegate called for:', pageId);
        switch (pageId) {
            case 'products':
                this.renderTable();
                break;
            case 'variants':
                this.renderVariants();
                break;
            case 'seo':
                this.renderSEO();
                break;
            case 'bulk-import':
                this.renderBulkImport();
                break;
            case 'reviews':
                this.renderReviews();
                break;
        }
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
                <td><button class="btn" onclick="showToast('Editing ${p.type} pricing model...')">Edit</button></td>
            </tr>
        `).join('');
    },

    renderVariants() {
        const page = document.getElementById('page-variants');
        if (!page) return;

        const tbody = page.querySelector('tbody');
        if (!tbody) return;

        tbody.innerHTML = this.variants.map(v => `
            <tr>
                <td class="primary"><span style="display:inline-block; width:12px; height:12px; border-radius:50%; background:${v.color === 'Midnight Black' ? '#111' : v.color === 'Earthy Olive' ? '#4f5d2f' : '#f5f5f4'}; margin-right:8px; border:1px solid #ddd;"></span>${v.color}</td>
                <td style="font-weight:bold;">${v.size}</td>
                <td>
                    <span style="font-weight:bold; color:${v.stock < 15 ? 'red' : 'inherit'};">${v.stock} units</span>
                </td>
                <td style="font-family:monospace; font-size:12px; color:#555;">${v.sku}</td>
            </tr>
        `).join('');
    },

    renderSEO() {
        const page = document.getElementById('page-seo');
        if (!page) return;

        const card = page.querySelector('.card');
        if (!card) return;

        card.innerHTML = `
            <div class="form-group" style="margin-bottom:15px;">
                <label class="form-label" style="font-weight:bold; margin-bottom:5px; display:block;">Meta Title</label>
                <input class="form-input" id="seo-meta-title" style="width:100%; padding:10px; border-radius:6px; border:1px solid #ddd;" value="Noir Essence Premium Heavyweight Cotton Tee | Nexwear" />
                <span style="font-size:11px; color:#666;">Standard page title seen on search engine listings (Limit: 60 characters)</span>
            </div>
            
            <div class="form-group" style="margin-bottom:15px;">
                <label class="form-label" style="font-weight:bold; margin-bottom:5px; display:block;">Meta Description</label>
                <textarea class="form-input" id="seo-meta-desc" style="width:100%; padding:10px; border-radius:6px; border:1px solid #ddd; height:80px; resize:none;">Discover the ultra-premium Noir Essence heavyweight tee, custom tailored from 240GSM bio-wash organic cotton. Built for sustainability, design longevity, and extreme comfort.</textarea>
                <span style="font-size:11px; color:#666;">Snippet summarising search index page details (Limit: 160 characters)</span>
            </div>

            <div class="form-group" style="margin-bottom:20px;">
                <label class="form-label" style="font-weight:bold; margin-bottom:5px; display:block;">Index Keywords</label>
                <input class="form-input" id="seo-keywords" style="width:100%; padding:10px; border-radius:6px; border:1px solid #ddd;" value="heavyweight tee, streetwear india, bio wash cotton, organic premium, nexwear catalog" />
            </div>

            <button class="btn btn-primary" onclick="showToast('SEO Metadata successfully synced to search engines! 🚀', 'success')">Save SEO Data</button>
        `;
    },

    renderBulkImport() {
        const page = document.getElementById('page-bulk-import');
        if (!page) return;

        const card = page.querySelector('.card');
        if (!card) return;

        card.innerHTML = `
            <div style="text-align:center; padding:30px 20px;">
                <div style="font-size:54px; margin-bottom:10px;">📄</div>
                <h3 style="margin-bottom:8px;">Sync Catalogue via CSV</h3>
                <p style="font-size:13px; color:#666; max-width:400px; margin:0 auto 20px;">
                    Upload a CSV file containing your product configurations, variant mappings, stock metrics, and print price specifications.
                </p>
                
                <div id="csv-drop-zone" style="border:2px dashed var(--teal); border-radius:8px; padding:30px; background:rgba(45,203,142,0.02); cursor:pointer; margin-bottom:20px; transition:all 0.2s;">
                    <span style="font-weight:bold; display:block; margin-bottom:4px;">Drag & Drop your CSV file here</span>
                    <span style="font-size:12px; color:#777;">or click to browse local folders</span>
                    <input type="file" id="csv-file-input" style="display:none;" accept=".csv"/>
                </div>

                <div style="display:flex; gap:10px; justify-content:center;">
                    <button class="btn" onclick="showToast('Template CSV downloaded successfully', 'info')">Download CSV Template</button>
                    <button class="btn btn-primary" onclick="document.getElementById('csv-file-input').click()">Choose File</button>
                </div>
            </div>
        `;

        // Wire up drop zone click
        const dropZone = card.querySelector('#csv-drop-zone');
        const fileInput = card.querySelector('#csv-file-input');

        dropZone.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                showToast(`Loaded: ${file.name} (${(file.size/1024).toFixed(1)} KB)`, 'success');
                setTimeout(() => showToast(`Bulk imported ${Math.floor(Math.random()*15) + 5} products! ✅`, 'success'), 1200);
            }
        });
    },

    renderReviews() {
        const page = document.getElementById('page-reviews');
        if (!page) return;

        const card = page.querySelector('.card');
        if (!card) return;

        card.innerHTML = `
            <div style="display:flex; flex-direction:column; gap:12px;">
                ${this.reviews.map(r => `
                    <div style="padding:15px; border:1px solid #eee; border-radius:8px; background:#f9f9f9; display:flex; justify-content:space-between; align-items:flex-start;">
                        <div>
                            <div style="display:flex; gap:8px; align-items:center;">
                                <strong style="font-size:14px;">${r.name}</strong>
                                <span style="font-size:11px; color:#777;">Product: ${r.product}</span>
                                <span class="pill ${r.status === 'Approved' ? 'pill-teal' : 'pill-amber'}" style="font-size:10px; padding:2px 6px;">${r.status}</span>
                            </div>
                            <div style="color:var(--amber); font-size:13px; margin:4px 0;">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
                            <p style="margin:0; font-size:13px; color:#444; line-height:1.4;">"${r.comment}"</p>
                        </div>
                        
                        ${r.status === 'Pending' ? `
                            <div style="display:flex; gap:4px;">
                                <button class="btn btn-teal btn-sm" onclick="showToast('Review approved for site display!', 'success'); this.parentElement.parentElement.style.opacity = '0.5';">Approve</button>
                                <button class="btn btn-red btn-sm" onclick="showToast('Review rejected and moderated.', 'error'); this.parentElement.parentElement.style.opacity = '0.5';">Reject</button>
                            </div>
                        ` : `
                            <button class="btn btn-sm" onclick="showToast('Review already live in catalogue', 'info')">Moderated</button>
                        `}
                    </div>
                `).join('')}
            </div>
        `;
    }
};

Products.init();

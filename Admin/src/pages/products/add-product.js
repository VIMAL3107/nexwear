/**
 * ══════════════════════════════════════════════════════
 * ADD NEW DRESS MODULE
 * ══════════════════════════════════════════════════════
 */

export const AddProduct = {
    initialized: false,

    // Called by app.js when the add-product page is navigated to
    init() {
        if (this.initialized) return;
        this.initialized = true;
        console.log('AddProduct Module Initialized');
        this.initPriceCalculator();
        this.initUploadZone();
        // Expose to window for inline onclick handlers
        window._AddProduct = this;
    },

    // Live price calculator — updates "Customer pays" as user types
    initPriceCalculator() {
        const clothCost = document.getElementById('ap-cloth-cost');
        const printCost = document.getElementById('ap-print-cost');
        const commission = document.getElementById('ap-commission');
        const previewCost = document.getElementById('ap-preview-cost');
        const previewComm = document.getElementById('ap-preview-comm');
        const previewTotal = document.getElementById('ap-preview-total');

        if (!clothCost) return; // page not in DOM yet

        const recalc = () => {
            const cloth = parseFloat(clothCost.value) || 0;
            const print = parseFloat(printCost.value) || 0;
            const pct = parseFloat(commission.value) || 0;
            const base = cloth + print;
            const comm = Math.round(base * pct / 100);
            const total = base + comm;

            previewCost.textContent = `₹${base.toLocaleString('en-IN')}`;
            previewComm.textContent = `₹${comm.toLocaleString('en-IN')}`;
            previewTotal.textContent = `₹${total.toLocaleString('en-IN')}`;
        };

        [clothCost, printCost, commission].forEach(el => el.addEventListener('input', recalc));
    },

    // Drag-and-drop design file upload
    initUploadZone() {
        const zone = document.getElementById('upload-zone');
        if (!zone) return;

        zone.addEventListener('dragover', e => {
            e.preventDefault();
            zone.style.borderColor = 'var(--teal)';
            zone.style.background = 'rgba(45,203,142,0.04)';
        });

        zone.addEventListener('dragleave', () => {
            zone.style.borderColor = '';
            zone.style.background = '';
        });

        zone.addEventListener('drop', e => {
            e.preventDefault();
            zone.style.borderColor = '';
            zone.style.background = '';
            const file = e.dataTransfer.files[0];
            if (file) {
                zone.querySelector('.upload-title').textContent = `✅ ${file.name}`;
                zone.querySelector('.upload-sub').textContent = `${(file.size / 1024).toFixed(1)} KB — ready to upload`;
                window.showToast?.(`Design "${file.name}" loaded`, 'success');
            }
        });
    },

    // Validate and publish
    publish() {
        const name = document.getElementById('ap-name')?.value?.trim();
        const category = document.getElementById('ap-category')?.value;
        const cloth = document.getElementById('ap-cloth')?.value;
        const partner = document.getElementById('ap-partner')?.value;

        if (!name) return window.showToast?.('Please enter a product name', 'error');
        if (!category) return window.showToast?.('Please select a category', 'error');
        if (!cloth) return window.showToast?.('Please select a cloth type', 'error');
        if (!partner) return window.showToast?.('Please assign a print partner', 'error');

        window.showToast?.(`"${name}" published to catalogue ✅`, 'success');
        setTimeout(() => window.showToast?.('Partner notified — will receive the design file', 'info'), 1200);
    },

    saveDraft() {
        const name = document.getElementById('ap-name')?.value?.trim() || 'Untitled Product';
        window.showToast?.(`Draft saved: "${name}"`, 'info');
    }
};

// DO NOT call init() here — it will be called by app.js on page navigation
// Expose immediately so onclick handlers don't crash if called before navigation
window._AddProduct = AddProduct;

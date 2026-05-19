import mongoose from 'mongoose';

const inventoryLogSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: true
    },
    variantSku: String,
    changeType: {
        type: String,
        enum: ['Restock', 'Sale', 'Return', 'Manual Adjustment', 'Correction'],
        required: true
    },
    quantityChange: {
        type: Number,
        required: true
    },
    previousStock: Number,
    newStock: Number,
    performedBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'User' // Admin ID
    },
    reason: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const InventoryLog = mongoose.model('InventoryLog', inventoryLogSchema);

export default InventoryLog;

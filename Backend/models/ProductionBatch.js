import mongoose from 'mongoose';

const productionBatchSchema = new mongoose.Schema({
    batchNumber: {
        type: String,
        required: true,
        unique: true
    },
    partner: {
        type: mongoose.Schema.ObjectId,
        ref: 'Partner',
        required: true
    },
    orders: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Order'
    }],
    status: {
        type: String,
        enum: ['Pending', 'Cutting', 'Printing', 'Stitching', 'Finished'],
        default: 'Pending'
    },
    startedAt: {
        type: Date,
        default: Date.now
    },
    estimatedCompletion: Date,
    actualCompletion: Date,
    notes: String
});

const ProductionBatch = mongoose.model('ProductionBatch', productionBatchSchema);

export default ProductionBatch;

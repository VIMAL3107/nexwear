import mongoose from 'mongoose';

const bulkOrderSchema = new mongoose.Schema({
    organizationName: {
        type: String,
        required: true
    },
    contactPerson: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    estimatedQuantity: {
        type: Number,
        required: true
    },
    requirements: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Inquiry Received', 'Quotation Sent', 'Approved', 'In Production', 'Delivered'],
        default: 'Inquiry Received'
    },
    quotedPrice: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const BulkOrder = mongoose.model('BulkOrder', bulkOrderSchema);

export default BulkOrder;

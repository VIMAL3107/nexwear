import mongoose from 'mongoose';

const orderCancellationSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.ObjectId,
        ref: 'Order',
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    reason: {
        type: String,
        required: [true, 'Please provide a reason for cancellation']
    },
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending'
    },
    adminNotes: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const OrderCancellation = mongoose.model('OrderCancellation', orderCancellationSchema);

export default OrderCancellation;

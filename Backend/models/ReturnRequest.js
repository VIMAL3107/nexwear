import mongoose from 'mongoose';

const returnRequestSchema = new mongoose.Schema({
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
        required: [true, 'Please provide a reason for the return'],
        enum: [
            'Size issue',
            'Defective product',
            'Wrong item received',
            'Not as described',
            'Changed mind',
            'Other'
        ]
    },
    description: {
        type: String
    },
    images: [String], // Array of photo URLs showing defects
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected', 'Item Received', 'Refunded', 'Exchange Sent'],
        default: 'Pending'
    },
    type: {
        type: String,
        enum: ['Return', 'Exchange'],
        required: true
    },
    resolutionNotes: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const ReturnRequest = mongoose.model('ReturnRequest', returnRequestSchema);

export default ReturnRequest;

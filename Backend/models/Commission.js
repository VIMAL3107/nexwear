import mongoose from 'mongoose';

const commissionSchema = new mongoose.Schema({
    influencer: {
        type: mongoose.Schema.ObjectId,
        ref: 'Influencer',
        required: true
    },
    order: {
        type: mongoose.Schema.ObjectId,
        ref: 'Order',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Paid', 'Cancelled'],
        default: 'Pending'
    },
    payoutDate: Date,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Commission = mongoose.model('Commission', commissionSchema);

export default Commission;

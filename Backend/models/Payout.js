import mongoose from 'mongoose';

const payoutSchema = new mongoose.Schema({
    partner: {
        type: mongoose.Schema.ObjectId,
        ref: 'Partner',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        default: 'INR'
    },
    status: {
        type: String,
        enum: ['Pending', 'Processing', 'Paid', 'Failed'],
        default: 'Pending'
    },
    paymentMethod: {
        type: String,
        enum: ['Bank Transfer', 'UPI', 'Wallet'],
        required: true
    },
    transactionId: String,
    paidAt: Date,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Payout = mongoose.model('Payout', payoutSchema);

export default Payout;

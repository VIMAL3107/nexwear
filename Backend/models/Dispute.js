import mongoose from 'mongoose';

const disputeSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.ObjectId,
        ref: 'Order',
        required: true
    },
    raisedBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'User', // Could be customer or partner
        required: true
    },
    partnerInvolved: {
        type: mongoose.Schema.ObjectId,
        ref: 'Partner'
    },
    issueType: {
        type: String,
        enum: ['Payment Failure', 'Late Delivery', 'Quality Issue', 'Lost in Transit', 'Other'],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    evidenceUrls: {
        type: [String] // URLs to photos/receipts
    },
    status: {
        type: String,
        enum: ['Open', 'Investigating', 'Resolved', 'Refunded'],
        default: 'Open'
    },
    resolutionNotes: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    resolvedAt: {
        type: Date
    }
});

const Dispute = mongoose.model('Dispute', disputeSchema);

export default Dispute;

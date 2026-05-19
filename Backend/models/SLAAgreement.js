import mongoose from 'mongoose';

const slaAgreementSchema = new mongoose.Schema({
    partner: {
        type: mongoose.Schema.ObjectId,
        ref: 'Partner',
        required: true
    },
    version: {
        type: String,
        default: '1.0'
    },
    terms: {
        maxDeliveryDays: { type: Number, default: 5 },
        maxDefectRate: { type: Number, default: 1.0 }, // 1.0%
        payoutFrequency: { type: String, default: 'Bi-Weekly' }
    },
    documentUrl: String, // PDF link
    signedAt: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const SLAAgreement = mongoose.model('SLAAgreement', slaAgreementSchema);

export default SLAAgreement;

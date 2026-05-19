import mongoose from 'mongoose';

const partnerSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: [true, 'Please provide company name']
    },
    ownerName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    documentsVerified: {
        type: Boolean,
        default: false
    },
    printCapabilities: {
        type: [String],
        default: ['DTG', 'Screen Print', 'Embroidery']
    },
    location: {
        city: { type: String, required: true },
        state: { type: String, required: true },
        pincode: { type: String, required: true }
    },
    slaMetrics: {
        averageDeliveryDays: { type: Number, default: 3 },
        defectRate: { type: Number, default: 0.0 },
        penaltyCount: { type: Number, default: 0 }
    },
    overallScore: {
        type: Number,
        default: 5.0, // Out of 5
        max: 5
    },
    isActive: {
        type: Boolean,
        default: true
    },
    joinedAt: {
        type: Date,
        default: Date.now
    }
});

const Partner = mongoose.model('Partner', partnerSchema);

export default Partner;

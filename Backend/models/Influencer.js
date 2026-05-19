import mongoose from 'mongoose';

const influencerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    handle: {
        type: String, // e.g. @vimal_style
        required: true
    },
    platform: {
        type: String,
        enum: ['Instagram', 'YouTube', 'X', 'TikTok'],
        default: 'Instagram'
    },
    referralCode: {
        type: String,
        unique: true
    },
    commissionRate: {
        type: Number, // Percentage
        default: 10
    },
    totalConversions: {
        type: Number,
        default: 0
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Influencer = mongoose.model('Influencer', influencerSchema);

export default Influencer;

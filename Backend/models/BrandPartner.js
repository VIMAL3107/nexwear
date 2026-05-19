import mongoose from 'mongoose';

const brandPartnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    logo: String,
    description: String,
    website: String,
    collabStatus: {
        type: String,
        enum: ['Active', 'Paused', 'Ended'],
        default: 'Active'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const BrandPartner = mongoose.model('BrandPartner', brandPartnerSchema);

export default BrandPartner;

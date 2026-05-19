import mongoose from 'mongoose';

const pricingTierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // e.g., "Bulk Discount 10"
    },
    minQuantity: {
        type: Number,
        required: true
    },
    maxQuantity: {
        type: Number
    },
    discountPercentage: {
        type: Number,
        required: true
    },
    appliesTo: {
        type: String,
        enum: ['All', 'Specific Category', 'Specific Product'],
        default: 'All'
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

const PricingTier = mongoose.model('PricingTier', pricingTierSchema);

export default PricingTier;

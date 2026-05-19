import mongoose from 'mongoose';

const promotionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true // e.g. "Buy 2 Get 1 Free"
    },
    description: String,
    type: {
        type: String,
        enum: ['BOGO', 'Bundle', 'Free Shipping', 'Fixed Discount'],
        required: true
    },
    conditions: {
        minQuantity: Number,
        minSpend: Number,
        targetCategories: [String]
    },
    startDate: Date,
    endDate: Date,
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Promotion = mongoose.model('Promotion', promotionSchema);

export default Promotion;

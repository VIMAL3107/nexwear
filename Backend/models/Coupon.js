import mongoose from 'mongoose';

const couponSchema = new mongoose.Schema({
    code: {
        type: String,
        required: [true, 'Please provide coupon code'],
        unique: true,
        uppercase: true,
        trim: true,
        maxLength: [15, 'Coupon code cannot exceed 15 characters']
    },
    discountType: {
        type: String,
        enum: ['percentage', 'fixed'],
        required: [true, 'Please provide discount type (percentage or fixed)']
    },
    discountValue: {
        type: Number,
        required: [true, 'Please provide discount value']
    },
    minOrderValue: {
        type: Number,
        default: 0
    },
    maxDiscountValue: {
        type: Number, // Applicable for percentage discount
    },
    usageLimit: {
        type: Number,
        default: null // null means unlimited
    },
    usedCount: {
        type: Number,
        default: 0
    },
    isActive: {
        type: Boolean,
        default: true
    },
    expiresAt: {
        type: Date,
        required: [true, 'Please provide expiration date']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Coupon = mongoose.model('Coupon', couponSchema);

export default Coupon;

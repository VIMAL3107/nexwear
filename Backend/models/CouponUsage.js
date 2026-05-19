import mongoose from 'mongoose';

const couponUsageSchema = new mongoose.Schema({
    coupon: {
        type: mongoose.Schema.ObjectId,
        ref: 'Coupon',
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    order: {
        type: mongoose.Schema.ObjectId,
        ref: 'Order',
        required: true
    },
    discountAmount: {
        type: Number,
        required: true
    },
    usedAt: {
        type: Date,
        default: Date.now
    }
});

const CouponUsage = mongoose.model('CouponUsage', couponUsageSchema);

export default CouponUsage;

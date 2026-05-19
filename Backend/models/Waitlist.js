import mongoose from 'mongoose';

const waitlistSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: true
    },
    variantSku: String,
    email: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    isNotified: {
        type: Boolean,
        default: false
    },
    notifiedAt: Date,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Waitlist = mongoose.model('Waitlist', waitlistSchema);

export default Waitlist;

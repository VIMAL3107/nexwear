import mongoose from 'mongoose';

const referralSchema = new mongoose.Schema({
    referrer: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    referredEmail: {
        type: String,
        required: true
    },
    referredUser: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        enum: ['Pending', 'Signed Up', 'First Purchase', 'Completed'],
        default: 'Pending'
    },
    rewardGranted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Referral = mongoose.model('Referral', referralSchema);

export default Referral;

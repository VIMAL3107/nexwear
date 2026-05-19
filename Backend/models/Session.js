import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    deviceType: String, // e.g. "Mobile", "Desktop"
    browser: String,
    ipAddress: String,
    loginAt: {
        type: Date,
        default: Date.now
    },
    logoutAt: Date,
    isActive: {
        type: Boolean,
        default: true
    },
    location: {
        city: String,
        country: String
    }
});

const Session = mongoose.model('Session', sessionSchema);

export default Session;

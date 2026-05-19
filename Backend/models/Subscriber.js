import mongoose from 'mongoose';

const subscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    interests: [String], // e.g. ["Men", "AI Art"]
    source: {
        type: String, // e.g. "Footer", "Popup"
        default: 'Website'
    },
    isSubscribed: {
        type: Boolean,
        default: true
    },
    subscribedAt: {
        type: Date,
        default: Date.now
    }
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

export default Subscriber;

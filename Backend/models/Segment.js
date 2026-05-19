import mongoose from 'mongoose';

const segmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // e.g., "College Students", "High LTV", "Churn Risk"
    },
    description: String,
    criteria: {
        minSpent: Number,
        minOrders: Number,
        favoriteCategory: String,
        lastActiveDays: Number
    },
    userCount: {
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

const Segment = mongoose.model('Segment', segmentSchema);

export default Segment;

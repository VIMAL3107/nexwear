import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    action: {
        type: String, // e.g. "VIEW_PRODUCT", "ADD_TO_CART", "GENERATE_DESIGN"
        required: true
    },
    targetId: mongoose.Schema.ObjectId, // ID of product, design, etc.
    metadata: {
        type: Map,
        of: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Activity = mongoose.model('Activity', activitySchema);

export default Activity;

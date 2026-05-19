import mongoose from 'mongoose';

const searchAnalyticsSchema = new mongoose.Schema({
    query: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User' // Optional
    },
    resultCount: {
        type: Number,
        default: 0
    },
    isSuccessful: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const SearchAnalytics = mongoose.model('SearchAnalytics', searchAnalyticsSchema);

export default SearchAnalytics;

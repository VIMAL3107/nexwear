import mongoose from 'mongoose';

const forecastSchema = new mongoose.Schema({
    targetType: {
        type: String,
        enum: ['Revenue', 'Order Count', 'Stock Demand'],
        required: true
    },
    targetId: {
        type: mongoose.Schema.ObjectId, // Optional: e.g. for a specific Product
        ref: 'Product'
    },
    predictedValue: {
        type: Number,
        required: true
    },
    timeframe: {
        type: String,
        enum: ['Daily', 'Weekly', 'Monthly', 'Quarterly'],
        required: true
    },
    forecastDate: {
        type: Date,
        required: true
    },
    confidenceScore: {
        type: Number, // 0-100
        default: 80
    },
    recommendation: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Forecast = mongoose.model('Forecast', forecastSchema);

export default Forecast;

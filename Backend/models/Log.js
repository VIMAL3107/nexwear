import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
    level: {
        type: String,
        enum: ['Info', 'Warning', 'Error', 'Critical'],
        default: 'Info'
    },
    module: {
        type: String, // e.g. "PAYMENT_GATEWAY", "AI_ENGINE"
        required: true
    },
    message: {
        type: String,
        required: true
    },
    stack: String, // For errors
    metadata: {
        type: Map,
        of: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Log = mongoose.model('Log', logSchema);

export default Log;

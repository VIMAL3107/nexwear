import mongoose from 'mongoose';

const anomalySchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Refund Spike', 'Traffic Surge', 'Security Breach', 'Partner Delay Spike', 'Inventory Discrepancy'],
        required: true
    },
    severity: {
        type: String,
        enum: ['Low', 'Medium', 'High', 'Critical'],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    detectedAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['Detected', 'Investigating', 'Resolved', 'False Positive'],
        default: 'Detected'
    },
    resolutionNotes: String,
    metadata: {
        type: Map,
        of: String // For storing dynamic values like "spike_percentage: 400%"
    }
});

const Anomaly = mongoose.model('Anomaly', anomalySchema);

export default Anomaly;

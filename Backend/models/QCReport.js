import mongoose from 'mongoose';

const qcReportSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.ObjectId,
        ref: 'Order',
        required: true
    },
    batch: {
        type: mongoose.Schema.ObjectId,
        ref: 'ProductionBatch'
    },
    inspector: {
        type: mongoose.Schema.ObjectId,
        ref: 'User' // Admin ID
    },
    result: {
        type: String,
        enum: ['Pass', 'Fail', 'Minor Issue'],
        required: true
    },
    defects: [String], // e.g. ["Stitching loose", "Print alignment"]
    photos: [String], // S3 URLs
    comments: String,
    inspectedAt: {
        type: Date,
        default: Date.now
    }
});

const QCReport = mongoose.model('QCReport', qcReportSchema);

export default QCReport;

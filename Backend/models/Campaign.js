import mongoose from 'mongoose';

const campaignSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Email', 'SMS', 'Push Notification', 'Banner'],
        required: true
    },
    subject: String,
    content: {
        type: String,
        required: true
    },
    audienceSegment: {
        type: String, // e.g. "Frequent Buyers", "New Signups"
        required: true
    },
    status: {
        type: String,
        enum: ['Draft', 'Scheduled', 'Sent', 'Cancelled'],
        default: 'Draft'
    },
    scheduledAt: Date,
    sentAt: Date,
    metrics: {
        opens: { type: Number, default: 0 },
        clicks: { type: Number, default: 0 },
        conversions: { type: Number, default: 0 }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Campaign = mongoose.model('Campaign', campaignSchema);

export default Campaign;

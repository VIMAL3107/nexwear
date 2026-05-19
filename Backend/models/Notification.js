import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Order Update', 'Promotion', 'System Alert', 'Dispute'],
        default: 'System Alert'
    },
    isRead: {
        type: Boolean,
        default: false
    },
    linkUrl: {
        type: String // Optional link to redirect user when clicked
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Notification = mongoose.model('Notification', notificationSchema);

export default Notification;

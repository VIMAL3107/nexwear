import mongoose from 'mongoose';

const auditLogSchema = new mongoose.Schema({
    adminUser: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    action: {
        type: String,
        required: true // e.g., "Approved Refund", "Updated Stock", "Changed Partner Status"
    },
    targetId: {
        type: mongoose.Schema.ObjectId, // ID of the order/product/partner affected
        required: true
    },
    targetModel: {
        type: String, // e.g., 'Order', 'Product', 'Partner'
        required: true
    },
    details: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const AuditLog = mongoose.model('AuditLog', auditLogSchema);

export default AuditLog;

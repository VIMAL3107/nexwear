import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.ObjectId,
        ref: 'Order',
        required: true,
        unique: true
    },
    invoiceNumber: {
        type: String,
        required: true,
        unique: true
    },
    invoicePdfUrl: {
        type: String,
        required: true
    },
    gstDetails: {
        cgst: { type: Number, default: 0 },
        sgst: { type: Number, default: 0 },
        igst: { type: Number, default: 0 },
        totalTax: { type: Number, default: 0 }
    },
    billingAddress: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    },
    isPaid: {
        type: Boolean,
        default: true
    },
    issuedAt: {
        type: Date,
        default: Date.now
    }
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

export default Invoice;

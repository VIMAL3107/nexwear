import mongoose from 'mongoose';

const shipmentSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.ObjectId,
        ref: 'Order',
        required: true
    },
    courierPartner: {
        type: String,
        enum: ['Delhivery', 'Shiprocket', 'Bluedart', 'Ecom Express'],
        required: true
    },
    trackingNumber: {
        type: String,
        required: true
    },
    trackingLink: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Manifested', 'Picked Up', 'In Transit', 'Out for Delivery', 'Delivered', 'RTO'],
        default: 'Manifested'
    },
    estimatedDeliveryDate: {
        type: Date
    },
    actualDeliveryDate: {
        type: Date
    },
    shippingLabelUrl: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Shipment = mongoose.model('Shipment', shipmentSchema);

export default Shipment;

import mongoose from 'mongoose';

const shippingZoneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // e.g. "North India", "Mumbai Local", "International"
    },
    countries: [String],
    states: [String],
    zipCodes: [String], // Pattern-based zip codes
    baseRate: {
        type: Number,
        default: 0
    },
    freeShippingThreshold: {
        type: Number
    },
    deliveryEstimate: {
        type: String, // e.g. "2-3 Days"
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const ShippingZone = mongoose.model('ShippingZone', shippingZoneSchema);

export default ShippingZone;

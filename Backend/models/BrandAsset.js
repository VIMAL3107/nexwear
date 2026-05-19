import mongoose from 'mongoose';

const brandAssetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // e.g. "Primary Logo", "Winter Collection Font"
    },
    type: {
        type: String,
        enum: ['Logo', 'Font', 'Color Palette', 'Brand Guidelines', 'Social Asset'],
        required: true
    },
    url: {
        type: String,
        required: true
    },
    description: String,
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const BrandAsset = mongoose.model('BrandAsset', brandAssetSchema);

export default BrandAsset;

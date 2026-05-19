import mongoose from 'mongoose';

const collectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    coverImage: String,
    products: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Product'
    }],
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Collection = mongoose.model('Collection', collectionSchema);

export default Collection;

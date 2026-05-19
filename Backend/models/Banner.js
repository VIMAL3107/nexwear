import mongoose from 'mongoose';

const bannerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: String,
    image: {
        type: String,
        required: true
    },
    link: String,
    placement: {
        type: String,
        enum: ['Hero', 'Mid-Section', 'Sidebar', 'Popup'],
        default: 'Hero'
    },
    priority: {
        type: Number,
        default: 0
    },
    isActive: {
        type: Boolean,
        default: true
    },
    startDate: Date,
    endDate: Date,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Banner = mongoose.model('Banner', bannerSchema);

export default Banner;

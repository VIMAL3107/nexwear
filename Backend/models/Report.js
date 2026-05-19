import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true // e.g. "Monthly Sales Q4"
    },
    type: {
        type: String,
        enum: ['Sales', 'Financial', 'Inventory', 'Partner', 'Customer'],
        required: true
    },
    format: {
        type: String,
        enum: ['CSV', 'PDF', 'JSON'],
        default: 'CSV'
    },
    url: String, // Link to generated file
    status: {
        type: String,
        enum: ['Generating', 'Completed', 'Failed'],
        default: 'Generating'
    },
    generatedBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Report = mongoose.model('Report', reportSchema);

export default Report;

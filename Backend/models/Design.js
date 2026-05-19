import mongoose from 'mongoose';

const designSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a design title']
    },
    designer: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true // User who uploaded or requested AI generation
    },
    source: {
        type: String,
        enum: ['Customer Upload', 'AI Generated'],
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    promptUsed: {
        type: String, // If AI generated
    },
    status: {
        type: String,
        enum: ['Pending Review', 'Approved', 'Rejected', 'Published'],
        default: 'Pending Review'
    },
    copyrightCheckPassed: {
        type: Boolean,
        default: false
    },
    rejectionReason: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Design = mongoose.model('Design', designSchema);

export default Design;

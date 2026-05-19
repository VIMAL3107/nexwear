import mongoose from 'mongoose';

const surveySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    targetAudience: {
        type: String, // e.g. "Recent Buyers"
        required: true
    },
    questions: [{
        questionText: String,
        type: { type: String, enum: ['Rating', 'Multiple Choice', 'Text'] },
        options: [String]
    }],
    responses: [{
        user: { type: mongoose.Schema.ObjectId, ref: 'User' },
        answers: [{ questionId: String, answer: String }],
        createdAt: { type: Date, default: Date.now }
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

const Survey = mongoose.model('Survey', surveySchema);

export default Survey;

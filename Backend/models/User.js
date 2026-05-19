import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name'],
        trim: true,
        maxLength: [50, 'Name cannot exceed 50 characters']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [6, 'Password must be at least 6 characters'],
        select: false // Do not return password by default
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    phone: {
        type: String,
        match: [/^[0-9]{10}$/, 'Please add a valid 10-digit phone number']
    },
    addresses: [
        {
            street: String,
            city: String,
            state: String,
            zipCode: String,
            country: { type: String, default: 'India' },
            isDefault: { type: Boolean, default: false }
        }
    ],
    wishlist: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Product'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

export default User;

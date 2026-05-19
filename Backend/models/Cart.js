import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: false // Optional for guest checkouts
    },
    sessionId: {
        type: String,
        required: false // Used if user is not logged in
    },
    items: [
        {
            product: {
                type: mongoose.Schema.ObjectId,
                ref: 'Product',
                required: true
            },
            name: String,
            size: String,
            qty: {
                type: Number,
                required: true,
                min: [1, 'Quantity can not be less then 1.']
            },
            price: Number,
            image: String
        }
    ],
    totalAmount: {
        type: Number,
        required: true,
        default: 0
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;

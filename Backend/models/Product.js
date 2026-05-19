import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide product name'],
        trim: true,
        maxLength: [120, 'Product name should not exceed 120 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please provide product price'],
        maxLength: [8, 'Price cannot exceed 8 characters']
    },
    description: {
        type: String,
        required: [true, 'Please provide product description']
    },
    category: {
        type: String,
        required: [true, 'Please provide product category'],
        enum: {
            values: ['Graphic Tees', 'Streetwear', 'Featured', 'Essentials'],
            message: 'Please select a valid category'
        }
    },
    variants: [
        {
            color: String,
            size: String,
            stock: Number,
            sku: String
        }
    ],
    seo: {
        metaTitle: String,
        metaDescription: String,
        keywords: [String]
    },
    sizes: {
        type: [String],
        default: ['S', 'M', 'L', 'XL']
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    stock: {
        type: Number,
        required: [true, 'Please provide product stock'],
        maxLength: [4, 'Stock cannot exceed 4 characters'],
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: false // Optional for now
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model('Product', productSchema);

export default Product;

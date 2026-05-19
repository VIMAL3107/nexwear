import Product from '../models/Product.js';

// @desc    Write a new review for a product
// @route   POST /api/products/:id/reviews
// @access  Public (in this iteration)
export const writeProductReview = async (req, res) => {
    try {
        const { rating, comment, name } = req.body;
        const productId = req.params.id;

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        const review = {
            name: name || 'Anonymous',
            rating: Number(rating),
            comment
        };

        product.reviews.push(review);
        await product.save();

        res.status(201).json({ success: true, message: 'Review added successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Get all products
// @route   GET /api/products
// @access  Public
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ success: true, count: products.length, data: products });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        res.status(200).json({ success: true, data: product });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

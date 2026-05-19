import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Import Mongoose Models (registers them in mongoose)
import './models/User.js';
import './models/Address.js';
import './models/Product.js';
import './models/Order.js';
import './models/Cart.js';
import './models/Wishlist.js';
import './models/Partner.js';
import './models/Design.js';
import './models/Payout.js';
import './models/Dispute.js';
import './models/ReturnRequest.js';
import './models/Forecast.js';
import './models/Segment.js';
import './models/Anomaly.js';
import './models/Campaign.js';
import './models/Coupon.js';
import './models/TaxCategory.js';
import './models/AuditLog.js';
import './models/SupportTicket.js';
import './models/SLAAgreement.js';
import './models/Shipment.js';
import './models/QCReport.js';

// Import Controller Methods
import { getProducts, getProductById, writeProductReview } from './controllers/productController.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// API Base Route
app.get('/api/health', (req, res) => {
    res.status(200).json({ success: true, message: 'Nexwear API is running smoothly.' });
});

// Product Catalogue Routes
app.get('/api/products', getProducts);
app.get('/api/products/:id', getProductById);
app.post('/api/products/:id/reviews', writeProductReview);

// Fallback error handlers
app.use((req, res, next) => {
    res.status(404).json({ success: false, message: 'API Route not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
});

// Connect to MongoDB & Boot Server
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/nexwear';

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('MongoDB database connected successfully.');
        app.listen(PORT, () => {
            console.log(`Nexwear backend server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('MongoDB database connection failure:', err.message);
        // Still boot server in local mock mode if MongoDB is offline for testing
        console.log('Booting in mock DB mode for developer preview.');
        app.listen(PORT, () => {
            console.log(`Nexwear backend server running in mock mode on port ${PORT}`);
        });
    });

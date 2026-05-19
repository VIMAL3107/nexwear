import mongoose from 'mongoose';

const taxCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // e.g. "Apparel (GST 5%)", "Services (GST 18%)"
    },
    cgst: {
        type: Number,
        default: 2.5
    },
    sgst: {
        type: Number,
        default: 2.5
    },
    igst: {
        type: Number,
        default: 5
    },
    hsnCode: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const TaxCategory = mongoose.model('TaxCategory', taxCategorySchema);

export default TaxCategory;

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../services/productService';
import { useCart } from '../store/CartContext';
import Modal from '../components/ui/Modal';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedSize, setSelectedSize] = useState('');
    const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(5);
    const sizes = ['S', 'M', 'L', 'XL'];

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            const data = await getProductById(id);
            setProduct(data);
            setLoading(false);
        };
        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size first');
            return;
        }
        addToCart({ ...product, selectedSize, cartItemId: `${product.id}-${selectedSize}` });
        alert('Added to cart!');
        navigate('/cart');
    };

    const handleWriteReview = (e) => {
        e.preventDefault();
        if (!reviewText.trim()) {
            alert('Please write a review before submitting.');
            return;
        }
        // In a real app, this would be an API call
        alert(`Review submitted successfully with rating: ${rating} Stars!`);
        setReviewText('');
        setIsReviewModalOpen(false);
    };

    if (loading) return <div className="container" style={{ paddingTop: '120px' }}>Loading...</div>;
    if (!product) return <div className="container" style={{ paddingTop: '120px' }}>Product not found</div>;

    return (
        <div className="product-detail container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
            <div style={styles.grid}>
                <div style={styles.imageContainer}>
                    <img src={product.image} alt={product.name} style={styles.image} />
                </div>
                
                <div style={styles.infoContainer}>
                    <p style={styles.category}>{product.category}</p>
                    <h1 style={styles.title}>{product.name}</h1>
                    <p style={styles.price}>₹{product.price}</p>
                    
                    <p style={styles.description}>
                        Premium quality material tailored for comfort and style. 
                        Elevate your wardrobe with the {product.name}.
                    </p>

                    <div style={styles.sizeSection}>
                        <div style={styles.sizeHeader}>
                            <h3>Select Size</h3>
                            <button 
                                style={styles.sizeGuideBtn} 
                                onClick={() => setIsSizeGuideOpen(true)}
                            >
                                Size Guide
                            </button>
                        </div>
                        <div style={styles.sizeGrid}>
                            {sizes.map(size => (
                                <button 
                                    key={size} 
                                    style={{
                                        ...styles.sizeBtn, 
                                        borderColor: selectedSize === size ? '#000' : '#ddd',
                                        background: selectedSize === size ? '#000' : '#fff',
                                        color: selectedSize === size ? '#fff' : '#000'
                                    }}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button style={styles.addBtn} onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                    
                    <button style={styles.reviewBtn} onClick={() => setIsReviewModalOpen(true)}>
                        Write a Review
                    </button>
                </div>
            </div>

            {/* Size Guide Modal */}
            <Modal 
                isOpen={isSizeGuideOpen} 
                onClose={() => setIsSizeGuideOpen(false)} 
                title="Size Guide"
            >
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>Size</th>
                            <th style={styles.th}>Chest (in)</th>
                            <th style={styles.th}>Length (in)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td style={styles.td}>S</td><td style={styles.td}>38</td><td style={styles.td}>27</td></tr>
                        <tr><td style={styles.td}>M</td><td style={styles.td}>40</td><td style={styles.td}>28</td></tr>
                        <tr><td style={styles.td}>L</td><td style={styles.td}>42</td><td style={styles.td}>29</td></tr>
                        <tr><td style={styles.td}>XL</td><td style={styles.td}>44</td><td style={styles.td}>30</td></tr>
                    </tbody>
                </table>
            </Modal>

            {/* Write Review Modal */}
            <Modal 
                isOpen={isReviewModalOpen} 
                onClose={() => setIsReviewModalOpen(false)} 
                title="Write a Review"
            >
                <form onSubmit={handleWriteReview} style={styles.form}>
                    <label style={styles.label}>Rating:</label>
                    <select 
                        value={rating} 
                        onChange={(e) => setRating(e.target.value)} 
                        style={styles.select}
                    >
                        <option value="5">5 Stars - Excellent</option>
                        <option value="4">4 Stars - Very Good</option>
                        <option value="3">3 Stars - Average</option>
                        <option value="2">2 Stars - Poor</option>
                        <option value="1">1 Star - Terrible</option>
                    </select>

                    <label style={styles.label}>Your Review:</label>
                    <textarea 
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        placeholder="What did you like or dislike?"
                        style={styles.textarea}
                        rows="4"
                    />
                    <button type="submit" style={styles.submitBtn}>Submit Review</button>
                </form>
            </Modal>
        </div>
    );
};

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '50px',
        alignItems: 'start'
    },
    imageContainer: {
        background: '#f9f9f9',
        borderRadius: '12px',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        maxWidth: '500px',
        objectFit: 'cover',
        borderRadius: '8px'
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    category: {
        color: '#888',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontSize: '0.9rem',
        margin: 0
    },
    title: {
        fontSize: '2.5rem',
        margin: 0
    },
    price: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#333',
        margin: 0
    },
    description: {
        color: '#666',
        lineHeight: 1.6,
        fontSize: '1.1rem'
    },
    sizeSection: {
        marginTop: '20px'
    },
    sizeGrid: {
        display: 'flex',
        gap: '15px',
        marginTop: '10px'
    },
    sizeBtn: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: '2px solid #ddd',
        background: '#fff',
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: 'bold',
        transition: 'all 0.2s'
    },
    addBtn: {
        background: '#000',
        color: '#fff',
        padding: '18px',
        border: 'none',
        borderRadius: '8px',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        marginTop: '30px',
        transition: 'all 0.3s'
    },
    reviewBtn: {
        background: '#fff',
        color: '#000',
        padding: '18px',
        border: '2px solid #000',
        borderRadius: '8px',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        marginTop: '15px',
        transition: 'all 0.3s'
    },
    sizeHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sizeGuideBtn: {
        background: 'none',
        border: 'none',
        textDecoration: 'underline',
        color: '#666',
        cursor: 'pointer',
        fontSize: '0.9rem'
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '10px'
    },
    th: {
        borderBottom: '2px solid #ddd',
        padding: '10px',
        textAlign: 'left'
    },
    td: {
        borderBottom: '1px solid #ddd',
        padding: '10px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
    },
    label: {
        fontWeight: 'bold',
        marginBottom: '-10px'
    },
    select: {
        padding: '10px',
        borderRadius: '6px',
        border: '1px solid #ddd',
        fontSize: '1rem'
    },
    textarea: {
        padding: '10px',
        borderRadius: '6px',
        border: '1px solid #ddd',
        fontSize: '1rem',
        resize: 'vertical'
    },
    submitBtn: {
        background: '#000',
        color: '#fff',
        padding: '12px',
        border: 'none',
        borderRadius: '8px',
        fontSize: '1rem',
        fontWeight: 'bold',
        cursor: 'pointer'
    }
};

export default ProductDetail;

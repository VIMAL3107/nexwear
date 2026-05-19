import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../store/CartContext';

const Checkout = () => {
    const { cartItems, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate order placement
        alert('Order placed successfully! Order ID: ' + Math.floor(Math.random() * 1000000));
        clearCart();
        navigate('/');
    };

    if (cartItems.length === 0) {
        return (
            <div className="checkout-page container" style={{ paddingTop: '120px' }}>
                <h1>Checkout</h1>
                <p>Your cart is empty. Please add some items before checking out.</p>
                <button onClick={() => navigate('/shop')} style={styles.btn}>Go to Shop</button>
            </div>
        );
    }

    return (
        <div className="checkout-page container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
            <h1>Checkout</h1>
            <div style={styles.checkoutGrid}>
                <div style={styles.formSection}>
                    <form onSubmit={handleSubmit} style={styles.form}>
                        <h2>Shipping Information</h2>
                        <div style={styles.row}>
                            <input type="text" name="firstName" placeholder="First Name" required value={formData.firstName} onChange={handleInputChange} style={styles.input} />
                            <input type="text" name="lastName" placeholder="Last Name" required value={formData.lastName} onChange={handleInputChange} style={styles.input} />
                        </div>
                        <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleInputChange} style={styles.input} />
                        <input type="text" name="address" placeholder="Street Address" required value={formData.address} onChange={handleInputChange} style={styles.input} />
                        <div style={styles.row}>
                            <input type="text" name="city" placeholder="City" required value={formData.city} onChange={handleInputChange} style={styles.input} />
                            <input type="text" name="zip" placeholder="ZIP Code" required value={formData.zip} onChange={handleInputChange} style={styles.input} />
                        </div>

                        <h2 style={{ marginTop: '30px' }}>Payment Information</h2>
                        <input type="text" name="cardNumber" placeholder="Card Number" required value={formData.cardNumber} onChange={handleInputChange} style={styles.input} />
                        <div style={styles.row}>
                            <input type="text" name="expiry" placeholder="MM/YY" required value={formData.expiry} onChange={handleInputChange} style={styles.input} />
                            <input type="text" name="cvv" placeholder="CVV" required value={formData.cvv} onChange={handleInputChange} style={styles.input} />
                        </div>

                        <button type="submit" style={{...styles.btn, width: '100%', marginTop: '20px'}}>Place Order (₹{totalPrice})</button>
                    </form>
                </div>
                
                <div style={styles.summarySection}>
                    <h2>Order Summary</h2>
                    <div style={styles.summaryList}>
                        {cartItems.map(item => (
                            <div key={item.id} style={styles.summaryItem}>
                                <div style={styles.itemInfo}>
                                    <span>{item.name} x {item.quantity}</span>
                                    {item.selectedSize && <span style={styles.variantInfo}>Size: {item.selectedSize}</span>}
                                </div>
                                <span>₹{item.price * item.quantity}</span>
                            </div>
                        ))}
                    </div>
                    <div style={styles.totalRow}>
                        <strong>Total:</strong>
                        <strong>₹{totalPrice}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    checkoutGrid: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '40px',
        marginTop: '30px'
    },
    formSection: {
        background: '#fff',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
    },
    summarySection: {
        background: '#f9f9f9',
        padding: '30px',
        borderRadius: '12px',
        height: 'fit-content'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
    },
    row: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '15px'
    },
    input: {
        padding: '12px',
        border: '1px solid #ddd',
        borderRadius: '6px',
        fontSize: '1rem'
    },
    btn: {
        background: '#000',
        color: '#fff',
        padding: '14px 24px',
        border: 'none',
        borderRadius: '6px',
        fontSize: '1rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'all 0.3s'
    },
    summaryList: {
        borderBottom: '1px solid #ddd',
        paddingBottom: '20px',
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
    },
    summaryItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemInfo: {
        display: 'flex',
        flexDirection: 'column'
    },
    variantInfo: {
        fontSize: '0.85rem',
        color: '#666'
    },
    totalRow: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '1.2rem'
    }
};

export default Checkout;

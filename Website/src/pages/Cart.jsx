import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../store/CartContext';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();
    const navigate = useNavigate();

    if (cartItems.length === 0) {
        return (
            <div className="cart-page container" style={{ paddingTop: '120px', minHeight: '60vh' }}>
                <h1>Your Shopping Bag</h1>
                <p>Your bag is currently empty.</p>
                <button onClick={() => navigate('/shop')} style={styles.btn}>Continue Shopping</button>
            </div>
        );
    }

    return (
        <div className="cart-page container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
            <h1>Your Shopping Bag</h1>
            <div style={styles.cartContainer}>
                <div style={styles.cartItems}>
                    {cartItems.map((item) => (
                        <div key={item.id} style={styles.cartItem}>
                            <img src={item.image} alt={item.name} style={styles.itemImage} />
                            <div style={styles.itemDetails}>
                                <h3>{item.name}</h3>
                                <p style={styles.price}>₹{item.price}</p>
                                {item.selectedSize && <p style={styles.variant}>Size: {item.selectedSize}</p>}
                                <div style={styles.actions}>
                                    <div style={styles.quantityControl}>
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)} style={styles.removeBtn}>Remove</button>
                                </div>
                            </div>
                            <div style={styles.itemTotal}>
                                <strong>₹{item.price * item.quantity}</strong>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={styles.cartSummary}>
                    <h2>Summary</h2>
                    <div style={styles.summaryRow}>
                        <span>Subtotal</span>
                        <span>₹{totalPrice}</span>
                    </div>
                    <div style={styles.summaryRow}>
                        <span>Shipping</span>
                        <span>Calculated at checkout</span>
                    </div>
                    <hr style={{ margin: '15px 0', border: 'none', borderTop: '1px solid #ddd' }} />
                    <div style={{...styles.summaryRow, fontWeight: 'bold', fontSize: '1.2rem'}}>
                        <span>Total</span>
                        <span>₹{totalPrice}</span>
                    </div>
                    <button onClick={() => navigate('/checkout')} style={{...styles.btn, width: '100%', marginTop: '20px'}}>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    cartContainer: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '40px',
        marginTop: '30px'
    },
    cartItems: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    cartItem: {
        display: 'flex',
        gap: '20px',
        padding: '20px',
        border: '1px solid #eee',
        borderRadius: '8px',
        alignItems: 'center'
    },
    itemImage: {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '6px'
    },
    itemDetails: {
        flex: 1
    },
    price: {
        color: '#666',
        margin: '5px 0'
    },
    variant: {
        fontSize: '0.9rem',
        color: '#888',
        margin: '0 0 10px 0'
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
    },
    quantityControl: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ddd',
        borderRadius: '4px',
        overflow: 'hidden',
        '& button': {
            padding: '5px 12px',
            background: '#f9f9f9',
            border: 'none',
            cursor: 'pointer'
        },
        '& span': {
            padding: '0 15px'
        }
    },
    removeBtn: {
        background: 'none',
        border: 'none',
        color: '#ff4444',
        textDecoration: 'underline',
        cursor: 'pointer'
    },
    itemTotal: {
        fontSize: '1.1rem'
    },
    cartSummary: {
        background: '#f9f9f9',
        padding: '30px',
        borderRadius: '12px',
        height: 'fit-content'
    },
    summaryRow: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '15px'
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
    }
};

export default Cart;

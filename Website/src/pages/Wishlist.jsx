import React from 'react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    // Mock wishlist data
    const wishlistItems = [
        {
            id: 1,
            name: "Noir Essence Tee",
            price: 1299,
            category: "Graphic Tees",
            image: "/src/assets/hero.png"
        }
    ];

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
            <h1 style={styles.title}>My Wishlist</h1>
            
            {wishlistItems.length === 0 ? (
                <div style={styles.emptyState}>
                    <p>Your wishlist is empty.</p>
                    <Link to="/shop" style={styles.shopBtn}>Continue Shopping</Link>
                </div>
            ) : (
                <div style={styles.grid}>
                    {wishlistItems.map(item => (
                        <div key={item.id} style={styles.card}>
                            <div style={styles.imageWrapper}>
                                <img src={item.image} alt={item.name} style={styles.image} />
                            </div>
                            <div style={styles.info}>
                                <span style={styles.category}>{item.category}</span>
                                <h3 style={styles.name}>{item.name}</h3>
                                <p style={styles.price}>₹{item.price}</p>
                                
                                <div style={styles.actions}>
                                    <button style={styles.addBtn}>Add to Cart</button>
                                    <button style={styles.removeBtn}>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const styles = {
    title: {
        fontSize: '2.5rem',
        marginBottom: '40px',
        textAlign: 'center'
    },
    emptyState: {
        textAlign: 'center',
        padding: '50px'
    },
    shopBtn: {
        display: 'inline-block',
        background: '#000',
        color: '#fff',
        padding: '12px 24px',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        marginTop: '20px'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '30px'
    },
    card: {
        border: '1px solid #eee',
        borderRadius: '12px',
        overflow: 'hidden',
        background: '#fff'
    },
    imageWrapper: {
        background: '#f9f9f9',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        borderBottom: '1px solid #eee'
    },
    image: {
        width: '100%',
        maxWidth: '200px',
        objectFit: 'contain'
    },
    info: {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
    },
    category: {
        color: '#888',
        fontSize: '0.85rem',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    },
    name: {
        margin: 0,
        fontSize: '1.2rem',
        color: '#333'
    },
    price: {
        margin: 0,
        fontWeight: 'bold',
        fontSize: '1.1rem'
    },
    actions: {
        display: 'flex',
        gap: '10px',
        marginTop: '15px'
    },
    addBtn: {
        flex: 1,
        background: '#000',
        color: '#fff',
        border: 'none',
        padding: '10px',
        borderRadius: '6px',
        fontWeight: 'bold',
        cursor: 'pointer'
    },
    removeBtn: {
        background: '#fff',
        color: '#d32f2f',
        border: '1px solid #d32f2f',
        padding: '10px 15px',
        borderRadius: '6px',
        fontWeight: 'bold',
        cursor: 'pointer'
    }
};

export default Wishlist;

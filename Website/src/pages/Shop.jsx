import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/productService';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const data = await getProducts();
            setProducts(data);
            setLoading(false);
        };
        fetchProducts();
    }, []);

    const categories = ['All', 'Graphic Tees', 'Streetwear', 'Featured'];

    const filteredProducts = filter === 'All' 
        ? products 
        : products.filter(p => p.category === filter);

    return (
        <div className="shop-page container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
            <div style={styles.header}>
                <h1>Shop All Collection</h1>
                <p>Discover our latest premium streetwear.</p>
            </div>

            <div style={styles.filterContainer}>
                {categories.map(cat => (
                    <button 
                        key={cat} 
                        style={{
                            ...styles.filterBtn,
                            background: filter === cat ? '#000' : '#fff',
                            color: filter === cat ? '#fff' : '#000'
                        }}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {loading ? (
                <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading products...</div>
            ) : (
                <div style={styles.grid}>
                    {filteredProducts.map(product => (
                        <Link to={`/product/${product.id}`} key={product.id} style={styles.card}>
                            <div style={styles.imageWrapper}>
                                <img src={product.image} alt={product.name} style={styles.image} />
                            </div>
                            <div style={styles.info}>
                                <span style={styles.category}>{product.category}</span>
                                <h3 style={styles.name}>{product.name}</h3>
                                <p style={styles.price}>₹{product.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
            {!loading && filteredProducts.length === 0 && (
                <div style={{ textAlign: 'center', marginTop: '50px' }}>No products found in this category.</div>
            )}
        </div>
    );
};

const styles = {
    header: {
        textAlign: 'center',
        marginBottom: '40px'
    },
    filterContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        marginBottom: '40px',
        flexWrap: 'wrap'
    },
    filterBtn: {
        padding: '10px 20px',
        borderRadius: '30px',
        border: '1px solid #000',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'all 0.3s'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '30px'
    },
    card: {
        textDecoration: 'none',
        color: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s',
    },
    imageWrapper: {
        background: '#f9f9f9',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '15px',
        display: 'flex',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        maxWidth: '250px',
        objectFit: 'contain'
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px'
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
    }
};

export default Shop;

import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';

    // Mock search results
    const results = query ? [
        { id: 1, name: "Noir Essence Tee", price: 1299, image: "/src/assets/hero.png" }
    ] : [];

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>Search Results</h1>
            <p style={{ color: '#666', marginBottom: '40px' }}>
                Showing results for: <strong>"{query}"</strong>
            </p>

            {results.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '50px 0' }}>
                    <h3 style={{ marginBottom: '15px' }}>No products found</h3>
                    <p style={{ color: '#666' }}>Try checking your spelling or use more general terms.</p>
                    <Link to="/shop" style={{ 
                        display: 'inline-block', 
                        marginTop: '20px', 
                        padding: '12px 25px', 
                        background: '#000', 
                        color: '#fff', 
                        textDecoration: 'none', 
                        borderRadius: '8px',
                        fontWeight: 'bold' 
                    }}>
                        Browse All Products
                    </Link>
                </div>
            ) : (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    gap: '30px'
                }}>
                    {results.map(product => (
                        <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '12px', marginBottom: '15px', textAlign: 'center' }}>
                                <img src={product.image} alt={product.name} style={{ width: '100%', maxWidth: '200px' }} />
                            </div>
                            <h3 style={{ margin: '0 0 5px 0', fontSize: '1.2rem' }}>{product.name}</h3>
                            <p style={{ margin: 0, fontWeight: 'bold' }}>₹{product.price}</p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchResults;

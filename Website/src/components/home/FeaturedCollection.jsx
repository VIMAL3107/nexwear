import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ui/ProductCard';
import { getProducts } from '../../services/productService';

const FeaturedCollection = () => {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                const formatted = data.map((p, index) => ({
                    ...p,
                    title: p.name,
                    delayClass: `delay-${(index + 1) * 100}`
                }));
                setProducts(formatted);
            } catch (error) {
                console.error("Failed to fetch products", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return (
        <section className="collection section bg-bisque">
            <div className="container">
                <div className="collection-header animate-fade-in">
                    <h2>Trending Graphics</h2>
                    <Link to="/shop" className="btn-accent">View All Shirts</Link>
                </div>

                {loading ? (
                    <div className="loading-state">Loading products...</div>
                ) : (
                    <div className="product-grid">
                        {products.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default FeaturedCollection;

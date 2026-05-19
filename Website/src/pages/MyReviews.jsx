import React from 'react';
import { Link } from 'react-router-dom';

const MyReviews = () => {
    const reviews = [
        { id: 1, product: 'Noir Essence Tee', rating: 5, comment: 'Amazing quality!', date: 'Oct 15, 2023', status: 'Published' },
        { id: 2, product: 'Urban Core Hoodie', rating: 4, comment: 'Good fit, bit warm.', date: 'Sep 20, 2023', status: 'Published' }
    ];

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
            <h1>My Reviews</h1>
            <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {reviews.map(review => (
                    <div key={review.id} style={{ padding: '20px', border: '1px solid #eee', borderRadius: '12px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>{review.product}</h3>
                            <span style={{ color: review.status === 'Published' ? 'green' : 'orange' }}>{review.status}</span>
                        </div>
                        <div style={{ color: '#ffc107', margin: '5px 0' }}>
                            {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                        </div>
                        <p>{review.comment}</p>
                        <span style={{ fontSize: '0.8rem', color: '#999' }}>Posted on {review.date}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyReviews;

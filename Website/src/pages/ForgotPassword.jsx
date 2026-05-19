import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="container" style={{ paddingTop: '150px', paddingBottom: '100px', maxWidth: '400px', textAlign: 'center' }}>
            <h1>Forgot Password?</h1>
            <p style={{ color: '#666', marginTop: '10px' }}>Enter your email and we'll send you a link to reset your password.</p>
            
            {!submitted ? (
                <form onSubmit={handleSubmit} style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" className="btn-primary" style={{ padding: '15px' }}>Send Reset Link</button>
                    <Link to="/login" style={{ color: '#000', fontSize: '0.9rem' }}>Back to Login</Link>
                </form>
            ) : (
                <div style={{ marginTop: '30px', padding: '20px', background: '#f0f7ff', borderRadius: '12px' }}>
                    <p>If an account exists for <strong>{email}</strong>, you will receive a reset link shortly.</p>
                </div>
            )}
        </div>
    );
};

export default ForgotPassword;

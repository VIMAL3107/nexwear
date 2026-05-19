import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock authentication logic
        if (email && password) {
            alert('Login successful!');
            navigate('/profile');
        } else {
            alert('Please enter email and password');
        }
    };

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px', maxWidth: '500px' }}>
            <div style={styles.card}>
                <h1 style={styles.title}>Welcome Back</h1>
                <p style={styles.subtitle}>Sign in to your Nexwear account</p>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Email Address</label>
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={styles.input} 
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Password</label>
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={styles.input} 
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    
                    <button type="submit" style={styles.btn}>Login</button>
                </form>

                <div style={styles.footer}>
                    <p>Don't have an account? <Link to="/register" style={styles.link}>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    card: {
        background: '#fff',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        border: '1px solid #eee'
    },
    title: {
        fontSize: '2rem',
        margin: '0 0 10px 0',
        textAlign: 'center'
    },
    subtitle: {
        color: '#666',
        textAlign: 'center',
        marginBottom: '30px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
    },
    label: {
        fontWeight: 'bold',
        fontSize: '0.9rem'
    },
    input: {
        padding: '12px 15px',
        borderRadius: '8px',
        border: '1px solid #ddd',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.3s'
    },
    btn: {
        background: '#000',
        color: '#fff',
        padding: '15px',
        borderRadius: '8px',
        border: 'none',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        marginTop: '10px'
    },
    footer: {
        marginTop: '30px',
        textAlign: 'center',
        fontSize: '0.9rem'
    },
    link: {
        color: '#000',
        fontWeight: 'bold',
        textDecoration: 'underline'
    }
};

export default Login;

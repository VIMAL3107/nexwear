import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock registration logic
        if (name && email && password) {
            alert('Registration successful! Please login.');
            navigate('/login');
        } else {
            alert('Please fill out all fields');
        }
    };

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px', maxWidth: '500px' }}>
            <div style={styles.card}>
                <h1 style={styles.title}>Create Account</h1>
                <p style={styles.subtitle}>Join Nexwear today</p>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Full Name</label>
                        <input 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={styles.input} 
                            placeholder="Enter your name"
                            required
                        />
                    </div>
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
                            placeholder="Create a password"
                            required
                        />
                    </div>
                    
                    <button type="submit" style={styles.btn}>Sign Up</button>
                </form>

                <div style={styles.footer}>
                    <p>Already have an account? <Link to="/login" style={styles.link}>Login</Link></p>
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
        outline: 'none'
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

export default Register;

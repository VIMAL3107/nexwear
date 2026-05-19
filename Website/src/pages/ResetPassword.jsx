import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        alert('Password has been successfully reset. You can now login with your new password.');
        navigate('/login');
    };

    return (
        <div className="container" style={{ paddingTop: '150px', paddingBottom: '100px', maxWidth: '400px', textAlign: 'center' }}>
            <h1>Reset Password</h1>
            <p style={{ color: '#666', marginTop: '10px' }}>Enter your new password below.</p>
            
            <form onSubmit={handleSubmit} style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input 
                    type="password" 
                    placeholder="New Password" 
                    style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Confirm New Password" 
                    style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="submit" className="btn-primary" style={{ padding: '15px' }}>Reset Password</button>
            </form>
        </div>
    );
};

export default ResetPassword;

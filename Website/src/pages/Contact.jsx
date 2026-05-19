import React from 'react';

const Contact = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
            <h1 style={styles.title}>Contact Us</h1>
            <p style={styles.subtitle}>We'd love to hear from you. Drop us a line.</p>

            <div style={styles.grid}>
                <div style={styles.contactInfo}>
                    <div style={styles.infoCard}>
                        <h3>Customer Support</h3>
                        <p>support@nexwear.com</p>
                        <p>+91 98765 43210</p>
                        <p>Mon - Fri, 9am - 6pm IST</p>
                    </div>
                    
                    <div style={styles.infoCard}>
                        <h3>Headquarters</h3>
                        <p>Nexwear Studios</p>
                        <p>123 Fashion Street, Cyber City</p>
                        <p>Gurugram, Haryana, 122002</p>
                    </div>
                </div>

                <div style={styles.formContainer}>
                    <form style={styles.form}>
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Name</label>
                            <input type="text" style={styles.input} placeholder="Your Name" required />
                        </div>
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Email</label>
                            <input type="email" style={styles.input} placeholder="Your Email" required />
                        </div>
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Subject</label>
                            <select style={styles.input}>
                                <option>Order Query</option>
                                <option>Return/Exchange</option>
                                <option>Bulk Order</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Message</label>
                            <textarea style={styles.textarea} rows="5" placeholder="How can we help?" required></textarea>
                        </div>
                        <button type="submit" style={styles.btn}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

const styles = {
    title: {
        fontSize: '2.5rem',
        textAlign: 'center',
        margin: '0 0 10px 0'
    },
    subtitle: {
        textAlign: 'center',
        color: '#666',
        marginBottom: '50px'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '40px'
    },
    contactInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    infoCard: {
        background: '#f9f9f9',
        padding: '30px',
        borderRadius: '12px',
        border: '1px solid #eee'
    },
    formContainer: {
        background: '#fff',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        border: '1px solid #eee'
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
        fontFamily: 'inherit'
    },
    textarea: {
        padding: '12px 15px',
        borderRadius: '8px',
        border: '1px solid #ddd',
        fontSize: '1rem',
        outline: 'none',
        resize: 'vertical',
        fontFamily: 'inherit'
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
    }
};

export default Contact;

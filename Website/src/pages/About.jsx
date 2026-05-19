import React from 'react';

const About = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
            <div style={styles.header}>
                <h1 style={styles.title}>Our Story</h1>
                <p style={styles.subtitle}>Redefining streetwear with premium quality and AI-driven designs.</p>
            </div>

            <div style={styles.grid}>
                <div style={styles.imageContainer}>
                    <img src="/src/assets/hero.png" alt="Nexwear Studio" style={styles.image} />
                </div>
                
                <div style={styles.content}>
                    <h2>The Nexwear Vision</h2>
                    <p style={styles.text}>
                        Born at the intersection of technology and fashion, Nexwear was created to disrupt the traditional apparel industry. 
                        We believe that what you wear is an extension of your identity, and finding the perfect design shouldn't be a compromise.
                    </p>
                    <p style={styles.text}>
                        By leveraging cutting-edge AI design intelligence and partnering with the best local print artisans across India, 
                        we deliver premium quality, custom-printed streetwear directly to your doorstep.
                    </p>
                    
                    <h3>Our Promise</h3>
                    <ul style={styles.list}>
                        <li><strong>Premium Fabric:</strong> We source only the finest, breathable cotton blends.</li>
                        <li><strong>Sustainable Practices:</strong> Print-on-demand means zero inventory waste.</li>
                        <li><strong>Empowering Local Creators:</strong> Our partner network supports local printing businesses.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const styles = {
    header: {
        textAlign: 'center',
        marginBottom: '60px',
        maxWidth: '700px',
        margin: '0 auto 60px'
    },
    title: {
        fontSize: '3rem',
        margin: '0 0 10px 0'
    },
    subtitle: {
        fontSize: '1.2rem',
        color: '#666',
        lineHeight: 1.6
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '50px',
        alignItems: 'center'
    },
    imageContainer: {
        borderRadius: '12px',
        overflow: 'hidden',
        background: '#f9f9f9'
    },
    image: {
        width: '100%',
        height: 'auto',
        display: 'block'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    text: {
        fontSize: '1.1rem',
        lineHeight: 1.8,
        color: '#555'
    },
    list: {
        fontSize: '1.1rem',
        lineHeight: 1.8,
        color: '#555',
        paddingLeft: '20px'
    }
};

export default About;

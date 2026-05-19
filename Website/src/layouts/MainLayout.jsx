import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const MainLayout = ({ children }) => {
    return (
        <div className="app-container">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;

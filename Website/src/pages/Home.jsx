import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import Philosophy from '../components/home/Philosophy';
import FeaturedCollection from '../components/home/FeaturedCollection';

const Home = () => {
    return (
        <>
            <Hero />
            <Philosophy />
            <FeaturedCollection />
        </>
    );
};

export default Home;

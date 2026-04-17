import { useState, useEffect } from 'react';

/**
 * Custom hook to detect if the user has scrolled past a certain threshold.
 * @param {number} threshold - Scroll threshold in pixels
 * @returns {boolean} - True if scrolled past threshold
 */
export function useScroll(threshold = 50) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > threshold);
        };

        // Initial check
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [threshold]);

    return scrolled;
}

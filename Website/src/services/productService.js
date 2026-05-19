import { apiClient } from './apiClient';

// Mock data for initial development
const MOCK_PRODUCTS = [
    {
        id: 1,
        name: "Noir Essence Tee",
        price: 1299,
        category: "Graphic Tees",
        image: "/src/assets/hero.png", // Reusing hero for now
        color: "espresso"
    },
    {
        id: 2,
        name: "Urban Core Oversized",
        price: 1499,
        category: "Streetwear",
        image: "/src/assets/hero.png",
        color: "mocha"
    },
    {
        id: 3,
        name: "Vibe Theory Print",
        price: 1199,
        category: "Featured",
        image: "/src/assets/hero.png",
        color: "pistachio"
    }
];

export const getProducts = async () => {
    // In a real app: return apiClient('/products');
    return new Promise((resolve) => {
        setTimeout(() => resolve(MOCK_PRODUCTS), 500);
    });
};

export const getProductById = async (id) => {
    return new Promise((resolve) => {
        const product = MOCK_PRODUCTS.find(p => p.id === parseInt(id));
        setTimeout(() => resolve(product), 300);
    });
};

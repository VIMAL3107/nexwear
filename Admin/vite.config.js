import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/admin/',
    // Configure preview server for Render deployment
    preview: {
        allowedHosts: true, // Allow all hosts to prevent "Invalid Host Header" issues on Render
    },
    // If you use React or plugins in the admin, add them here.
    // plugins: [ ... ]
});

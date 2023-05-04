import * as path from 'path';

import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            app: path.resolve(__dirname, './src/app'),
            features: path.resolve(__dirname, './src/features'),
            entities: path.resolve(__dirname, './src/entities'),
            shared: path.resolve(__dirname, './src/shared'),
            widgets: path.resolve(__dirname, './src/widgets'),
        },
    },
});

import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
    server: {
        port: 5175,
    },
    plugins: [

    ],
    test: {
        globals: true,
        environment: 'jsdom', // или 'happy-dom'
        setupFiles: './src/tests/setup.ts',
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('src', import.meta.url)),
            '@module': fileURLToPath(new URL('src/modules', import.meta.url)),
            '@util': fileURLToPath(new URL('src/utils', import.meta.url)),
            '@component': fileURLToPath(new URL('src/components', import.meta.url)),
            '@page': fileURLToPath(new URL('src/pages', import.meta.url)),
            '@unit': fileURLToPath(new URL('src/units', import.meta.url))
        }
    },
    build: {

    }
})
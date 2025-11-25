// mf_host/rsbuild.config.ts (VERSIÓN FINAL CON assetPrefix)

import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { mfConfig } from './module-federation.config';

export default defineConfig({
    output: {
        // 🚨 CRÍTICO: Usa assetPrefix para definir la URL base de los chunks
        // Esto debería reemplazar la funcionalidad de publicPath en tu versión.
        assetPrefix: '/', 
        distPath: {
            js: 'js',     // Los archivos JS irán a dist/js/
            css: 'css',   // Los archivos CSS irán a dist/css/
        },
    },
    server: {
        port: 3000, 
        // 🚨 CLAVE: Forzar CORS para aceptar los Remotos
        cors: {
            // Si el error persiste, intenta origin: '*' (solo para desarrollo)
            origin: ['http://localhost:3001', 'http://localhost:3002'], 
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Añadir métodos
            allowedHeaders: ['Content-Type', 'application/javascript'], // Añadir encabezados
        },
    },
    plugins: [pluginReact(), pluginModuleFederation(mfConfig)],
});
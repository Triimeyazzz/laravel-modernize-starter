import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import { fileURLToPath, URL } from "url";
import path from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/ts/app.ts",
            ssr: "resources/ts/ssr.ts",
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        vuetify({
            autoImport: true,
            styles: {
                configFile: "resources/ts/scss/variables.scss",
            },
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./resources/ts", import.meta.url)),
            "ziggy-js": path.resolve("vendor/tightenco/ziggy"),
        },
    },
    optimizeDeps: {
        exclude: ["vuetify"],
        entries: ["./src/**/*.vue"],
    },
    ssr: {
        noExternal: [/\.css$/, /^vuetify/],
    },
    build: {
        chunkSizeWarningLimit: 1600,
    },
});

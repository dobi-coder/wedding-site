import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: "https://dobi-coder.github.io",
    base: "/wedding-site",
	vite: {
		plugins: [tailwindcss()],
	},
});
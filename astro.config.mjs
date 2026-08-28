import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isTestBuild = process.env.TEST_BUILD === 'true';

export default defineConfig({
	site: isTestBuild
		? 'http://localhost:4321'
		: 'https://dobi-coder.github.io',
	base: isTestBuild ? '/' : '/wedding-site',
	vite: {
		plugins: [tailwindcss()],
	},
});

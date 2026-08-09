import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));
const prayersDir = fileURLToPath(new URL('./prayers-and-verses', import.meta.url));

export default defineConfig({
	integrations: [svelte()],
	trailingSlash: 'always',
	devToolbar: {
		enabled: false
	},
	vite: {
		plugins: [tailwindcss()],
		server: {
			fs: {
				allow: [projectRoot, prayersDir]
			}
		}
	}
});

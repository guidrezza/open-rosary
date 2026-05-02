import { defineConfig } from 'vite';

export default defineConfig({
	resolve: {
		alias: {
			$lib: new URL('./src/lib', import.meta.url).pathname
		}
	}
});

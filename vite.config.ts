import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		exclude: ['tests/e2e/**', 'node_modules/**', 'dist/**']
	},
	resolve: {
		alias: {
			$lib: new URL('./src/lib', import.meta.url).pathname
		}
	}
});

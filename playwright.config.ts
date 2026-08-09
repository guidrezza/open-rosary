import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './tests/e2e',
	timeout: 30_000,
	use: {
		baseURL: 'http://127.0.0.1:4321',
		trace: 'retain-on-failure',
		screenshot: 'only-on-failure',
		video: 'retain-on-failure'
	},
	projects: [
		{ name: 'chromium', use: { ...devices['Desktop Chrome'] } },
		{ name: 'mobile-chromium', use: { ...devices['Pixel 7'] } }
	],
	webServer: {
		command: 'npm run dev -- --host 127.0.0.1',
		url: 'http://127.0.0.1:4321',
		reuseExistingServer: !process.env.CI,
		timeout: 30_000
	}
});

import { test, expect } from '@playwright/test';

test('opens the mode picker with keyboard focus and restores focus when closed', async ({
	page
}) => {
	const pageErrors: string[] = [];
	page.on('pageerror', (error) => pageErrors.push(error.message));

	await page.goto('/en-us/');
	await page.waitForFunction(() => !document.querySelector('astro-island[ssr]'));
	const startButton = page.getByRole('button', { name: 'Pray Recommended' });
	await startButton.click();

	const modeDialog = page.getByRole('dialog', { name: 'Select Mode' });
	await expect(modeDialog).toBeVisible();
	await expect(modeDialog.getByRole('button', { name: 'Close' })).toBeFocused();
	await page.keyboard.press('Escape');
	await expect(modeDialog).toBeHidden();
	await expect(startButton).toBeFocused();
	expect(pageErrors).toEqual([]);
});

test('advances through a guided Rosary', async ({ page }) => {
	const pageErrors: string[] = [];
	page.on('pageerror', (error) => pageErrors.push(error.message));

	await page.goto('/en-us/pray/?mystery=glorious&mode=digital');
	await page.waitForFunction(() => !document.querySelector('astro-island[ssr]'));
	await expect(page.getByRole('heading', { name: 'The Sign of the Cross' })).toBeVisible();
	await page.getByRole('button', { name: 'Next' }).click();
	await expect(page.getByRole('heading', { name: "The Apostles' Creed" })).toBeVisible();
	expect(pageErrors).toEqual([]);
});

test('returns a clear not-found page for an unsupported locale', async ({ page }) => {
	const response = await page.goto('/not-a-locale/');
	expect(response?.status()).toBe(404);
	await expect(page.getByRole('heading', { name: '404: Not found' })).toBeVisible();
});

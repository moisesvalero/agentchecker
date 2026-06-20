import { devices, expect, test } from '@playwright/test';

test.use({
  ...devices['iPhone 14 Pro'],
  defaultBrowserType: 'chromium',
});

test('landing mobile no desborda horizontalmente', async ({ page }) => {
  await page.goto('/');

  const overflow = await page.evaluate(() => {
    const doc = document.documentElement;
    return doc.scrollWidth - doc.clientWidth;
  });
  expect(overflow).toBeLessThanOrEqual(1);

  await expect(page.getByText('Found:').first()).toBeVisible();
  await expect(
    page.getByRole('button', { name: 'Switch language' }),
  ).toBeVisible();
});

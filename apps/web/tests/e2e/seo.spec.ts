import { expect, test } from '@playwright/test';

test('landing expone metadatos SEO principales', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(
    /agentchecker.*Fix AI Agent Instruction Conflicts/i,
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://agentcheck.moisesvalero.es/',
  );
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    'content',
    /npx agentchecker/i,
  );
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    'content',
    'https://agentcheck.moisesvalero.es/',
  );
});

test('FAQ visible para AEO', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: /Frequently asked questions/i }),
  ).toBeVisible();
  await expect(page.getByText('What is agentchecker?')).toBeVisible();
  await expect(page.getByText(/zero-install command-line tool/i)).toBeVisible();
});

test('toggle de idioma actualiza FAQ y metadatos', async ({ page }) => {
  await page.goto('/');

  const toggle = page.getByRole('button', { name: 'Switch language' });
  await toggle.click();

  await expect(page).toHaveTitle(/Corrige conflictos/i);
  await expect(
    page.getByRole('heading', { name: /Preguntas frecuentes/i }),
  ).toBeVisible();
  await expect(page.getByText('¿Qué es agentchecker?')).toBeVisible();
});

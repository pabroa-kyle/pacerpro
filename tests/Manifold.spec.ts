import { test, expect, chromium } from '@playwright/test';

test('Check the insecure HTTPS URL (bypass SSL errors)', async () => {
  // Launch browser with SSL certificate validation disabled
  const browser = await chromium.launch({
    args: ['--ignore-certificate-errors'],  // Ignore certificate errors
  });
  const page = await browser.newPage();

  // Navigate to the HTTPS URL, even if the certificate is invalid
  await page.goto('https://manifold-test-4.pacerpro.com/', { waitUntil: 'load' });

  // Perform actions after page load (e.g., filling out login form, etc.)
  // await page.getByRole('textbox', { name: 'Email' }).fill('user@example.com');
  await page.locator('#user_email').click()
  await page.locator('#user_email').fill('johnpaulo.delaumbria@codevelopr.com')
  await page.locator('#user_password').click()
  await page.locator('#user_password').fill('P@ssw0rd1')
  await page.locator('#new_user > div.actions > input').click()
  await page.pause();
});

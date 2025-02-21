import { test, expect, chromium } from '@playwright/test';
import { ManifoldLoginPage } from '../pages/Manifold';  // Import the LoginPage

test('Check the insecure HTTPS URL (bypass SSL errors)', async () => {
  // Launch browser with SSL certificate validation disabled
  const browser = await chromium.launch({
    args: ['--ignore-certificate-errors'],  // Ignore certificate errors
  });
  const page = await browser.newPage();

  // Create an instance of the LoginPage
  const loginPage = new ManifoldLoginPage(page);

  // Navigate to the page (This will use the goto method of the LoginPage)
  await loginPage.goto();

  // Fill the login form (This will use the fillLoginForm method)
  await loginPage.fillLoginForm('johnpaulo.delaumbria@codevelopr.com', 'P@ssw0rd1');

  // Submit the form (This will use the submitLogin method)
  await loginPage.submitLogin();

  // Optionally, add assertions to verify the login was successful, e.g.:
  // await expect(page).toHaveURL('expectedURLAfterLogin');

  await page.close();
});

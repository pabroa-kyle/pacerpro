import { test, expect } from '@playwright/test';
import { EmlLoginPage } from '../pages/EmlLogin';
import { NewElectronicMailPage } from '../pages/NewElectronicMailPage';
import { emlTestData } from '../data/EmlTestData';

test('should create a new electronic mail', async ({ page }) => {
  // Initialize the page objects
  const loginPage = new EmlLoginPage(page);
  const newMailPage = new NewElectronicMailPage(page);

  // Login to the application
  await loginPage.gotoLoginPage();
  await loginPage.fillEmail(emlTestData.login.email);
  await loginPage.fillPassword(emlTestData.login.password);
  await loginPage.submitLogin();

  // Navigate to the "New Electronic Mail" page
  await page.getByRole('link', { name: 'Electronic Mails' }).click();
  await page.getByRole('link', { name: 'New Electronic Mail' }).click();

  // Fill the form for the new electronic mail
  await newMailPage.fillFromField(emlTestData.newElectricMail.from);
  await newMailPage.fillToField(emlTestData.newElectricMail.to);
  await newMailPage.checkApiCheckbox();
  await newMailPage.selectInboundUrl();
  await newMailPage.uploadEmlFile(emlTestData.newElectricMail.emlFilePath);

  // Submit the form
  await newMailPage.submitForm();

  // Verify the result
  await expect(page).toHaveURL(/\/admin\/electronic_mails/);

  await page.close();
});

import { test, expect } from '@playwright/test';
import { NewElectronicMailPage } from '../pages/NewElectronicMailPage';
import { emlTestData } from '../data/EmlTestData';

test('should create a new electronic mail', async ({ page }) => {
  const newMailPage = new NewElectronicMailPage(page);

  // Login to the application
  await newMailPage.gotoLoginPage();
  await newMailPage.fillEmail(emlTestData.login.email);
  await newMailPage.fillPassword(emlTestData.login.password);
  await newMailPage.submitLogin();

  // Navigate to "New Electronic Mail" page
  await page.getByRole('link', { name: 'Electronic Mails' }).click();
  await page.getByRole('link', { name: 'New Electronic Mail' }).click();

  // Fill the form
  await newMailPage.fillFromField(emlTestData.newElectricMail.from);
  await newMailPage.fillToField(emlTestData.newElectricMail.to);
  await newMailPage.checkApiCheckbox();
  await newMailPage.selectInboundUrl();
  await newMailPage.uploadEmlFile(emlTestData.newElectricMail.emlFilePath);

  // Submit the form
  await newMailPage.submitForm();

  // Verify successful navigation
  await expect(page).toHaveURL(/\/admin\/electronic_mails/);

  await page.close();
});

import { test, expect } from '@playwright/test';
import { EmlLoginPage } from '../pages/EmlLogin';
import { NewElectronicMailPage } from '../pages/NewElectronicMailPage';


test('should create a new electronic mail', async ({ page }) => {
  // Initialize the page objects
  const loginPage = new EmlLoginPage(page);
  const newMailPage = new NewElectronicMailPage(page);

  // Login to the application
  await loginPage.gotoLoginPage();
  await loginPage.fillEmail('qa@cloudmailin.codevelopr.com');
  await loginPage.fillPassword('PacerPro2022!');
  await loginPage.submitLogin();

  // Navigate to the "New Electronic Mail" page
  await page.getByRole('link', { name: 'Electronic Mails' }).click();
  await page.getByRole('link', { name: 'New Electronic Mail' }).click();

  // Fill the form for the new electronic mail
  await newMailPage.fillFromField('efile@nycourts.gov');
  await newMailPage.fillToField('engineering.automation@pacerpro.com'); // Correct the email
  await newMailPage.checkApiCheckbox();
  await newMailPage.selectInboundUrl();
  //await newMailPage.optionInboundUrl();
  await newMailPage.uploadEmlFile('eml/31924626.eml');

  // Submit the form
  await newMailPage.submitForm();

  // Optionally, verify the result (you can adjust based on the expected result after submission)
  await expect(page).toHaveURL(/\/admin\/electronic_mails/);

  await page.close()
});
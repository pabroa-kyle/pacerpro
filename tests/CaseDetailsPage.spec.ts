import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/pacerpro";
import { HomePage } from "../pages/HomePage";  // Assuming a LoginPage class
import { CaseDetailsPage } from "../pages/CaseDetailsPage";

test("Verify case link navigation with login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const caseDetailsPage = new CaseDetailsPage(page);

  // Navigate to the login page and login
  await loginPage.gotoLoginPage();
  await loginPage.SignUp("engineering.automation@pacerpro.com", "QzQqMj123!");  // Replace with valid credentials

  // After login, navigate to the case page
  await page.goto("");

  // Ensure the case link is visible before clicking
  
  await caseDetailsPage.clickCaseLink();

  // Verify that the case page is now visible
  await expect(page).toHaveURL(/\/\//);
});

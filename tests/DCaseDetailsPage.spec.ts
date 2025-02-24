import { test, expect } from "@playwright/test";
import { CaseDetailsPage } from "../pages/CaseDetailsPage";
import { caseDetailsData } from "../data/caseDetailsData";

test("Verify case link navigation with login", async ({ page }) => {
  const caseDetailsPage = new CaseDetailsPage(page);

  // Navigate to the login page and login using test data
  await caseDetailsPage.gotoLoginPage();
  await caseDetailsPage.SignUp(caseDetailsData.validUser.email, caseDetailsData.validUser.password);

  // Click case link
  await caseDetailsPage.clickCaseLink();
  
  await page.close();
});

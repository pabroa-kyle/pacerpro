import {test, expect, Page} from '@playwright/test'
import { LoginPage } from '../pages/pacerpro'
import { HomePage } from '../pages/HomePage'


test('Navigate to Home and Click My Cases', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.gotoLoginPage();
    await loginPage.SignUp('engineering.automation@pacerpro.com', 'QzQqMj123!');
    
    await homePage.clickMyCases();
});

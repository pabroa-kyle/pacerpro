import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/pacerpro'

test('Log In', async ({ page }: { page: Page }) => {
    const Login = new LoginPage(page);
    
    await Login.gotoLoginPage();
    await Login.SignUp('engineering.automation@pacerpro.com', 'QzQqMj123!');
    //await Login.clickMyCases();
});

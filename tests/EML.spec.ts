import { test, expect } from '@playwright/test';
import { EmlPage } from '../pages/EML';

test('Login', async ({ page }: {page: EmlPage }) => {
    const Login = new EmlPage(page);
    
    await Login.gotoEmlPage();
    await Login.LogIn('qa@cloudmailin.codevelopr.com', 'PacerPro2022!');
    await page.pause()
    //await Login.clickMyCases();
});
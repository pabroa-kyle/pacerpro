import { Page, expect } from '@playwright/test';

export class LoginPage {
    private page: Page;
    private emailAddressTextbox;
    private emailOrPhoneTextbox;
    private passwordTextbox;
    private nextButton;
    private doThisLaterButton;
    private myCasesButton;

    constructor(page: Page) {
        this.page = page;
        this.emailAddressTextbox = page.locator('#email');
        this.emailOrPhoneTextbox = page.locator('#identifierId');
        this.passwordTextbox = page.locator("input[name='Passwd']")
        this.doThisLaterButton = page.getByRole('link', { name: 'Do this later' });
        this.nextButton = page.getByRole('button', { name: 'NEXT' })
        //this.myCasesButton = page.locator('[data-test="mycases"]').getByRole('link');
    }

    async gotoLoginPage(): Promise<void> {
        await this.page.goto('https://pacerpro-qa.herokuapp.com');
    }

    async SignUp(username: string, password: string): Promise<void> {
        await this.emailAddressTextbox.fill(username);
        await this.nextButton.click();
        await this.emailOrPhoneTextbox.fill(username);
        await this.nextButton.click();
        await this.passwordTextbox.fill(password);
        await this.nextButton.click();
        await this.doThisLaterButton.click();
    }

    // async clickMyCases(): Promise<void> {
    //     await this.myCasesButton.click();
    // }
}

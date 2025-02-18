import { Page, Locator } from "@playwright/test";

export class EmlPage {

  private page: Page;
  private emailInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    // Define locators for the elements
    this.emailInput = page.locator('#admin_user_email');
    this.passwordInput = page.locator('#admin_user_password');
    this.loginButton = page.locator('input[name="commit"][type="submit"]');
  }

  async gotoEmlPage(): Promise<void> {
    await this.page.goto('https://immigration-ph.herokuapp.com/admin/electronic_mails');
   // await this.page.goto('https://immigration-ph.herokuapp.com/admin/electronic_mails/new')
}

  async LogIn(username: string, password: string): Promise<void> {
    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
}
}

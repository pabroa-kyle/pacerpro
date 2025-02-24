import { Page } from '@playwright/test';


export class EmlLoginPage {
  private page: Page;
  
  // Locators for the login page elements
  private emailInput = 'role=textbox[name="Email*"]';
  private passwordInput = 'role=textbox[name="Password*"]';
  private loginButton = 'role=button[name="Login"]';

  constructor(page: Page) {
    this.page = page;
  }

  // Method to navigate to the login page
  async gotoLoginPage(): Promise<void> {
    await this.page.goto('https://immigration-ph.herokuapp.com/admin/login');
  }

  // Method to fill out email
  async fillEmail(email: string): Promise<void> {
    await this.page.locator(this.emailInput).fill(email);
  }

  // Method to fill out password
  async fillPassword(password: string): Promise<void> {
    await this.page.locator(this.passwordInput).fill(password);
  }

  // Method to submit the login form
  async submitLogin(): Promise<void> {
    await this.page.locator(this.loginButton).click();
  }
}

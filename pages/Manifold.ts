import { Page, Locator } from '@playwright/test';

export class ManifoldLoginPage {
  private page: Page;

  // Locators for the login page elements
  private emailInput: Locator;
  private passwordInput: Locator;
  private submitButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Initialize locators
    this.emailInput = page.locator('#user_email');
    this.passwordInput = page.locator('#user_password');
    this.submitButton = page.locator('#new_user > div.actions > input');
  }

  // Method to navigate to the login page
  async goto(): Promise<void> {
    await this.page.goto('https://manifold-test-4.pacerpro.com/', { waitUntil: 'load' });
  }

  // Method to fill out the login form
  async fillLoginForm(email: string, password: string): Promise<void> {
    await this.emailInput.click();
    await this.emailInput.fill(email);

    await this.passwordInput.click();
    await this.passwordInput.fill(password);
  }

  // Method to submit the login form
  async submitLogin(): Promise<void> {
    await this.submitButton.click();
  }
}

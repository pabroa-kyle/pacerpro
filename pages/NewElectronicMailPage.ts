import { Page, Locator } from '@playwright/test';

export class NewElectronicMailPage {
  private page: Page;

  private emailInput: Locator
  private passwordInput: Locator
  private loginButton: Locator

  private bLocator: Locator;
  private inboundUrlOptionLocator: Locator;
  
  // Locators for the new electronic mail page elements
  private fromInput: Locator;
  private toInput: Locator;
  private apiCheckbox: Locator;
  private inboundUrlSelect: Locator;
  private submitButton: Locator;
  private emlInput: Locator;
  optionInboundUrl: any;

  constructor(page: Page) {
    this.page = page;

    // LOGIN
    this.emailInput = page.getByRole('textbox', { name: 'Email*' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password*' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    // Initialize locators as Locator objects instead of strings
    this.fromInput = page.locator('role=textbox[name="From*"]');
    this.toInput = page.locator('role=textbox[name="To*"]');
    this.apiCheckbox = page.locator('role=checkbox[name="Api"]');
    this.inboundUrlSelect = page.locator('#electronic_mail_inbound_url_input > span > span.selection > span > span.select2-selection__arrow > b');
    this.submitButton = page.locator('#electronic_mail_submit_action > input[type=submit]');
    this.emlInput = page.locator('role=textbox[name="Eml*"]');
    this.bLocator = page.locator('b');
    this.inboundUrlOptionLocator = page.locator('role=option[name="QA ENV Heroku"]');
  }


  // Navigate to login page
  async gotoLoginPage(): Promise<void> {
    await this.page.goto('https://immigration-ph.herokuapp.com/admin/login');
  }

  // Fill login credentials
  async fillEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async submitLogin(): Promise<void> {
    await this.loginButton.click();
  }

  // Fill "From" and "To" fields
  async fillFromField(from: string): Promise<void> {
    await this.fromInput.fill(from);
  }

  async fillToField(to: string): Promise<void> {
    await this.toInput.fill(to);
  }

  // Check API checkbox
  async checkApiCheckbox(): Promise<void> {
    await this.apiCheckbox.check();
  }

  // Select the inbound URL from dropdown
  async selectInboundUrl(): Promise<void> {
    await this.inboundUrlSelect.click({ force: true });
    await this.inboundUrlOptionLocator.waitFor({ state: 'visible' });
    await this.inboundUrlOptionLocator.click();
  }

  // Upload an EML file
  async uploadEmlFile(filePath: string): Promise<void> {
    await this.emlInput.setInputFiles(filePath);
  }

  // Submit the form
  async submitForm(): Promise<void> {
    await this.submitButton.click();
  }
}
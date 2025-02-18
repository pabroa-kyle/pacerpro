import { Page, Locator } from '@playwright/test';

export class NewElectronicMailPage {
  private page: Page;
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

  // Method to fill out "From" field
  async fillFromField(from: string): Promise<void> {
    await this.fromInput.fill(from); // Now it's a Locator, not a string
  }

  // Method to fill out "To" field
  async fillToField(to: string): Promise<void> {
    await this.toInput.fill(to);
  }

  // Method to check the API checkbox
  async checkApiCheckbox(): Promise<void> {
    await this.apiCheckbox.check();
  }

  // Method to select the inbound URL from the dropdown
  async selectInboundUrl(): Promise<void> {
    const inboundUrlSelectLocator = this.inboundUrlSelect;
    await inboundUrlSelectLocator.click({ force: true, timeout: 6000 });
    await this.inboundUrlOptionLocator.waitFor({ state: 'visible' });
    await this.inboundUrlOptionLocator.click({timeout:6000});
  }

  // Method to click the <b> element
  async clickBoldText(): Promise<void> {
    await this.bLocator.click();
  }

  // Method to upload an EML file
  async uploadEmlFile(filePath: string): Promise<void> {
    await this.emlInput.setInputFiles(filePath);
  }

  // Method to submit the new electronic mail form
  async submitForm(): Promise<void> {
    await this.submitButton.click();
  }
}

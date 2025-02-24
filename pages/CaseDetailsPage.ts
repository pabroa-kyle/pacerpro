import { Page, Locator } from "@playwright/test";

export class CaseDetailsPage {
  private page: Page;
  private emailAddressTextbox;
  private emailOrPhoneTextbox;
  private passwordTextbox;
  private nextButton;
  private doThisLaterButton;
  private caseLink: Locator
  private docketEntries: Locator

  constructor(page: Page) {
    this.page = page;
    this.caseLink = page.locator("#content > article > div > div > div.css-o0ej6l > div:nth-child(1) > div > div > div > div > div > div:nth-child(3) > div > div.css-m8dtke > a");

    //LOGIN
    this.emailAddressTextbox = page.locator('#email');
    this.emailOrPhoneTextbox = page.locator('#identifierId');
    this.passwordTextbox = page.locator("input[name='Passwd']")
    this.doThisLaterButton = page.getByRole('link', { name: 'Do this later' });
    this.nextButton = page.getByRole('button', { name: 'NEXT' })
    //this.docketEntries = page.locator("#docket_entries_wrapper > li > div > span.docket_text > span > span > span")
  }

  async gotoLoginPage(): Promise<void> {
    await this.page.goto('https://pacerpro-qa.herokuapp.com/mycases');
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

  async clickCaseLink(): Promise<void> {
    await this.caseLink.click();
  }

}
import { Page, Locator } from "@playwright/test";

export class CaseDetailsPage {
  private page: Page;
  private caseLink: Locator
  private docketEntries: Locator

  constructor(page: Page) {
    this.page = page;
    this.caseLink = page.locator("#content > article > div > div > div.css-o0ej6l > div:nth-child(1) > div > div > div > div > div > div:nth-child(3) > div > div.css-m8dtke > a");
    //this.docketEntries = page.locator("#docket_entries_wrapper > li > div > span.docket_text > span > span > span")
  }


  async clickCaseLink(): Promise <void> {
    await this.caseLink.click();
  }

}
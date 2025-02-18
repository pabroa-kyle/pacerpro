import { Page, Locator } from "@playwright/test";

export class CaseDetailsPage {
  private page: Page;
  private caseLink: Locator
  private docketEntries: Locator

  constructor(page: Page) {
    this.page = page;
    this.caseLink = page.locator("");
    this.docketEntries = page.locator("")
  }

//   async caseDetailsPage(): Promise<void> {

//     await this.page.goto('https://pacerpro-qa.herokuapp.com/');
// }


  async clickCaseLink(): Promise <void> {
    await this.caseLink.click();
  }

//   async getCaseHref(): Promise<string | null> {
//     return await this.caseLink.getAttribute("href");
//   }
}

import { Page, expect } from "@playwright/test"

export class HomePage{
    

    private page: Page
    private myCasesButton;
    private allCasesButton;

    constructor (page: Page){
        this.page = page;
        this.myCasesButton = page.locator('#content > article > div > header > div.css-uliqdc > div:nth-child(1) > a > svg')
        this.allCasesButton = page.locator('[data-test="allcases"]')
    }


    async clickMyCases(): Promise<void> {
        await this.myCasesButton.click();
    }

    async clickAllCases(): Promise<void> {
        await this.allCasesButton.click();
    }
}
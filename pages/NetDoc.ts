import { Page, Locator } from '@playwright/test';

export class NetDoc {
    private page: Page;
    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    private favButton: Locator;
    private clientButton: Locator;
    private searchClient: Locator;
    private clientSelect: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('input[id="username"]');
        this.passwordInput = page.locator('input[id="password"]');
        this.loginButton = page.locator('#loginBtn');
        this.favButton = page.locator('#hSec21 > table > tbody > nd-dashboard-favorite-item > tr > td.lvNameCell > span > a');
        this.clientButton = page.locator('#openGoToWspaceBtn > span');
        this.searchClient = page.locator('#wsLinkField > span > input');
        this.clientSelect = page.locator('#pr_id_1_list > li > div.autocomplete-results-table.ng-star-inserted > div > div.autocomplete-results-description > span')
        
    }

    async goTo(): Promise<void> {
        await this.page.goto('https://vault.netvoyage.com/neWeb2/home');
    }

    async logIn(username: string, password: string): Promise<void> { 
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async favBtn(): Promise<void> {  
        await this.favButton.click();
    }

    async clientMatterButton(client: string): Promise<void> { 
        await this.clientButton.click();
        await this.searchClient.fill(client);
        await this.clientSelect.click()
    }
}

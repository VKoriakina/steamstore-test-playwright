const { expect, test } = require('@playwright/test');

export class AgeConfirm {

    constructor(page) {
        this.page = page;
        this.dateSelectLocator = page.locator(`//*[@id="ageDay"]//option[text()="${item}"]`);
        this.monthLocator = page.locator(`//select[@id ='ageMonth']`);
        this.yearLocator = page.locator(`//select[@id ='ageYear']`);
        this.btnViewPageLocator = page.locator("//a[@id ='view_product_page_btn']");
        }

    dateSelectLocator(item){

    }

    async confirmAge (date, month, year){
        await test.step(`Enter client age`, async () => {
            await this.page.waitForLoadState('load');

            await this.btnViewPageLocator.click();
        })
    }
}
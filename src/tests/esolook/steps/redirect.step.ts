import { Given } from "@cucumber/cucumber";
import { chromium, Browser, Page } from 'playwright';
import { expect } from "@playwright/test";

let browser: Browser;
let page: Page;
let url: string = "http://localhost:4200/";

Given('I go to Esolook homepage', async () => {
    browser = await chromium.launch();
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto(url);
});
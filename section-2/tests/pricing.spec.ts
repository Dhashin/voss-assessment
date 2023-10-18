import { test, expect } from '@playwright/test';
import {automationUrl, fakePricing, purchaseButton} from "../pages/automation";
import {submitMessage} from "../pages/forms";
import {invalidUrl} from "../pages/pricing";

test('purchase a fake course', async ({ page, browser ,}) => {
    await page.goto('https://www.ultimateqa.com/automation');

    await page.goto(automationUrl);
    await page.locator(fakePricing).click()
    const allPurchaseButtons = page.locator(purchaseButton);
    await expect(allPurchaseButtons).toHaveCount(3);
    await page.locator(purchaseButton).first().click()
    await page.waitForLoadState('domcontentloaded')
    const pageUrl = page.url()
    expect(pageUrl).not.toEqual(invalidUrl)


});


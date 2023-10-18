import {test, expect} from '@playwright/test';
import {
    arithmaticInputBox,
    arithmaticText,
    firstMessageInputBox,
    firstNameInputBox,
    firstSubmitButton, formUrl, secondMessageInputBox,
    secondNameInputBox, secondSubmitButton,
    submitMessage
} from "../pages/forms";
import {randomUUID} from "crypto";
import {automationUrl, fillForms} from "../pages/automation";

test('fill out all forms and submit', async ({page, browser,}) => {
    await page.goto(automationUrl);


    await expect(page).toHaveTitle(/Automation Practice - Ultimate QA/);
    await page.click(fillForms)
    await page.waitForURL(formUrl)
    await page.waitForSelector(firstNameInputBox)
    await page.locator(firstNameInputBox).fill("dhashin")
    await page.waitForSelector(firstMessageInputBox, {state:"visible"})
    await page.locator(firstMessageInputBox).click()
    const uuid = randomUUID()
    await page.locator(firstMessageInputBox).pressSequentially(uuid)
    await page.waitForLoadState('networkidle')

    await page.waitForSelector(firstSubmitButton, {state:"visible"})
    await page.locator(firstSubmitButton).click()
    const list = page.locator(submitMessage);
    await expect(list).toHaveCount(1);

    await page.waitForSelector(secondNameInputBox)
    await page.locator(secondNameInputBox).fill("dhashin")
    await page.waitForSelector(secondMessageInputBox)
    await page.locator(secondMessageInputBox).fill("Testing")

    const arithmaticTextToSolve = await page.locator(arithmaticText).allTextContents()
    console.log(arithmaticTextToSolve)
    let number1 =  arithmaticTextToSolve[0].slice(0, arithmaticTextToSolve[0].indexOf('+')).trim()
    let number2 =  arithmaticTextToSolve[0].slice( arithmaticTextToSolve[0].indexOf('+') +1).trim()
    const answer = parseInt(number1)+parseInt(number2)
    await page.locator(arithmaticInputBox).fill(answer.toString())



    await page.locator(secondSubmitButton).click()
    await page.waitForSelector(submitMessage)
    const anotherList = page.locator(submitMessage);
    await expect(anotherList).toHaveCount(2);


});

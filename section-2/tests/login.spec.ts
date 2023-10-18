import { test, expect } from '@playwright/test';
import {automationUrl, loginLink} from "../pages/automation";
import {signInUrl} from "../pages/sign-in";
import {dasboardText, profile, signout} from "../pages/homepage";

test('login, and signout', async ({ page, browser ,}) => {
  await page.goto(automationUrl);


  await expect(page).toHaveTitle(/Automation Practice - Ultimate QA/);
  await page.screenshot({
    path: "firstScreenshot.png"
  })

  await page.click(loginLink)
  await page.waitForURL(signInUrl)
  await page.getByPlaceholder('Email').fill("dhashinmoodley@yahoo.com")
  await page.getByPlaceholder("Password").fill("Testing123!")
  await page.getByRole('button', { name: 'Sign in' }).click()
  await page.waitForSelector(dasboardText)
  await page.click(profile)
  await page.click(signout)

});


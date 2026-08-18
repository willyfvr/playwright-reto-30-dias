import {expect, test} from "@playwright/test";

test("login Orange HRM", async ({ page }) => {


  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  await page.getByRole('textbox', {name: 'Username'}).fill('Admin');
  await page.getByRole('textbox', {name: 'Password'}).fill('admin123');
  
  await page.getByRole('button', {name: 'Login'}).click();

  // now we need to validate that login was successful

  // role: heading
  await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible()

})

test("login Orange HRM invalid user", async ({ page }) => {


  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  await page.getByRole('textbox', {name: 'Username'}).fill('pototito');
  await page.getByRole('textbox', {name: 'Password'}).fill('admin123');
  await page.getByRole('button', {name: 'Login'}).click();

  await expect(page.getByText("Invalid Credentials")).toBeVisible()

})

test("login Orange HRM invalid password", async ({ page }) => {


  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  await page.getByRole('textbox', {name: 'Username'}).fill('Admin');
  await page.getByRole('textbox', {name: 'Password'}).fill('username');
  await page.getByRole('button', {name: 'Login'}).click();

  await expect(page.getByText("Invalid Credentials")).toBeVisible()

})
// WEB SCRAPING => sacar información de las páginas

import { expect, test } from '@playwright/test';

test('get all the usernames registered', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  await page.getByRole('link', { name: 'Admin' }).click();

  await page.getByRole('navigation', { name: 'Topbar Menu' }).getByText('User Management').click();
  await page.getByRole('menuitem', { name: 'Users' }).click();

  // get qty rows
  const rows = page.getByRole('table').getByRole('row');

  // I create an array of users
  const usernames: string[] = [];

  const rowCount = await rows.count();

  // start in 1 because 0 is the table header
  for (let i = 1; i < rowCount; i++) {
    const cell = rows.nth(i).getByRole('cell').nth(1); // con nth accedo a un elemento. accedo a cell 1 porque es la columna de los usernames
    const username = await cell.textContent();

    if (username) {
      usernames.push(username);
    }
  }

  console.log(usernames);
});

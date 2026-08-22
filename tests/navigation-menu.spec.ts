import {test, expect} from "@playwright/test";

test("Check left menu options.", async({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  await page.getByRole('textbox', {name: 'Username'}).fill('Admin');
  await page.getByRole('textbox', {name: 'Password'}).fill('admin123');
  await page.getByRole('button', {name: 'Login'}).click();

  await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();


  const leftMenuItems = page.getByLabel('Sidepanel').getByRole("listitem");
  const currentMenuItemsCount = await leftMenuItems.count();

  console.log("Current menu items count:", currentMenuItemsCount);

  const currentMenuItems: string[] = [];

  for(let i=0; i < currentMenuItemsCount; i++) {
    const menuText = await leftMenuItems.nth(i).innerText();
    currentMenuItems.push(menuText);
  }

  console.log(currentMenuItems);

  const expectedMenuItems = [
    'Admin',
    'PIM',
    'Leave',
    'Time',
    'Recruitment',
    'My Info',
    'Performance',
    'Dashboard',
    'Directory',
    'Maintenance',
    'Claim',
    'Buzz'
  ];

  expect(currentMenuItems).toEqual(expectedMenuItems);

  

  const actualFirstOption = currentMenuItems[0];
  const expectFirstOption = expectedMenuItems[0];
  console.log("The first element is: ", actualFirstOption)

  expect(actualFirstOption).toEqual(expectFirstOption);

})
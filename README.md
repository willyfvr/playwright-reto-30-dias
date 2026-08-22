# Playwright Reto 30 días

![Reto 30 días](./resources/img/reto-30-dias.png)

## [PLAYWRIGHT RETO 30 DIAS (youtube)](https://www.youtube.com/watch?v=Qb-2wHUVVas&list=PLeo6Q1inqlOdzmWkbp0KqG79x2JM1OgzN)


### Video 6 resource: 

[Saucedemo Link](https://saucedemo.com)

### Video 7 resource: 

[Orange HRM](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)

### last video
[![Youtube Video 9 - Challenge Day 3](https://www.youtube.com/watch?v=cFpY2ureW34&list=PLeo6Q1inqlOdzmWkbp0KqG79x2JM1OgzN&index=9)](https://www.youtube.com/watch?v=cFpY2ureW34&list=PLeo6Q1inqlOdzmWkbp0KqG79x2JM1OgzN&index=9)



## <mark>How to run tests by terminal</mark>

` npx playwright test --grep "<<test name>>" --project="chromium" --headed `


## <mark>TIPS</mark>
## Browser Inspector Tip

- A good tip to use the browser inspector to "select" elements is to use the label "Accessibility" to see the properties of the element selected.


![Inspector Accessibility](./resources/img/inspector-accessibility.png)

## Important Functions 

### nth(index)

- (method) Locator.nth(index: number): Locator

Returns locator to the n-th matching element. It's zero based,nth(0)selects the first element.

Usage

`const banana = await page.getByRole('listitem').nth(2); `

this example return the position 3 in the list (0, 1, 2)

------------------------------------------------------------

## NOTES

- difference between `innerText()` and `contentText()` functions

**contentText()**: get the text from the DOM, visible or not for the user. 

**innerText()**: get the text that user see.
  
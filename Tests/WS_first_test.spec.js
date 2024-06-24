//const { test, expect } = require('@playwright/test');
import { test, expect} from '@playwright/test';

test('Has corect title', async ({ page }) => {
    await page.goto('https://www.redmine.org');
    await expect(page).toHaveTitle(/Overview - Redmine/);
});
test('Verify that main menu btn is visible', async ({page}) => {
      await page.goto('https://www.redmine.org');

      const ManuBtns =[
        'a[href="/projects/redmine"]',
        'a[href="/projects/redmine/wiki/Download"]',
        'a[href="/projects/redmine/activity"]',
        'a[href="/projects/redmine/roadmap"]',
        'a[href="/projects/redmine/issues"]',
        'a[href="/projects/redmine/news"]',
        'a[href="/projects/redmine/wiki"]',
        'a[href="/projects/redmine/boards"]',
        'a[href="/projects/redmine/repository"]'
      ];
      for (const selector of ManuBtns) {
        const isVisible = await page.isVisible(selector);
        console.log(`Menu button ${selector} is visible: ${isVisible}`);
      };
});
test('Verify that main manu btns is enabled ', async ({page}) => {
    await page.goto('https://www.redmine.org');
    const ManuBtns =[
      'a[href="/projects/redmine"]',
      'a[href="/projects/redmine/wiki/Download"]',
      'a[href="/projects/redmine/activity"]',
      'a[href="/projects/redmine/roadmap"]',
      'a[href="/projects/redmine/issues"]',
      'a[href="/projects/redmine/news"]',
      'a[href="/projects/redmine/wiki"]',
      'a[href="/projects/redmine/boards"]',
      'a[href="/projects/redmine/repository"]'
    ];
    for (const selector of ManuBtns) {
      const isEnabled = await page.isEnabled(selector);
      console.log(`Menu button ${selector} is enabled: ${isEnabled}`);
    };
});
test('Verify that main manu btns is clickable ', async ({page}) => {
  await page.goto('https://www.redmine.org');
  const ManuBtns =[
    'a[href="/projects/redmine"]',
    'a[href="/projects/redmine/wiki/Download"]',
    'a[href="/projects/redmine/activity"]',
    'a[href="/projects/redmine/roadmap"]',
    'a[href="/projects/redmine/issues"]',
    'a[href="/projects/redmine/news"]',
    'a[href="/projects/redmine/wiki"]',
    'a[href="/projects/redmine/boards"]',
    'a[href="/projects/redmine/repository"]'
  ];
  for (const selector of ManuBtns) {
    const isClickable = await page.$eval(selector, button => {
      button.scrollIntoView();
      return button instanceof HTMLElement && !button.disabled;
    });
    if (isClickable) {
      console.log(`Button ${selector} is clickable.`);
    } else {
      console.log(`Button ${selector} is not clickable.`);
    }
  }
});
test('Verify user can log in', async ({page}) => {
  await page.goto('https://www.redmine.org');
  const LoginBtnSelector = 'a[href="/login"]';
  await page.click(LoginBtnSelector);
  await page.fill('#username','Tamada');
  await page.fill('#password', '1928374656');
  await page.click('#login-submit');
  const logoutButnSelector = 'a[href="/logout"]';
  await expect(page.locator(logoutButnSelector)).toBeVisible();
});



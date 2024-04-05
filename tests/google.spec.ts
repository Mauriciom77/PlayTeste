import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://google.com.br');
});

const TODO_ITEMS = [
  'buy some cheese',
  'feed the cat',
  'book a doctors appointment'
];


test('should allow me to add todo items', async ({ page }) => {
  await page.locator("ggg").click();
  await page.screenshot({ path: 'screenshot.png' });

});


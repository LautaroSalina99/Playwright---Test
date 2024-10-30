import { test, expect  } from "@playwright/test";

test('test', async ({ page }) => {
    await page.goto('https://bienal-front-end-viuu.vercel.app/');
});
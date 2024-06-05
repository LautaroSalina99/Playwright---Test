// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

//Cremaos un test nuevo para probar en una pagina web
test('test 3', async ({ page }) => { //el objeto page es para navegar hacia una pagina
  
  await page.goto('http://mercadolibre.com.ar') //localizamos la pagina con .goto, utilzando la url de la misma 

  await page.locator('input[id=\'cb1-edit\']').fill('iphone') //localizamos un elemento con .locator y que lo llene con una palabra

  await page.keyboard.press('Enter') //apretamos la tecla 'Enter', usando el comando keyboard

  await expect(page.locator('//ol[contains(@Class, \'ui-search-layout\')]')).toBeVisible() //usamos expect para asegurarnos de que el objeto sea visible 
  await page.pause() //utilizams .pause para parar la ejecucion en un determinado momemnto y comprobar que todo lo que estamos haciendo esta bien
});


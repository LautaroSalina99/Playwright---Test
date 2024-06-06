import { test, expect } from '@playwright/test';

//Usando record new (herramienta de playwright)
test('test', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.ar/');
  await page.getByPlaceholder('Buscar productos, marcas y má').click();
  await page.getByPlaceholder('Buscar productos, marcas y má').fill('iphone');
  await page.getByPlaceholder('Buscar productos, marcas y má').press('Enter');
  await page.getByRole('link', { name: 'Apple iPhone SE (2da generaci' }).click();
  await page.getByRole('button', { name: 'Comprar ahora' }).first().click();
});

//usamos esta herramienta para grabar las acciones que hacemos dentro de una pagina y esta lo pasa a codigo segun lo que hagamos
//no se debe abusar de la herramienta, porque se debe ser muy concreto con las acciones

//Usando getByRole 
test('test locator', async ({ page }) => {

  await page.goto('https://www.mercadolibre.com.ar/')
  //await page.getByRole('link', {name: 'Mis compras'}).click()
  await page.getByRole('link', {name: 'Ofertas', exact: true}).click() //en el caso de querer presionar un boton con varias opciones, hay que expecificar
  
  await page.pause()

});
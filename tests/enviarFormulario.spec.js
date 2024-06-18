import {test, expect} from '@playwright/test'

test('test en NutriTech', async ({ page }) => {

await page.goto ('https://integrador2024-3ro4toynutricion.onrender.com/')

await page.getByRole('link',{name: 'FORMULARIO'}).click()

// Elijo aleatoriamente entre "Masculino" y "Femenino"
const gender = Math.random() < 0.5 ? 'Masculino' : 'Femenino'; //se genera un num aleatorio entre el 0 y 1
await page.getByRole('radio', { name: gender }).click(); //si es menor a 0,5 es masculino, si es mayor femenino

// Genero una edad aleatoria entre 1 y 100
const age = Math.floor(Math.random() * 100) + 1; //Math random genera un numero aleatoria del 1 al 100
                                                //math floor redondea el numero hacia abajo para obtener un numero entero entre 0 y 99
                                                //por eso se añade +1 para ajustar el rango a 1-100
// Selecciono la edad en el combobox
await page.getByRole('combobox', { name: 'Edad' }).selectOption({ label: age.toString() })

//Seleccionado la opinion de la galletita
const opinions = ['😊 Muy buena', '😄 Buena', '😐 Regular', '😕 Mala', '🤢 Muy mala'] //defino los tipos de sabores 
const randomOpinion = opinions[Math.floor(Math.random() * opinions.length)] //selecciona un sabor aleatorio de la lista
await page.getByRole('radio', { name: randomOpinion }).click();

//Elijo la intensidad del sabor 
const intensityFlover = Math.floor(Math.random() * 10) + 1; //Generar un valor aleatorio para el slider de intensidad de sabor (1-10)

// Seleccionar el valor en el slider
await page.locator('input[type="range"][name="sabor"]').fill(intensityFlover.toString()) //selecciono el slider con un valor aleatorio 

//Elijo la intensidad del sabor
const intensityColor = Math.floor(Math.random() * 10) + 1;
await page.locator('input[type="range"][name="color"]').fill(intensityColor.toString())

//Elijo la intensidad de la apariencia
const intensityAppearance = Math.floor(Math.random() * 10) + 1;
await page.locator('input[type="range"][name="apariencia"]').fill(intensityAppearance.toString())

//Elijo la intesidad de la textura 
const intensityTexture = Math.floor(Math.random() * 10) + 1;
await page.locator('input[type="range"][name="textura"]').fill(intensityTexture.toString())

//Elijo la intensidad del aroma
const intensityScent = Math.floor(Math.random() * 10) + 1;
await page.locator('input[type="range"][name="aroma"]').fill(intensityScent.toString())

await page.getByRole('button', {name: 'Finalizar encuesta'}).click()

// await page.getByRole('button', {name: 'Ver más información'}).click()

await page.pause()

})
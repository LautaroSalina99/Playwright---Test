import {test, expect} from '@playwright/test'

test('test en NutriTech', async ({ page }) => {

    await page.goto ('https://integrador2024-3ro4toynutricion.onrender.com/')

    await page.getByRole('link',{name: 'FORMULARIO'}).click()
    await page.getByRole('radio',{name: 'Masculino'}).click()
    await page.getByRole('combobox',{name: 'Seleccione su edad'}).click()


    await page.pause()
})
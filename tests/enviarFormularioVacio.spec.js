import {test, expect} from '@playwright/test'

test('test en NutriTech', async ({ page }) => {

    await page.goto ('https://integrador2024-3ro4to-y-nutricion.vercel.app/')

    await page.getByRole('link',{name: 'FORMULARIO'}).click()

    await page.getByRole('button', {name: 'Finalizar encuesta'}).click()

    await page.pause()
})
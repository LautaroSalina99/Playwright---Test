import {test, expect} from '@playwright/test'

test('test en NutriTech', async ({ page }) => {

    await page.goto ('https://integrador2024-3ro4to-y-nutricion.vercel.app/')

    await page.getByRole('link', {name: 'MYADMIN'}).click()
    await page.getByRole('textbox', {name: 'example@Email.com'}).fill('stefanomerinoderui@gmail.com')
    await page.getByRole('textbox', {name: 'Password'}).fill('integradorStefano')
    await page.getByRole('button', {name: 'Login'}).click()
    //await page.getByRole('link', {name: 'LOGOUT'}).click()
    
    await page.pause()

})
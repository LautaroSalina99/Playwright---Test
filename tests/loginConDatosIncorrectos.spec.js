import {test, expect} from '@playwright/test'

test('test en NutriTech', async ({ page }) => {

    await page.goto ('https://integrador2024-3ro4toynutricion.onrender.com/')

    await page.getByRole('link', {name: 'MYADMIN'}).click()
    await page.getByRole('textbox', {name: 'example@Email.com'}).fill('stefanomerinoderui@gmail.con')
    await page.getByRole('textbox', {name: 'Password'}).fill('integradorSTEFANO')
    await page.getByRole('button', {name: 'Login'}).click()
    //await page.getByRole('link', {name: 'LOGOUT'}).click()
    
    await page.pause()

})
import {test, expect} from '@playwright/test'

//Probando requerimientos en una pagina ewb
test('test en saucedemo', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/') //ingresamos a la pagina 

    await page.getByRole('textbox', {name: 'Username'}).fill('standard_user') //le damos el nombre de usuario y que lo complete en el login
    await page.getByRole('textbox', {name: 'Password'}).fill('secret_sauce') // le damos contraseña y que lo complete en el login
    await page.getByRole('button', {name: 'Login'}).click() // hacemos que haga click en el boton de login

    const itemsContainer = await page.locator('#inventory_container .inventory_item').all() //con .all lo que hace es que me retorna una lista de elementos

    const randomIndex = Math.floor(Math.random() * itemsContainer.length) //aca hago que genere un item random del 1 añ 5

    const randomItem = itemsContainer[randomIndex] //aca hago que eliga uno de esos items random

    const expectedDescription = await randomItem.locator('.inventory_item_desc').innerText() //hago que dentro de un elemento me busque otro elemento
    const expectedName = await randomItem.locator('.inventory_item_name ').innerText()
    const expectedPrice = await randomItem.locator('.inventory_item_price').innerText()

    console.log(`Price: ${expectedPrice} Name: ${expectedName} Description: ${expectedDescription}`)

    await randomItem.getByRole('button', {name: 'Add to cart'}).click() //en este caso uso ramdomItem.getByrole para que le seccione un elemento random
                                                                        //y lo agregue al carrito

    await page.locator('a.shopping_cart_link').click() //lo que hagp es que despues de agregar al carrito, este vaya y haga click en el carrito
    
    await page.pause()

    expect (page.getByRole('button', {name: 'Checkout'})).toBeVisible()
    
    const actualName = await page.locator('.inventory_item_name').innerText()
    const actualDescription = await page.locator('.inventory_item_desc').innerText()
    const actualPrice = await page.locator('.inventory_item_price').innerText()

    expect(actualName).toEqual(expectedName)
    expect(actualDescription).toEqual(expectedDescription)
    expect(actualPrice).toEqual(expectedPrice)

});
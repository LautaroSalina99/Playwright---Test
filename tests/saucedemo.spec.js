import {test, expect} from '@playwright/test'

//Probando requerimientos en una pagina web
test('purchase an item', async ({ page }) => {

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
    
    //await page.pause()

    expect (page.getByRole('button', {name: 'Checkout   '})).toBeVisible()
    
    const actualName = await page.locator('.inventory_item_name').innerText()
    const actualDescription = await page.locator('.inventory_item_desc').innerText()
    const actualPrice = await page.locator('.inventory_item_price').innerText()

    expect(actualName).toEqual(expectedName)
    expect(actualDescription).toEqual(expectedDescription)
    expect(actualPrice).toEqual(expectedPrice)

    await page.getByRole('button', {name: 'Checkout'}).click() //hago clich en el boton Checkout
    await page.getByRole('textbox', {name: 'First name'}).fill('Lautaro') //completo la informacion del checkout con mi nombre
    await page.getByRole('textbox', {name: 'Last name'}).fill('Salina') //completo la informacion del checkout con mi apellido
    await page.getByRole('textbox', {name: 'Zip/Postal code'}).fill('3400')//completo la informacion del checkout con el codigo postal
    await page.getByRole('button', {name: 'Continue'}).click() // hacemos que haga click en el boton de continue
    await page.getByRole('button', {name: 'Finish'}).click() // hacemos que haga click en el boton de finish

    await expect (page.getByRole('heading', {name: 'Thank you for your order!'})).toBeVisible()

    await page.pause()
});

test('purchase an item 1', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/') //ingresamos a la pagina 
    await page.getByRole('textbox', {name: 'Username'}).fill('standard_user')
    await page.getByRole('textbox', {name: 'Password'}).fill('secret_sauce') 
})

test('purchase an item 2', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/') //ingresamos a la pagina 
    await page.getByRole('textbox', {name: 'Username'}).fill('standard_user')
    await page.getByRole('textbox', {name: 'Password'}).fill('secret_sauce') 
})
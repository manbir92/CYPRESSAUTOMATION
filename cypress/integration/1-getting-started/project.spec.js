// <reference types="cypress" />  

it('Add to cart', function ()
{
    cy.visit('https://automationteststore.com/');
    cy.url().should('eq','https://automationteststore.com/')
    cy.xpath('//*[@id="customer_menu_top"]').click()
    cy.xpath('//*[@id="loginFrm_loginname"]').type('psycho666')
    cy.xpath('//*[@id="loginFrm_password"]').type('psycho666')
    cy.xpath('//*[@id="loginFrm"]/fieldset/button').click()
    
    // Assertion to verify the title

    cy.title().should('eq','My Account')

    // Assertion to verify landed on correct page after login 
     
    cy.get('li').should('contain','Account Dashboard')
    cy.get('h1').should('contain','My Account').and('contain','MANBIR')

    // find element by using cypress playground

    cy.get('.subtext').should('contain','MANBIR')

    //Add product in cart

    cy.xpath('//*[@id="categorymenu"]/nav/ul/li[2]/a').click()

    cy.get('div').should('contain','Apparel & accessories')
    cy.xpath('//*[@id="maincontainer"]/div/div/div/div/ul/li[2]/div/a').click()
    cy.xpath('//*[@id="maincontainer"]/div/div/div/div/div[3]/div[6]/div[2]/a/img').click()

    cy.get('h1').should('contain','Casual 3/4 Sleeve Baseball T-Shirt')
    cy.xpath('//*[@id="product_quantity"]').clear()
    cy.xpath('//*[@id="product_quantity"]').type('4')

    cy.xpath('//*[@id="product"]/fieldset/div[6]/ul/li/a').click()
    cy.xpath('//*[@id="cart_checkout1"]').click()
    
    
    //Assertion for order summary


    cy.get('h1').should('contain','Checkout Confirmation')
    cy.get('h2').should('contain','Order Summary')

    cy.xpath('//*[@id="checkout_btn"]').click()

    //assertion for order confirmation

    cy.get('h1').should('contain',' Your Order Has Been Processed!')
    cy.get('div').should('contain','Thank you for shopping with us!')

    cy.xpath('//*[@id="maincontainer"]/div/div/div/div/section/p[3]/a').click()

    //Assertion for invoice (order details)

    cy.get('div').should('contain','Order ID')
    cy.get('div').should('contain','Shipping Address')
    cy.get('div').should('contain','Payment Address')
    cy.xpath('//*[@id="categorymenu"]/nav/ul/li[1]/a').click()
    

})
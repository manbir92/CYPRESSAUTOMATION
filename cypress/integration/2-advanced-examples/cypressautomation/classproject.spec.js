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
    cy.xpath('//*[@id="maincontainer"]/div/div/div/div/ul/li[2]/div/a').click()
    cy.xpath('//*[@id="maincontainer"]/div/div/div/div/div[3]/div[6]/div[2]/div[3]/a').click()
    cy.xpath('//*[@id="product"]/fieldset/div[6]/ul/li/a').click()
    cy.xpath('//*[@id="cart_checkout1"]').click()
    cy.xpath('//*[@id="checkout_btn"]').click()
    
    //Assertion for order conformation

    cy.get('div').should('contain','Thank you for shopping with us!')
    cy.xpath('//*[@id="maincontainer"]/div/div/div/div/section/p[3]/a').click()

    //Assertion for invoice (order details)

    cy.get('div').should('contain','Order ID')
    cy.get('div').should('contain','Shipping Address')
    cy.get('div').should('contain','Payment Address')

    cy.xpath('//*[@id="maincontainer"]/div/div[1]/div/div/div[4]/div/a[1]').click()
    cy.xpath('//*[@id="categorymenu"]/nav/ul/li[1]/a').click()
    

})
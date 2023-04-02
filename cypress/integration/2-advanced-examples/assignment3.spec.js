// <reference types="cypress" />  

it('Loginpage', function ()
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
})
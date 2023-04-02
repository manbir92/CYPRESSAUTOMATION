// <reference types="cypress" />  

it('Loginpage', function ()
{
    cy.visit('https://automationteststore.com/');
    cy.get('ul[id=customer_menu_top]').click()
    cy.get('input[name=loginname]').type('sukhman2002')
    cy.get('input[name=password]').type('sukhman2002')
    cy.get('button[title=Login]').click()
    
    // Assertion to verify the title

    cy.title().should('eq','My Account')

    // Assertion to verify landed on correct page after login 
     
    cy.get('h1').should('contain','My Account').and('contain','sukhman')

    
})
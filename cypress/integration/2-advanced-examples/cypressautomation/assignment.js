// <reference types="cypress" />  


describe('CustomSuite', function ()
{
 it('LoginTest-FirstCase', function ()
 {  
   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   cy.get('input[name=username]').type('Admin')
   cy.get('input[type=password]').type('admin123')
   cy.get('button[type=submit]').click()
  //  Assertion to verify the title
   cy.title().should('be.equal','OrangeHRM')
  
 })
  
})
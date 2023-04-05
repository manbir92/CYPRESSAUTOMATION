// <reference types="cypress" />  


describe('CustomSuite', function ()
{
    afterEach(function () {

        //it runs after each test case/it block
        cy.log('one test case complete')
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   
        // To close the website after each test case
    })

 it('LoginTest-FirstCase', function ()
 {  
   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   cy.get('input[name=username]').type('Admin')
   cy.get('input[type=password]').type('admin123')
   cy.get('button[type=submit]').click()
   cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[2]/ul/li/span').click()
   cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[2]/ul/li/ul/li[4]/a').click()
  //  Assertion to verify the title
   cy.title().should('be.equal','OrangeHRM')
  
 })
  
})
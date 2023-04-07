

// <reference types="cypress" />  
describe('hooks', function ()
{
  before(function () {

    //it runs after each test case/it block
    cy.log('website hook')
     cy.visit('https://automationteststore.com');
     cy.url().should('eq','https://automationteststore.com/')

    // To close the website after each test case
})
  beforeEach(function(){
   cy.log("login detail")
   cy.xpath('//*[@id="customer_menu_top"]').click()
   

  })
  afterEach(function() {
    //it run after each test case
    cy.log('logout hook')
    cy.xpath('//*[@id="maincontainer"]/div/div[2]/div[1]/div/ul/li[10]/a').click()
  
  }) 
  after(function() {
    cy.log('logout')
    cy.xpath('//*[@id="categorymenu"]/nav/ul/li[1]/a').click()
  })
      
      
it('buy product 1', function ()
{
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
    cy.xpath('//*[@id="customer_menu_top"]/li/a').click()
    

})
it('buy product 2', function ()
{
    
    
    cy.xpath('//*[@id="loginFrm_loginname"]').type('aman99')
    cy.xpath('//*[@id="loginFrm_password"]').type('aman1999')
    cy.xpath('//*[@id="loginFrm"]/fieldset/button').click()
    
    // Assertion to verify the title

    cy.title().should('eq','My Account')

    // Assertion to verify landed on correct page after login 
     
    cy.get('li').should('contain','Account Dashboard')
    cy.get('h1').should('contain','My Account').and('contain','aman')
     
    //buy product

    cy.xpath('//*[@id="categorymenu"]/nav/ul/li[8]/a').click()
    cy.get('h1').should('contain','Books')
    cy.xpath('//*[@id="maincontainer"]/div/div/div/div/div[3]/div[4]/div[2]/a/img').click()
    cy.get('h1').should('contain','Allegiant by Veronica Roth')
    cy.xpath('//*[@id="product_quantity"]').clear()
    cy.xpath('//*[@id="product_quantity"]').type('4')
    cy.xpath('//*[@id="product"]/fieldset/div[4]/ul/li/a').click()
    cy.xpath('//*[@id="cart_checkout1"]').click()
     //order csummary
     cy.get('h1').should('contain','Checkout Confirmation')
     cy.get('h2').should('contain','Order Summary')
     cy.xpath('//*[@id="checkout_btn"]').click()
 
     // order confirmation
 
     cy.get('h1').should('contain',' Your Order Has Been Processed!')
     cy.get('div').should('contain','Thank you for shopping with us!')
     cy.xpath('//*[@id="categorymenu"]/nav/ul/li[1]/a').click()
     cy.xpath('//*[@id="customer_menu_top"]/li/a').click()

    

})

  it('buy product 3', function ()
{
    
    
    cy.xpath('//*[@id="loginFrm_loginname"]').type('sukhman2002')
    cy.xpath('//*[@id="loginFrm_password"]').type('sukhman2002')
    cy.xpath('//*[@id="loginFrm"]/fieldset/button').click()
    
    // Assertion to verify the title

    cy.title().should('eq','My Account')

    // Assertion to verify landed on correct page after login 
     
    cy.get('li').should('contain','Account Dashboard')
    cy.get('h1').should('contain','My Account').and('contain','sukhman')

    //add product to cart
    
    cy.xpath('//*[@id="categorymenu"]/nav/ul/li[6]/a').click()
    cy.get('h1').should('contain','Men')
    cy.xpath('//*[@id="maincontainer"]/div/div/div/div/div[2]/div[1]/div[2]/a/img').click()
    cy.get('h1').should('contain','ck IN2U Eau De Toilette Spray for Him')
    cy.xpath('//*[@id="product_quantity"]').clear()
    cy.xpath('//*[@id="product_quantity"]').type('4')
    cy.xpath('//*[@id="product"]/fieldset/div[5]/ul/li/a').click()
    cy.xpath('//*[@id="cart_checkout1"]').click()
    
    //order csummary
    cy.get('h1').should('contain','Checkout Confirmation')
    cy.get('h2').should('contain','Order Summary')
    cy.xpath('//*[@id="checkout_btn"]').click()

    // order confirmation

    cy.get('h1').should('contain',' Your Order Has Been Processed!')
    cy.get('div').should('contain','Thank you for shopping with us!')
    cy.xpath('//*[@id="categorymenu"]/nav/ul/li[1]/a').click()
    cy.xpath('//*[@id="customer_menu_top"]/li/a').click()

})
  
})

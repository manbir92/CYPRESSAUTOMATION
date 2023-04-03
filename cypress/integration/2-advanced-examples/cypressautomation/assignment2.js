// <reference types="cypress" />  

// above reference is the intellisense and it shows suggestions when we are using the cypress

it('finds list cars', () => 
{  
  cy.visit('https://automationtesting.co.uk/dropdown.html');
  
  cy.xpath('//select[@name="cars"]').select('Ford')
  cy.xpath('//select[@name="cars"]').select('Audi')
  cy.xpath('//select[@name="cars"]').select('BMW')
  cy.xpath('//select[@name="cars"]').select('Jeep')
  cy.xpath('//select[@name="cars"]').select('Suzuki')
  cy.xpath('//select[@name="cars"]').select('Mercedes')
  cy.xpath('//select[@name="cars"]').select('Volkswagen')
  cy.xpath('//select[@name="cars"]').select('Honda')

  cy.title().should('be.equal','Dropdown Menus')
 
})
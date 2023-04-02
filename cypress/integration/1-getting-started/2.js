// <reference types="cypress" />  

// above reference is the intellisense and it shows suggestions when we are using the cypress

it('finds list cars', () => 
{  
  cy.visit('https://automationtesting.co.uk/dropdown.html');
  
  cy.xpath('//select[@name="cars"]').select('honda').should('have.value','honda')
  

  cy.title().should('be.equal','Dropdown Menus')
 
})

Cypress.Commands.add('fazerCompra', () => {
    cy.visit('/compra'); 
    cy.get('button[data-cy="comprar"]').click(); 
    cy.get('.confirmacao-compra').should('be.visible'); 
  });
  
  Cypress.Commands.add('login', (userData) => {
    cy.visit("https://www.saucedemo.com/")
    cy.wait(2000);
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  });
  
  Cypress.on('window:before:load', (win) => {
    win.sessionStorage.clear();
    win.localStorage.clear();
  });
  
/// <reference types="cypress" />

Cypress.Commands.add('login', (username: string, password: string) => {
  cy.visit('http://localhost:3000/login')
  cy.get('[cy-data=username-input]').type(username);
  cy.get('[cy-data=password-input]').type(password);
  cy.get('[cy-data=submit-input]').click();
})

Cypress.Commands.add('register', (username: string, password: string) => {
  cy.visit('http://localhost:3000/register')
  cy.get('[cy-data=username-input]').type(username);
  cy.get('[cy-data=password-input]').type(password);
  cy.get('[cy-data=submit-input]').click();
})

declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<void>,
      register(username: string, password: string): Chainable<void>

    }
  }
}
export { }
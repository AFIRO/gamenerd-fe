/// <reference types="cypress" />
import config from '../../src/config.json';
import { TestResponses } from "../test.responses";

const frontUrl = config.base_url_frontend
const backUrl = config.base_url_backend

Cypress.Commands.add('login', (username: string, password: string) => {
  cy.visit(frontUrl+'/login')
  cy.get('[cy-data=username-input]').type(username);
  cy.get('[cy-data=password-input]').type(password);
  cy.get('[cy-data=submit-input]').click();
})

Cypress.Commands.add('register', (username: string, password: string) => {
  cy.visit(frontUrl+'/register')
  cy.get('[cy-data=username-input]').type(username);
  cy.get('[cy-data=password-input]').type(password);
  cy.get('[cy-data=submit-input]').click();
})

Cypress.Commands.add('mockLoginResponseAdmin', () => {
  cy.intercept('POST', backUrl +'/login', TestResponses.LOGIN_RESPONSE_ADMIN)
})

Cypress.Commands.add('mockLoginResponseWriter', () => {
  cy.intercept('POST', backUrl +'/login', TestResponses.LOGIN_RESPONSE_WRITER)
})

Cypress.Commands.add('mockLoginResponseUser', () => {
  cy.intercept('POST', backUrl +'/login', TestResponses.LOGIN_RESPONSE_USER)
})

Cypress.Commands.add('mockRegisterResponse', () => {
  cy.intercept('POST', backUrl +'/register', TestResponses.LOGIN_RESPONSE_ADMIN)
})

Cypress.Commands.add('mockGamesGetAllResponse', () => {
  cy.intercept('GET',backUrl + "/games", TestResponses.GAMES_RESPONSE )
})

declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<void>,
      register(username: string, password: string): Chainable<void>

      mockLoginResponseAdmin(): Chainable<void>
      mockLoginResponseWriter(): Chainable<void>
      mockLoginResponseUser(): Chainable<void>
      mockRegisterResponse(): Chainable<void>
      mockGamesGetAllResponse(): Chainable<void>
    }
  }
}
export { }
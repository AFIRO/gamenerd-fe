import { TestResponses } from "../../test.responses";
import config from '../../../src/config.json';
const baseUrl = config.base_url_frontend

describe("Login screen tests", () => {
	it("should login with correct credentials", () => {
		cy.mockLoginResponseAdmin()
		cy.mockGamesGetAllResponse()
		cy.login("admin","admin")
		cy.get("h1").should("have.text",'Overzicht van alle games')
	});

	it("should not login with unknown user", () => {
		cy.visit(baseUrl)
		cy.login("admin2","admin2")
		cy.get('[cy-data=error-message]').should("have.text",'"No User found"')
	});

	it("should not login with incorrect credentials", () => {
		cy.visit(baseUrl)
		cy.login("admin","admin2")
		cy.get('[cy-data=error-message]').should("have.text",'"The given user and password do not match"')
	});

	it("should reset fields when hitting reset", () => {
		cy.visit(baseUrl)
		cy.get('[cy-data=username-input]').type("admin");
		cy.get('[cy-data=password-input]').type("admin2");
		cy.get('[cy-data=reset-input]').click();
		cy.get('[cy-data=username-input]').should("not.have.text");
		cy.get('[cy-data=password-input]').should("not.have.text");
	});

	it("should show error when submit with blank data", () => {
		cy.visit(baseUrl)
		cy.get('[cy-data=submit-input]').click();
		cy.get('[cy-data=error-username]').should("be.visible")
		cy.get('[cy-data=error-password]').should("be.visible")
	});
});


export {}
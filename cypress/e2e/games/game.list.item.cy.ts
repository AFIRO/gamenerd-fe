import config from '../../../src/config.json';
const baseUrl = config.base_url_frontend
const backUrl = config.base_url_backend

describe("Gamelist item tests", () => {
	it("should be visible if games exist", () => {
		cy.loginAsAdmin()
		cy.get('[cy-data=game-list-item]').should("be.visible")
	});

  it("should have correct data based on mock", () => {
		cy.loginAsAdmin()
		cy.get('[cy-data="game-list-item-name"]').should("have.text","Devil May Cry 3: Dante's AwakeningBayonetta 2Devil May Cry 5Metal Gear Rising: RevengeanceDevil May Cry 4")
	});

  it("render correct unprotected buttons", () => {
		cy.loginAsAdmin()
		cy.get('[cy-data="game-list-item-news-button"]').should("be.visible")
    cy.get('[cy-data="game-list-item-review-button"]').should("be.visible")
	});

  it("As admin, should render protected buttons", () => {
		cy.loginAsAdmin()
		cy.get('[cy-data="game-list-item-edit-button"]').should("be.visible")
    cy.get('[cy-data="game-list-item-delete-button"]').should("be.visible")
	});

  it("As user, not render protected buttons", () => {
		cy.loginAsAdmin()
		cy.get('[cy-data="game-list-item-edit-button"]').should("not.exist")
    cy.get('[cy-data="game-list-item-delete-button"]').should("not.exist")
	});
});


export {}
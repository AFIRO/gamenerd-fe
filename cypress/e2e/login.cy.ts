describe("Login screen tests", () => {
	it("should login with correct credentials", () => {
		cy.visit('http://localhost:3000')
		cy.get('[cy-data=username-input]').type("admin");
		cy.get('[cy-data=password-input]').type("admin");
		cy.get('[cy-data=submit-input]').click();
		cy.get("h1").should("have.text",'Overzicht van alle games')
	});

	it("should not login with unknown user", () => {
		cy.visit('http://localhost:3000')
		cy.get('[cy-data=username-input]').type("admin2");
		cy.get('[cy-data=password-input]').type("admin2");
		cy.get('[cy-data=submit-input]').click();
		cy.get('[cy-data=error-message]').should("have.text",'"No User found"')
	});

	it("should not login with incorrect credentials", () => {
		cy.visit('http://localhost:3000')
		cy.get('[cy-data=username-input]').type("admin");
		cy.get('[cy-data=password-input]').type("admin2");
		cy.get('[cy-data=submit-input]').click();
		cy.get('[cy-data=error-message]').should("have.text",'"The given user and password do not match"')
	});

	it("should reset fields when hitting reset", () => {
		cy.visit('http://localhost:3000')
		cy.get('[cy-data=username-input]').type("admin");
		cy.get('[cy-data=password-input]').type("admin2");
		cy.get('[cy-data=reset-input]').click();
		cy.get('[cy-data=username-input]').should("not.have.text");
		cy.get('[cy-data=password-input]').should("not.have.text");
	});

	it("should show error when submit with blank data", () => {
		cy.visit('http://localhost:3000')
		cy.get('[cy-data=submit-input]').click();
		cy.get('[cy-data=error-username]').should("be.visible")
		cy.get('[cy-data=error-password]').should("be.visible")
	});
});


export {}
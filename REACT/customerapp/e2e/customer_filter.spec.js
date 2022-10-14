describe("e2e testing customer Filter", () => {

    beforeEach( () => {

        cy.visit('http://localhost:3000')
    })
    it("Filter customer based on lastname", () => {

        cy.get('input[placeholder="search by name"]') //get the text field, get is nothing but DOM
        .type("Geller")
        .get(".row").then(rows => {
            expect(rows.length).to.be.equal(2)
        })
    })
})
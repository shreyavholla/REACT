describe("e2e testing customer delete", () => {

    beforeEach( () => {

        cy.visit('http://localhost:3000')
    })
    it("delete customer on button click", () => {

        cy.get('button')
        .eq(3) //selects the 4th button
        .click() //click on the fourth button
        .get(".row").then(rows => {
            expect(rows.length).to.be.equal(5)
        })
    })
})
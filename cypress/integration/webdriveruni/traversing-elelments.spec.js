///<reference types="Cypress"/>

describe("Test mouse action", () => {
    beforeEach(()=>{
        cy.visit("https://webdriveruniversity.com/index.html")
        .get('#data-table').invoke('removeAttr', 'target').click()
    })
    it("children() to get children of dom element", () => {
        cy.get('.traversal-breadcrumb').children('.active').should('contain', 'Contact Us')
    })
    it("closest() to validate the closest ancestor dom element", () => {
        cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group')
    })
    it("eq() to get element by index", () => {
        cy.get('.traversal-drinks-list').eq(0).should('contain', "Coffee")
    })
    it("filter() to filter elements", () => {
        cy.get('.btn-group-toggle >*').filter('.active').should('contain', "Button-1")
    })
    it("nextAll() to filter elements", () => {
        cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length', "3")
    })
    it("nextUntil() to filter elements", () => {
        cy.get('#tea').nextUntil('#sugar').should('contain', "Espresso")
    })
    it("not() to filter elements", () => {
        cy.get('.traversal-button-states > button').not('.disabled').should('not.have.class', "btn btn-outline-warning disabled")
    })
    it("parent() to filter elements", () => {
        cy.get('.traversal-mark').parent().should('contain', "ipsum ")
    })
    it("parents() to filter elements", () => {
        cy.get('.traversal-cite').parents().should('match', "blockquote")
    })
    it("prev() to filter elements", () => {
        cy.get('#espresso').prevUntil('#coffee').should('contain', "Milk")
    })
    it.only("siblings() to filter elements", () => {
        cy.get('#espresso').siblings().should('contain', "Milk")
    })
})
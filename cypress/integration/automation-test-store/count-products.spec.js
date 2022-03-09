describe("Count all elems", ()=>{
    it("Count all elems", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.thumbnail').should('have.length', 16)
        cy.get('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    })
})
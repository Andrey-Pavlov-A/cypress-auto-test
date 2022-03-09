describe("Iterate over elems", ()=>{
    beforeEach(()=>{
        cy.visit('https://automationteststore.com/')
        .get('a[href*="product/category&path="]').contains('Hair Care').click()
    })
    it("Log info of all hair care product", () => {
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log('Index: ' + index + " : " + $el.text())
        })
    })

    it.only("Add specific product to basket", () => {
        //cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        //    if($el.text().includes('Eau Parfumee au The Vert Shampoo')){
        //        cy.wrap($el).click() 
        //    }
        //})
        cy.selectProduct('Eau Parfumee au The Vert Shampoo')
    })

    it.only("Add specific product to basket", () => {
        //cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        //    if($el.text().includes('Eau Parfumee au The Vert Shampoo')){
        //        cy.wrap($el).click() 
        //    }
        //})
        cy.selectProduct('Seaweed Conditioner')
    })
})
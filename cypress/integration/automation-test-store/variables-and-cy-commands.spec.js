describe("Verify variables, cypress commands and jquery commands", ()=>{
    it("navigating to specific product pages", () => {
        cy.visit('https://automationteststore.com/')
        const makeupLink = cy.get('a[href*="product/category&path="]').contains('Makeup')
        makeupLink.click()
        const skincareLink = cy.get('a[href*="product/category&path="]').contains('Skincare')
        skincareLink.click()
    })

    it.only("navigating to specific product pages", () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(txt => {
            const firstName = txt.find("#field_11").text()
            expect(firstName).to.contain('First name')

            cy.get('#field_11').then(txt => {
                cy.log(txt.text())
                cy.log(txt)
            })
        })
    })
})
describe("Alias and invoke", ()=>{
    it("Validate a specific hair care product ", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Conditioner')
    })

    it.only("Calculate total of normal and sale products ", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('newPrice')

        let totalPrice = 0
        cy.get('@itemPrice').then($linkText => {
            let totalNormalPrice = 0;
            let itemPrice = $linkText.split('$')
            for(let i = 0; i < itemPrice.length; i++){
                totalNormalPrice += +itemPrice[i]
            }
            totalPrice += totalNormalPrice
            cy.log('total normal price - ' + totalNormalPrice)
        })
        cy.get('@newPrice').then($linkText => {
            let totalNewPrice = 0;
            let itemPrice = $linkText.split('$')
            for(let i = 0; i < itemPrice.length; i++){
                totalNewPrice += +itemPrice[i]
            }
            totalPrice += totalNewPrice
            cy.log('Total new price - ' + totalNewPrice)
        })
        .then(() => {
            cy.log('the total price for all products - ' + totalPrice)
            expect(totalPrice).to.equal(648.5)
        })
    })
})
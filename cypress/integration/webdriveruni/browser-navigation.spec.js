describe("Validate webdriveruni homepage links", () => {
    it("confirl links redirect to the correct pages", () => {
        cy.visit("/")
        .get('#contact-us').invoke('removeAttr', 'target').click()
        .url().should('include', 'https://webdriveruniversity.com/Contact-Us/contactus.html')
        .go('back')
        .reload()
        .url().should('include', 'https://webdriveruniversity.com/index.html')
        .go('forward')
        .go('back')
        .get('#login-portal').invoke('removeAttr', 'target').click()
        .url().should('include', 'https://webdriveruniversity.com/Login-Portal/index.html')
        .go('back')
    })

 
})
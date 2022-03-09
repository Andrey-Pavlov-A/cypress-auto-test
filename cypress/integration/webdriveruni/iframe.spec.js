///<reference types="Cypress"/>

describe("Handling iframes and modals", () => {
    it("Handling iframes and modals", () => {
        cy.visit("https://webdriveruniversity.com/index.html")
        .get('#iframe').invoke('removeAttr', 'target').click()
        .url().should('include', 'https://webdriveruniversity.com/IFrame/index.html')
        .get('#frame').then($iframe => {
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })
    })  
})
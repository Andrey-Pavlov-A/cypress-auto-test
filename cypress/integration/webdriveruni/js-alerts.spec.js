///<reference types="Cypress"/>

describe("hnadle js alerts", () => {
    it("Js alerts", () => {
        cy.visit("https://webdriveruniversity.com/index.html")
        .get('#popup-alerts').invoke('removeAttr', 'target').click()
        .url().should('include', 'https://webdriveruniversity.com/Popup-Alerts/index.html')
        .get('#button1').click()
        cy.on('window:alert', (str) => {
            expect(str).to.eq('I am an alert box!')
        })
    })
    it.only("Js alerts button", () => {
        cy.visit("https://webdriveruniversity.com/index.html")
        .get('#popup-alerts').invoke('removeAttr', 'target').click()
        .url().should('include', 'https://webdriveruniversity.com/Popup-Alerts/index.html')
        .get('#button4').click()
        cy.on('window:confirm', (str) => {
            return false
        })
        .get('#confirm-alert-text').contains('You pressed Cancel!')
    })
})
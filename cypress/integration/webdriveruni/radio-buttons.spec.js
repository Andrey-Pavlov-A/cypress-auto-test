///<reference types="Cypress"/>

describe("Verfify radiobuttons via webdriveruni", () => {
    before(function(){
        cy.visit("https://webdriveruniversity.com/index.html")
        .get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })
    it("check specific radio button", () => {
        cy.get('#radio-buttons').find("[type='radio']").first().check()
    })

    it("check specific radio button", () => {
        cy.get('#radio-buttons-selected-disabled').find("[name='vegetable']").eq(2).should('be.checked')
    })
})
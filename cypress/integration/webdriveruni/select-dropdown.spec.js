///<reference types="Cypress"/>

describe("Interact with dropdown list via wbdriveruni", () => {
    it("Select spevific values via select dropdown lists", () => {
        cy.visit("https://webdriveruniversity.com/index.html")
        .get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        .url().should('include', 'https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        .get('#dropdowm-menu-1').select('SQL').should('have.value', 'sql')
        .get('#dropdowm-menu-2').select('Maven').should('have.value', 'maven')
        .get('#dropdowm-menu-2').select('TestNG').should('have.value', 'testng')
        .get('#dropdowm-menu-3').select('CSS')
    })
})
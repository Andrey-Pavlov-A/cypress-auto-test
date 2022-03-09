///<reference types="Cypress"/>

describe("Verfify checkboxes via webdriveruni", () => {
    beforeEach(()=>{
        cy.visit("https://webdriveruniversity.com/index.html")
        .get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        .url().should('include', 'https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })
    it("check and validate checkboxes", () => {
        
        //.get("#checkboxes > :nth-child(1) > input").check()
        //.get("#checkboxes > :nth-child(1) > input").check().should('not.be.checked')
        cy.get("#checkboxes > :nth-child(1) > input").as('option1')
        .get('@option1').check()
        .get('@option1').should('be.checked')
        .get(':nth-child(5) > input').as('option3')
        .get('@option3').uncheck()
        .get('@option3').should('not.be.checked')
    })

    it("check multiple checkboxes", () => {
        cy.visit("https://webdriveruniversity.com/index.html")
        .get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        .url().should('include', 'https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
         
    }) 
})
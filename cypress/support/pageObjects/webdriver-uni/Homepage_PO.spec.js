class HomePage_PO{
    visithomePage(){
        cy.visit(Cypress.env("webdriveruni_homepage"))
    }
    clickOn_contactusButton(){
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
    }
}

export default HomePage_PO
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
Cypress.Commands.add("selectProduct", productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if($el.text().includes(productName)){
            cy.wrap($el).click() 
            cy.log('includes')
        }
    })
})

Cypress.Commands.add("addProductToCart", productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if($el.text() === productName){
            cy.log('done')
            cy.get(".productcart").eq(index).click()
        }
    })
})

Cypress.Commands.add("fill_form", (first_name, last_name, email, comment) => {
        cy.get('[name="first_name"]')
        .type(first_name)
        .get('[name="last_name"]')
        .type(last_name)
        .get('[name="email"]')
        .type(email)
        .get("textarea.feedback-input")
        .type(comment)
        .get('[type="submit"]').click()
        .get('h1').should('have.text', 'Thank You for your Message!')
})
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload'
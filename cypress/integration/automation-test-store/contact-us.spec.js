///<reference types="Cypress"/>

describe("Test Contact us form via automation-test-store", () => {
    it.only("should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://automationteststore.com/")
            .get('a[href$=contact]').click().then((el)=>{
                cy.log(el.text())
            })
            .get('#ContactUsFrm_first_name')
            .type("Andrey")
            .get('#ContactUsFrm_email')
            .type("anhdhd@mail.com")
            .get('#ContactUsFrm_enquiry')
            .type('lfhjaslfkhasklfh')
            .should('have.value', 'lfhjaslfkhasklfh')
            .get('button[title="Submit"]')
            .click()
    })

    it("should not be able to submit a successful submission via contact us form", () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
            .get('[name="first_name"]')
            .type("Andrey")
            .get('[name="last_name"]')
            .type("Pavlov")
            .get("textarea.feedback-input")
            .type("commnet ldjklasdjklasdj")
            .get('[type="submit"]').click()
    })

    it('click', () => {
        cy.visit('https://automationteststore.com/')
            .get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    })
})
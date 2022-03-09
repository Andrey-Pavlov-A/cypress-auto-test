
///<reference types="Cypress"/>

import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact-us-PO.spec"
import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO.spec"

describe("Test Contact us form via webriveruni", () => {
    const homepage_PO = new HomePage_PO()
    const contact_Us_PO = new Contact_Us_PO()

    before(() => {
        cy.fixture('userDetails').as('user')
    })

    beforeEach(() => {

        homepage_PO.visithomePage()
        homepage_PO.clickOn_contactusButton()
    })

    it("should be able to submit a successful submission via contact us form", () => {
        cy.get("@user").then((user) => {
            cy.fill_form(user.first_name, user.last_name, user.email, user.comment)
        })
    })
    it("should be able to submit a successful submission via contact us form", () => {
        contact_Us_PO.fill_form('Andrey', 'Pavlov', 'andrey@andrey.com', 'comment from test 2')
        contact_Us_PO.check_message_withoutError()
    })


})
class Contact_Us_PO{
    fill_form(first_name, last_name, email, comment){
        cy.get('[name="first_name"]')
            .type(first_name)
            .get('[name="last_name"]')
            .type(last_name)
            .get('[name="email"]')
            .type(email)
            .get("textarea.feedback-input")
            .type(comment)
            cy.screenshot()
            cy.screenshot("Made a contact us from submission")
    }
    check_message_withoutError(){
        cy.get('[type="submit"]').click()
        .get('body').contains('Thank You for your Message!')
    }
}

export default Contact_Us_PO
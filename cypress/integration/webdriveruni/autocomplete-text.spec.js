///<reference types="Cypress"/>

describe("Verify autocomplete dropdown lists via webdriveruni", () => {
    it("Select spevific product via autocomplete list", () => {
        cy.visit("https://webdriveruniversity.com/index.html")
            .get('#autocomplete-textfield').invoke('removeAttr', 'target').click()
            .url().should('include', 'https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
            .get('#myInput').type('a')
            .get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                const prod = $el.text()
                const productToSelect = 'Avacado'
                if (prod === productToSelect) {
                    $el.trigger('click')
                    cy.get('#submit-button').click()
                        .url().should('include', productToSelect)
                }
            }).then(() => {
                cy.get('#myInput').type('g')
                    .get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                        const prod = $el.text()
                        const productToSelect = 'Grapes'
                        if (prod === productToSelect) {
                            $el.trigger('click')
                            cy.get('#submit-button').click()
                                .url().should('include', productToSelect)
                        }
                    })
            })
    })
})
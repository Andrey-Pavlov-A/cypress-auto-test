///<reference types="Cypress"/>

describe("Test mouse action", () => {
    it("Scroll element into view", () => {
        cy.visit("https://webdriveruniversity.com/index.html")
        .get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
        .url().should('include', 'https://webdriveruniversity.com/Actions/index.html')
    })

    it("I should be able to drag and drop a draggable item", () => {
        cy.visit("https://webdriveruniversity.com/index.html")
        .get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
        .url().should('include', 'https://webdriveruniversity.com/Actions/index.html')
        .get('#draggable').trigger('mousedown', {which: 1})
        .get('#droppable').trigger('mousemove').trigger('mouseup', {force: true})
    })

    it("Double click on the box", () => {
        cy.visit("https://webdriveruniversity.com/index.html")
        .get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
        .url().should('include', 'https://webdriveruniversity.com/Actions/index.html')
        .get('#double-click').dblclick()
    })

    it.only("Hold down the left mouse click button", () => {
        cy.visit("https://webdriveruniversity.com/index.html")
        .get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
        .url().should('include', 'https://webdriveruniversity.com/Actions/index.html')
        .get('#click-box').trigger('mousedown', {which: 1}).then(($el => {
            expect($el).to.have.css('background-color', 'rgb(0, 255, 0)')
        }))
    })
})
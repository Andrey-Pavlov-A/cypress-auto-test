///<reference types="Cypress"/>

describe("Handling data picker", () => {
    it("Get a specific date", () => {

        cy.visit("https://webdriveruniversity.com/index.html")
        .get('#datepicker').invoke('removeAttr', 'target').click()
        .url().should('include', 'https://webdriveruniversity.com/Datepicker/index.html')
        .get('#datepicker').click()

        let date = new Date()
        date.setDate(date.getDate() + 32)

        let futureYear = date.getFullYear()
        let futureMonth = date.toLocaleString('default', {month: "long"})
        let futureDay = date.getDate()

        function selectMonthAndYear(){
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if(!currentDate.text().includes(futureYear)){
                    cy.get('.next').first().click()
                    selectMonthAndYear()
                }
            }).then(()=>{
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if(!currentDate.text().includes(futureMonth)){
                        cy.get('.next').first().click()
                        selectMonthAndYear()
                    }
                })
            })
        }

        function selectFutureDay(){
            cy.get('.day').contains(futureDay).click()
        }

        selectMonthAndYear()
        selectFutureDay()
    })
})

//[class="day"]
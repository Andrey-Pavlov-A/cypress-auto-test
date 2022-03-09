///<reference types="Cypress"/>

describe("handling data via webdriver", () => {
    beforeEach(()=>{
        cy.visit("https://webdriveruniversity.com/index.html")
        .get('#data-table').invoke('removeAttr', 'target').click()
    })
    it("Calculate and assert the total age of all users", () => {
        let userDetails = []
        let numb = 0
        cy.get('#thumbnail-1 td').each(($el, index, $list)=>{
            userDetails[index] = $el.text()
        }).then(()=>{
            for(let i = 0; i < userDetails.length; i++){
                if(!isNaN(userDetails[i])){
                    numb += +userDetails[i]
                } 
            }
            cy.log(numb)
            expect(numb).to.eq(322)
        })
    })

    it.only("Calculate and assert the age of a given user based on the last name", () => {
        cy.get('#thumbnail-1 td:nth-child(2)').each(($el, index, $list)=>{
            const text = $el.text()
            if(text.includes('Woods')){
                cy.get('#thumbnail-1 td:nth-child(2)').eq(index).next().then((age) => {
                    const userAge = age.text()
                    expect(userAge).to.eq('80')
                })
            }
        })
    })
})
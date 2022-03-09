///<reference types="Cypress"/>

describe("Test file upload", () => {
    it("Upload a file", () => {
        cy.visit("https://webdriveruniversity.com/index.html")
        .get('#file-upload').invoke('removeAttr', 'target').click()
        .url().should('include', 'https://webdriveruniversity.com/File-Upload/index.html')
        .fixture("1.png", "base64").then(fileContent => {
            cy.get('#myFile').attachFile(
                {
                    fileContent,
                    fileName: "1.png",
                    mimeType: "image/png"
                },
                {
                    uploadType: "input"
                }
            )
        })
        .get('#submit-button').click()
    })  
})
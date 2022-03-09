import AutoStore_HairCare_PO from "../../support/pageObjects/automationTestStore/AutoStore_HairCare_PO"
import AutoStore_HomePage_PO from "../../support/pageObjects/automationTestStore/Autostore_Homepage_PO"

describe("add multiple items to the cart", () => {
    const autoStore_HomePage_PO = new AutoStore_HomePage_PO()
    const autoStore_HairCare_PO = new AutoStore_HairCare_PO()

    before(()=>{
        cy.fixture("product").then((data)=>{
            globalThis.data = data
        })
    })

    beforeEach(() => {
        autoStore_HomePage_PO.accessHomePage()
        autoStore_HomePage_PO.clickOn_Haire_Link()
    })

    it("Add specific items to the cart", () => {
        autoStore_HairCare_PO.addHairCareProductsToCart()
    })
})
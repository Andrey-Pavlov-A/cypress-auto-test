class AutoStore_HairCare_PO {
    addHairCareProductsToCart() {
        globalThis.data.productName.forEach((el) => {
            cy.addProductToCart(el)
        })
    }
}

export default AutoStore_HairCare_PO
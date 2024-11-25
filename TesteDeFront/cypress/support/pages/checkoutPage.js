export const ELEMENTS = {

    // Elementos
    productItemButton: '[id=item_4_img_link]',
    addToCartButton: '[id=add-to-cart]',
    shoppingCartContainerButton: '[id=shopping_cart_container]',
    itemTitleLink: '[id=item_4_title_link]',
    checkoutButton: '[id=checkout]',
    firstNameField: '[id=first-name]',
    lastNameField: '[id=last-name]',
    postalCodeField: '[id=postal-code]',
    continueButton: '[id=continue]',
    finishButton: '[id=finish]',
    checkoutCompleteContainer: '[id=checkout_complete_container]',
    inventoryDetailsPrice: '.inventory_details_price',
    inventoryItemPrice: '.inventory_item_price',

    //esse soma na ultima pag:
    summarySubtotalLabel: '.summary_subtotal_label',
    summaryTaxLabel: '.summary_tax_label',
    summaryTotalLabel: '.summary_total_label',

    // Textos
    nameProduct: 'Sauce Labs Backpack',


    // URL's
    urlCheckoutComplete: '/checkout-complete.html',
    urlInventoryItem: '/inventory-item.html?id=4'
}

const element = ELEMENTS;

class PurchaseCheckout {

    addProductToCart(){
        cy.get(element.productItemButton).click()
        cy.wait(2000);
        cy.url().should('include', element.urlInventoryItem)
        cy.get(element.inventoryDetailsPrice)
            .invoke('text')
            .then((valor) => {
                cy.wrap(valor).as('valorItem');
            })
        cy.get(element.addToCartButton).click()
        cy.get(element.shoppingCartContainerButton).click()
        cy.get(element.itemTitleLink).should('have.text', element.nameProduct)
        cy.get('@valorItem').then((valorItem) => {
            cy.get(element.inventoryItemPrice)
                .should('have.text', valorItem)});
    }

    checkoutDetails(){
        cy.get(element.checkoutButton).click()
        cy.wait(2000);
        cy.get(element.firstNameField).type('Lucas')
        cy.get(element.lastNameField).type('Dias')
        cy.get(element.postalCodeField).type('06436-120')
        cy.wait(2000);
        cy.get(element.continueButton).click()
    
        cy.get('@valorItem').then((valorItem) => {
            cy.get(element.summarySubtotalLabel)
                .should('have.text', `Item total: ${valorItem}`)});
        //Validar informacoes de pagamento
        cy.wait(2000);
    
        cy.get(element.finishButton).click()
    }

    validateSucessPurchase(){
        cy.url().should('include', element.urlCheckoutComplete);
        cy.get(element.checkoutCompleteContainer).should('be.visible')
    }
}

export default new PurchaseCheckout();
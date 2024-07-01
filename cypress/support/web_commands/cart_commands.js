Cypress.Commands.add('addProductToCart', (productId) => {
    cy.get(`#${productId}`).click();
    cy.get('button[name="save_to_cart"]').click();
});

Cypress.Commands.add('openCart', () => {
    cy.get('#menuCart').click();
});

Cypress.Commands.add('verifyProductInCart', (timeout = 10000) => {
    cy.get('span[ng-show="cart.productsInCart.length > 0"]', { timeout }).should('be.visible');
});

Cypress.Commands.add('proceedToCheckout', () => {
    cy.get('#checkOutButton').click();
    cy.get('.sticky').should('be.visible');
});
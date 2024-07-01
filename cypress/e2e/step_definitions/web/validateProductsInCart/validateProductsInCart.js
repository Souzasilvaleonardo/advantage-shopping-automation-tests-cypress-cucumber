/// <reference types="Cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('que um produto foi adicionado ao carrinho', () => {
    cy.visitAdvantageOnlineShopping()
    //cy.Login()
    cy.searchForLaptops()
    
    cy.addProductToCart(10)
    cy.openCart()
   
    cy.verifyProductInCart()
})

When('eu acesso a tela de pagamento', () => {
    cy.proceedToCheckout()
})

Then('o produto deve estar listado na tela de pagemento', () => {
    cy.contains('.itemsCount', '1 ITEM').should('be.visible');
})

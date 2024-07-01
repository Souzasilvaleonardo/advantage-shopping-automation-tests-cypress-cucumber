import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('que estou na página de resultados da busca por "Laptops"', () =>{
    cy.visit('https://advantageonlineshopping.com/#/search/?viewAll=laptops')
    cy.verifySearchResults()
})

When('eu seleciono um "Laptop" da lista', () =>{
    cy.addProductToCart(9)
})

Then('o "Laptop" adicionado deve estar no meu carrinho', () => {
    cy.openCart()
   
    cy.verifyProductInCart()
})
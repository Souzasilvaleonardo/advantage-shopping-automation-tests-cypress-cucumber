/// <reference types="Cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('que estou na página inicial do Advantage Online Shopping', () => {
    cy.visitAdvantageOnlineShopping()
})

When('eu pesquiso por "Laptops"', () => {
    cy.searchForLaptops()
})

Then('uma lista de produtos realcionados a "Laptops" deve ser exibida', () => {
    cy.verifySearchResults()
})


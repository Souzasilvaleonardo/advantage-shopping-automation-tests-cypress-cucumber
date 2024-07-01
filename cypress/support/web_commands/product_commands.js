Cypress.Commands.add('searchForLaptops', () => {
    cy.get('input[name="mobile_search"]', { timeout: 10000 })
        .click()
        .type('laptops{enter}')   
})

Cypress.Commands.add('verifySearchResults', () => {
    cy.get('.select').should('be.visible')
})
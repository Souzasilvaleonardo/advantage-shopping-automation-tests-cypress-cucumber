Cypress.Commands.add('visitAdvantageOnlineShopping', () => {
    cy.visit('https://advantageonlineshopping.com/#/')
})


Cypress.Commands.add('Login', () => {
    cy.get('#menuUser').click()

    cy.get('input[name="username"]').type('leonardo2')
    cy.get('input[name="password"]').type('Teste@123')

    cy.get('#sign_in_btn').click()
})
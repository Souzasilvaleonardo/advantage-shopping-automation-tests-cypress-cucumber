import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('que o usuário deseja fazer login com credenciais válidas', () => {
  cy.login();
});
Then('o login deve ser bem-sucedido', () => {
  cy.get('@loginResponse').its('status').should('eq', 200);
});


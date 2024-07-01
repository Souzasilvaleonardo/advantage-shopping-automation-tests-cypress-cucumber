import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('que o usuário deseja fazer login com credenciais válidas', () => {
  cy.login();
});
Then('o login deve ser bem-sucedido', () => {
  // Verifica se a resposta do login possui status 200
  cy.get('@loginResponse').its('status').should('eq', 200);
});


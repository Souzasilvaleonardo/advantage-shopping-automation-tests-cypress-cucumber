import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import faker from 'faker';

Given('que o usuário deseja criar um novo usuário', () => {
  const user = {
    "accountType": "USER",
    "address": "av. circular",
    "allowOffersPromotion": true,
    "aobUser": true,
    "cityName": "SP",
    "country": "AUSTRALIA_AU",
    "email": faker.internet.email(),
    "firstName":  faker.name.firstName(),
    "lastName": faker.name.lastName(),
    "loginName": faker.internet.userName(),
    "password": 'Password@123',
    "phoneNumber": "string",
    "stateProvince": "string",
    "zipcode": "string"
  };

  cy.requestCreateUser(user);
});

When('o usuário envia um pedido POST para criar o usuário', () => {
  // Ação já realizada no passo Given
});

Then('o usuário deve ser criado com sucesso', () => {
  cy.get('@response').then((response) => {
    expect(response.status).to.eq(200);
  });
});

Then('o status code da resposta deve ser {int}', (expectedStatusCode) => {
  cy.get('@response').then((response) => {
    expect(response.status).to.eq(expectedStatusCode);
  });
});
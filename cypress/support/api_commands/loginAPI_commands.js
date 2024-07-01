Cypress.Commands.add('requestCreateUser', (user) => {
  cy.request({
    method: 'POST',
    url: '/accountservice/accountrest/api/v1/register',
    body: user,
    failOnStatusCode: false
  }).then((response) => {
    cy.wrap(response).as('response');
    cy.wrap(user).as('newUser');
  });
});


Cypress.Commands.add('login', () => {
  const loginData = {
    email: Cypress.env('email'),
    loginPassword: Cypress.env('loginPassword'),
    loginUser: Cypress.env('loginUser')
  };

  cy.request({
    method: 'POST',
    url: '/accountservice/accountrest/api/v1/login',
    body: loginData,
    failOnStatusCode: false
  }).then((response) => {
    expect(response.status).to.eq(200);
    cy.wrap(response).as('loginResponse');
    Cypress.env('token', response.body.token);
  });
});

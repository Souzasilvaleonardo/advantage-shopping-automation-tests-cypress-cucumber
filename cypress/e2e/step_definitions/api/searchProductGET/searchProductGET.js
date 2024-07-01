const { Given, Then } = require("cypress-cucumber-preprocessor/steps");

let searchResults = [];

Given('que eu busco por um produto com o nome {string}', (productName) => {
  cy.request({
    method: 'GET',
    url: `/catalog/api/v1/products/search?name=${productName}`,
    failOnStatusCode: false
  }).then((response) => {
    expect(response.status).to.eq(200);
    searchResults = response.body;
  });
});

Then('uma lista de {string} deve aparecer e o status da resposta deve ser 200', (productName) => {
  expect(searchResults).to.not.be.empty;

  searchResults.forEach((category) => {
    expect(category.categoryName.toLowerCase()).to.include(productName.toLowerCase());
    expect(category.categoryImageId.toLowerCase()).to.include(productName.toLowerCase());
  });
});
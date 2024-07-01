const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.feature', 
    supportFile: 'cypress/support/e2e.js',
    baseUrl: 'http://www.advantageonlineshopping.com',
    env: {
      file: 'cypress.env.json'
    }
  },
});


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('backgroundLogin', () => {
  cy.setCookie(
    'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
    'R6xmma6F4U6edNQuu67M0lmF1ojJgk0XPTHfdz9RiKOF0awvTGxMvlBJgsRVjgzY5GQxmddcbUEkmrWQt7yly66mUUVGaA%2BoZFZYqtxGJqj8bQfYElD2UNrhIIYpySAZbd5qUNzDD5tzru8En53dtghXof%2F3m5ZkfpGOhamY47KNyHkHh2Px%2BPdkHeZuiCVF%2FWRUAG3DooaR%2BkCvSCRG62vAeDPqjZbKN4qBiQwyeLbH3Ts6JLkIV6FyNm%2FpBi6evByldxkp31Ne5grrSKUuOFKyiyi%2BV4LbE88dduIsmO31F8UifNnPfQfcvvKdnjSngbNTJMmeVdJcF440q9CPKKvxGlP3GveOX2xxYXKNWW17nyJg6W%2F%2F9Sq6sm5A%2BBgn000283'
  )
});
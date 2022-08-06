import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the login page", () => {
  cy.visit("/");
});

// When(
//   "I enter username {string} and password {string}",
//   (userName, passWord) => {
//     cy.get("#user-name").type(userName);
//     cy.get("#password").type(passWord);
//     cy.get("#login-button").click();
//   }
// );

When(
  "A User enter username {string} and password {string}",
  (userName, passWord) => {
    cy.get("#user-name").type(userName);
    cy.get("#password").type(passWord);
  }
);

And(" A user click on the login button", () => {
  cy.get("#login-button").click();
});

Then("I should see the inventory page", () => {
  cy.url().should("contains", "/inventory.html");
});

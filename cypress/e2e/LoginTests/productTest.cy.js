/// <reference types="Cypress" />
import ProductPage from "../../Pages/productPage";
const userName = Cypress.env("userName");
const passWord = Cypress.env("passWord");
const Product = new ProductPage();
describe("Test Product ", () => {
  it("Should Login with  Valid Credentials", function () {
    cy.login(userName, passWord);
  });

  it("Check the Product is visible or not", function () {
    Product.inventoryItem().should("exist");
  });

  it("Check the Product is available or not if yes then click on it", function () {
    cy.get("body").then(($ele) => {
      if ($ele.find(".inventory_item_name").length > 0) {
        cy.get("#item_4_title_link > .inventory_item_name").click();
      }
    });
    cy.log("This is Automation Test")
  });
});

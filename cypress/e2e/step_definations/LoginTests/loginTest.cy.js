import LoginPageObjects from "../../../Pages/loginPageObjects";
const loginTestPageOBJ = new LoginPageObjects();
const userName = Cypress.env("userName");
const passWord = Cypress.env("passWord");

describe("Login Test", () => {
  before(function () {
    cy.fixture("Data/LoginPageData").then(function (data) {
      this.ErrorText = data.loginErrorText;
    });
  });

  it("Should Not Login with InValid UserName", function () {
    cy.login("standard_user1", "secret_sauce");
    loginTestPageOBJ.errorText().contains(this.ErrorText);
  });
  it("Should Login with  Valid Credentials", function () {
    cy.login(userName,passWord);
   
  });
});

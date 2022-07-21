import LoginPageObjects from "../../Pages/loginPageObjects";
const loginTestPageOBJ = new LoginPageObjects();

describe("Login Test", () => {
  before(() => {
    cy.fixture("Data/LoginPageData").then((loginPageData) => {
      let ErrorText = loginPageData.loginErrorText;
    });
  });
  it("Should Login in Valid Credentials", () => {
    cy.login("standard_user", "secret_sauce");
  });
  it("Should Not Login in InValid UserName", () => {
    cy.login("standard_user1", "secret_sauce");
    loginTestPageOBJ.errorText().contains(this.ErrorText);
  });
});

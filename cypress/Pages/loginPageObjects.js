class LoginPageObjects {
  errorText() {
    return cy.get('[data-test="error"]');
  }
}
export default LoginPageObjects;

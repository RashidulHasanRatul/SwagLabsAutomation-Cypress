const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      module.exports = (on, config) => {
        on("file:preprocessor", cucumber());
      };
    },
    env: {
      userName: "standard_user",
      passWord: "secret_sauce",
    },
    baseUrl: "https://www.saucedemo.com/",
    watchForFileChanges: false,
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    specPattern: "cypress/e2e/features/*.feature",
  },
  projectId: "r81jjm",
});

const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
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
  },
  projectId: "r81jjm",
});

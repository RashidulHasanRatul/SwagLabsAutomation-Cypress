const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
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

const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      // implement node event listeners here
      const deepmerge = require("deepmerge");
      const path = require("path");
      const fs = require("fs");
      // Load the Config File
      function loadconfig(filename) {
        const configJson = require(filename);
        if (configJson.extends) {
          const baseConfigFileName = path.join(
            path.dirname(filename),
            configJson.extends
          );
          const baseConfig = loadconfig(baseConfigFileName);
          return deepmerge(baseConfig, configJson);
        } else {
          return configJson;
        }
      }

      module.exports = (on, config) => {
        on("task", {
          readFiles(folderName) {
            return new Promise((resolve, reject) => {
              fs.readdir(folderName, (err, files) => {
                if (err) {
                  return reject(err);
                }
                resolve(files);
              });
            });
          },
        });
        return loadconfig(config.config);
      };
    },
    env: {
      name: "Ratul",
      hideXHR: true,
    },
    baseUrl: "https://example.cypress.io",
    watchForFileChanges: false,
    projectId: "r81jjm",
    chromeWebSecurity: false,
  },
});

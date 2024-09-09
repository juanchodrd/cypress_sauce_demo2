const { defineConfig } = require("cypress");
const webpackPreprocessor = require('@cypress/webpack-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/plugin');

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/features/**/*.feature",
    baseUrl: 'https://es.wikipedia.org/',
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      const options = {
        webpackOptions: {
          module: {
            rules: [
              {
                test: /\.feature$/,
                use: [
                  {
                    loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                    options: config,
                  },
                ],
              },
            ],
          },
        },
      }
      on('file:preprocessor', webpackPreprocessor(options));
      on("after:run", async () => {
        console.log("override after:run");
      });
      return getCompareSnapshotsPlugin(on, config);
    }
  },
  env: {
    user: {
      username: "VALID_ENVIRONMENT_USER",
      password: "VALID_ENVIRONMENT_PASS",
    },  
  },
  video: true,
  videosFolder: "results/videos",
  screenshotsFolder: "results/screenshots",
  reporter: "mochawesome",
  reporterOptions: {
    configFile: "cypress/reporter-config.json"
  },
  defaultCommandTimeout: 10000,
  execTimeout: 10000,
  taskTimeout: 10000,
  pageLoadTimeout: 10000,
  requestTimeout: 10000,
  responseTimeout: 10000,
  chromeWebSecurity: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
});

/* eslint-disable arrow-body-style */
// https://docs.cypress.io/guides/guides/plugins-guide.html

// if you need a custom webpack configuration you can uncomment the following import
// and then use the `file:preprocessor` event
// as explained in the cypress docs
// https://docs.cypress.io/api/plugins/preprocessors-api.html#Examples

const webpackPreprocessor = require("@cypress/webpack-preprocessor");
const webpackOptions = require("find-webpack").getWebpackOptions();


module.exports = (on, config) => {
  
  on(
    "file:preprocessor",
    webpackPreprocessor({ webpackOptions })
  );

  require("@cypress/code-coverage/task")(on, config);

  return Object.assign({}, config, {
    fixturesFolder: "tests/e2e/fixtures",
    integrationFolder: "tests/e2e/specs",
    screenshotsFolder: "tests/e2e/screenshots",
    videosFolder: "tests/e2e/videos",
    supportFile: "tests/e2e/support/index.js"
  });
};

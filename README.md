# vue-typescript-cypress-example
Vue - Typescript Unit and E2E Testing including Code Coverage using Cypress setup example

## Vue-Cli
This project started using `@vue/cli 4.4.5`
### Manual selection
Babel
Typscript
CSS Pre-processors
Linter / Formatter
E2E Testing > Cypress

## Depedencies
Install the following devDepedencies:
```
@cypress/code-coverage
@cypress/webpack-preprocessor
find-webpack
babel-loader
babel-plugin-istanbul
@vue/test-utils
```

## Cypress Setup
1. Edit plugins located at `tests/e2e/plugins/index.js`
    a. Get webpackOptions
    ```
    const webpackPreprocessor = require("@cypress/webpack-preprocessor");
    const webpackOptions = require("find-webpack").getWebpackOptions();
    ```
    b. Setup `file:preprocessor`
    ```
    on(
        "file:preprocessor",
        webpackPreprocessor({ webpackOptions })
    );
    ```
2. Setup Code Coverage task in plugins file
    ```
    require("@cypress/code-coverage/task")(on, config);
    ```
3. Edit Code Coverage task to Cypress support located at `tests/e2e/support/index.js`
    ```
    import "@cypress/code-coverage/support";
    ```
4. Add `istanbul` to Babel plugins
    ```
    plugins: ["istanbul"]
    ```
5. Setup `nyc` target extension
    ```
    {
        "extension": [ ".js", ".vue" ]
    }
    ```
6. Create your test specs
7. Run test
    ```
    yarn test:e2e
    ```
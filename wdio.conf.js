exports.config = {
  runner: "local",
  specs: ["./test/specs/**/*.js"],
  exclude: [],
  maxInstances: 5,
  capabilities: [
    {
      maxInstances: 1,
      browserName: "chrome",
      acceptInsecureCerts: true,
    },
  ],
  logLevel: "silent",
  bail: 0,
  baseUrl: "https://stage.localcoding.us",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["chromedriver"],
  framework: "mocha",
  reporters: ["spec", ["allure", { outputDir: "allure-results" }]],
  mochaOpts: {
    require: ["@babel/register"],
    ui: "bdd",
    timeout: 60000,
  },
  afterTest: function (
      test,
      context,
      { error, result, duration, passed, retries }
  ) {
    if (!passed) {
      browser.takeScreenshot();
    }
  },
};

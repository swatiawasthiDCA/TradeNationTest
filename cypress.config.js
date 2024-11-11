const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1280,
  viewportWidth: 800,
  video: false,
  e2e: {
    baseUrl: 'https://tradenation.com/en-gb/markets/#forex',
    excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples'],
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implementar event listeners aqui
    },
  },
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {},
  projectId: 'yam3vm',
})

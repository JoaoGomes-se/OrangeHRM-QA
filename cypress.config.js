const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  // Viewport padrão (simular desktop)
  viewportWidth: 1280,
  viewportHeight: 720,

  // Timeouts
  defaultCommandTimeout: 8000,
  requestTimeout: 10000,
  responseTimeout: 10000,
  retries: {
    runMode: 2,
    openMode: 0,
  },

  // Capturar screenshots/vídeos apenas em falhas
  screenshotOnRunFailure: true,
  video: false, // alterar para true se quiser vídeos em falhas

  // Relatórios
  reporter: "spec",
  reporterOptions: {
    // Descomentar se usar mochawesome no futuro
    // reportDir: "cypress/reports",
    // overwrite: false,
    // html: true,
    // json: true,
  },

  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    // Não redirecionar para domínios diferentes (segurança)
    chromeWebSecurity: true,
  },
});
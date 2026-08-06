// Support file loaded before test files.
// Import custom commands and set up global hooks here.

// Import project commands
require('./commands');

// Example: run once before all tests
before(() => {
  // place global setup here if needed
});

// Example: run before each test
beforeEach(() => {
  // preserve cookies or session if tests rely on login state
  // Cypress.Cookies.preserveOnce('session_id');
});


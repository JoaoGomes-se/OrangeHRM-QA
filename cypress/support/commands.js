// Reusable Cypress commands for this project

Cypress.Commands.add('login', (username = 'Admin', password = 'admin123') => {
  cy.visit('/web/index.php/auth/login');
  cy.get('input[name="username"]').clear().type(username);
  cy.get('input[name="password"]').clear().type(password);
  cy.get('button[type="submit"]').click();
  cy.url().should('not.include', '/auth/login');
});

Cypress.Commands.add('goToMyInfo', () => {
  cy.contains('.oxd-main-menu-item', 'My Info').click();
  cy.contains('.orangehrm-tabs-item', 'Personal Details').should('be.visible').click();
});

Cypress.Commands.add('goToRecruitment', () => {
  cy.contains('.oxd-main-menu-item', 'Recruitment').click();
});


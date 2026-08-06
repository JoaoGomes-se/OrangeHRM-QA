
describe('My Info - Personal Details', () => {
  beforeEach(() => {
    cy.login();
    cy.goToMyInfo();
  });

  it('Verifica a obrigatoriedade do campo First Name', () => {
    cy.get(':nth-child(1) > .orangehrm-tabs-item').should('contain.text', 'Personal Details').click();
    cy.get('input[name="firstName"]').clear();
    cy.get('input[name="middleName"]').clear().type('Victor');
    cy.get('input[name="lastName"]').clear().type('Araujo');
    cy.contains('button', 'Save').click();

    cy.contains('Required').should('be.visible');
  });

  it('Verifica a obrigatoriedade do campo Last Name', () => {
    cy.get('input[name="firstName"]').clear().type('Victor');
    cy.get('input[name="middleName"]').clear().type('Araujo');
    cy.get('input[name="lastName"]').clear();
    cy.contains('button', 'Save').click();

    cy.contains('Required').should('be.visible');
  });
});
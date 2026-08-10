describe('My Info - Contact Details', () => {
  beforeEach(() => {
    cy.login();
    cy.goToMyInfo();
    cy.contains('.orangehrm-tabs-item', 'Contact Details').click();
  });

  it('Valida campo de telefone móvel e mensagem de orientação', () => {
    cy.get(':nth-child(2) > .orangehrm-tabs-item').should('contain.text', 'Contact Details').click();
    cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('@#$#@#$@');
    cy.contains('Allows numbers and only + - / ( )').should('be.visible');
  });


});

describe('Recruitment - Add Candidate', () => {
  beforeEach(() => {
    cy.login();
    cy.goToRecruitment();
  });

  it('Abre o formulário de adição de candidato', () => {
    cy.contains('button', /Add/i).click();
    cy.contains('h6', 'Add Candidate').should('be.visible');

  });
    it('salva com sucesso os detalhes de contato válidos', () => {
    
      cy.contains('button', /Add/i).click();
      cy.get('[name="firstName"]').clear().type('Victor');
      cy.get('[name="lastName"]').clear().type('Araujo');
      cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('victor.araujo@example.com');
      cy.contains('button', 'Save').click();
  });


});

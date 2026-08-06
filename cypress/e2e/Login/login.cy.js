describe('Módulo de Autenticação', () => {

  beforeEach(() => {
    cy.visit('/web/index.php/auth/login');
  });

  it('Não deve realizar o login usando usuário inválido', () => {
    cy.get('input[name="username"]').type('UsuarioErrado');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/auth/login');
    cy.get('.oxd-alert-content-text').should('contain.text', 'Invalid credentials');
  });

  it('Não deve realizar o login usando senha inválida', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('senhaErrada');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/auth/login');
    cy.get('.oxd-alert-content-text').should('contain.text', 'Invalid credentials');
  });

  it('Não deve realizar o login usando credenciais inválidas', () => {
    cy.get('input[name="username"]').type('errado');
    cy.get('input[name="password"]').type('senhaErrada');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/auth/login');
    cy.get('.oxd-alert-content-text').should('contain.text', 'Invalid credentials');
  });

  it('Não deve realizar o login usando usuário vazio', () => {
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/auth/login');
    cy.get(':nth-child(2) > .oxd-input-group').should('contain.text', 'Required');
  });

  it('Não deve realizar o login usando senha vazia', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/auth/login');
    cy.get(':nth-child(3) > .oxd-input-group').should('contain.text', 'Required');
  
  });

  it('Deve realizar o login com sucesso usando credenciais válidas', () => {
    cy.login();

    cy.url().should('include', '/dashboard');
    cy.contains('h6', 'Dashboard').should('be.visible');
  });

});
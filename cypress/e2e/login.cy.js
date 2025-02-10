describe('Testes de Login', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/login'); 
  });

  it('Deve fazer login com credenciais válidas', () => {
    cy.get('#userName').type('testuser');
    cy.get('#password').type('Test@1234');
    cy.get('#login').click();
    cy.url().should('include', '/profile'); 
  });

  it('Deve exibir erro ao usar credenciais inválidas', () => {
    cy.get('#userName').type('usuario_invalido');
    cy.get('#password').type('senha_invalida');
    cy.get('#login').click();
    cy.get('#name').should('contain', 'Invalid username or password');
  });
});

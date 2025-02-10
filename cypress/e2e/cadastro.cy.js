describe('Testes com Dados Dinâmicos', () => {
  it('Deve preencher o formulário com dados do fixture', () => {
    cy.fixture('usuarios').then((usuarios) => {
      cy.visit('https://demoqa.com/automation-practice-form');

      cy.get('#firstName').type(usuarios.usuarioValido.nome);
      cy.get('#lastName').type('Silva'); 
      cy.get('#userEmail').type(usuarios.usuarioValido.email);
      cy.get('#gender-radio-2').check({ force: true }); 
      cy.get('#userNumber').type('21989855719'); 
      
      cy.get('#submit').click({ force: true });

      cy.get('.modal-title').should('contain', 'Thanks for submitting the form');
    });
  });
});

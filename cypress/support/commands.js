Cypress.Commands.add('preencherFormularioCadastro', (nome, email, senha) => {
    cy.get('#firstName').type(nome);
    cy.get('#lastName').type('Silva');
    cy.get('#userEmail').type(email);
    cy.get('#gender-radio-1').check({ force: true });
    cy.get('#userNumber').type('11987654321');
    cy.get('#dateOfBirthInput').type('1990-01-01');
    cy.get('.subjects-auto-complete__value-container').type('Maths{enter}');
    cy.get('#hobbies-checkbox-1').check({ force: true });
    cy.get('#currentAddress').type('Rua Exemplo, 123');
    cy.get('#state').click().type('NCR{enter}');
    cy.get('#city').click().type('Delhi{enter}');
  });
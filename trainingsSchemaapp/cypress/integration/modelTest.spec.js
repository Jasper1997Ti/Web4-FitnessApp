describe('My First Test', function() {
    it('our app runs', function() {
    cy.visit('http://localhost:4200');
    cy.get('[data-cy=login-email]').type('recipemaster@hogent.be');
    cy.get('[data-cy=login-password]').type('P@ssword1111');
    cy.get('[data-cy=login-button').click();
    cy.get('[data-cy=trainingsSchemaCard]').should('have.length', 2);
      cy.get('[data-cy=appError]').should('not.be.visible');
    });

    it('filter works', function() {
      cy.visit('http://localhost:4200');
      cy.get('[data-cy=filterInput]').type('b');
      cy.get('[data-cy=trainingsSchemaCard]').should('have.length', 1);
    });
  
    it('mock trainingsSchema get', function() {
      cy.server();
      cy.route({
        method: 'GET',
        url: '/api/TrainingsSchema',
        status: 200,
        response: 'fixture:trainingsschemas.json'
      });
  
      cy.visit('http://localhost:4200');
    cy.get('[data-cy=recipeCard]').should('have.length', 2);
    cy.get('[data-cy=appError]').should('not.be.visible');

    });

    it('add trainingsschema works', function(){
        cy.visit('http://localhost:4200/trainingsschema/add');
        cy.get('button').should('be.disabled');

        cy.get('[data-cy=tname]').type('test');
    cy.get('[data-cy=categorie]').type('niks');
    cy.get('[data-cy=exname]').type('testje');
    cy.get('[data-cy=sets]').type('3');
    cy.get('[data-cy=reps]').type('10');
    cy.get('[data-cy=add').click();

    cy.visit('http://localhost:4200');
    cy.get('[data-cy=recipeCard]').should('have.length', 3);
    cy.get('[data-cy=appError]').should('not.be.visible');
    })
  
    it('on error should show error message', function() {
      cy.server();
      cy.route({
        method: 'GET',
        url: '/api/TrainingsSchema',
        status: 500,
        response: 'ERROR'
      });
      cy.visit('/');
      cy.get('[data-cy=appError]').should('be.visible');
    });
  });
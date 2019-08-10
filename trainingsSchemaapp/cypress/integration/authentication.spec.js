import { createYield } from 'typescript';

describe('Login Page', () => {
  beforeEach(() => {});

  it('logintest', () => {
    cy.visit('http://localhost:4200');
    cy.login();
  });

  it('login page', () => {
    cy.visit('http://localhost:4200/login');
    cy.get('[data-cy=login-email]').type('recipemaster@hogent.be');
    cy.get('[data-cy=login-password]').type('P@ssword1111');
    cy.get('[data-cy=login-button').click();
    // login name should be in the title balk
    cy.contains('recipemaster@hogent.be');
    // at last one recipe should be visible (i.e. we should have been forwarded to the recipe page)
    cy.get('[data-cy=trainingsSchema-title]').should('be.visible');
  });
});
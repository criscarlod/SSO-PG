/// <reference types="cypress" />

describe('HTTP Gateway listed in Integrations Gateways', () => {
  it('Launch the navigation page', () => {
    cy.visit('https://www.reekoh.com/', {
      failOnStatusCode: false,
    });
    cy.title().should('contains', 'Reekoh');
  });
  it('Integration-> Gateway', () => {
    cy.get('#menu-item-4210 > :nth-child(1)', { timeout: 60000 });
    cy.get('#menu-item-4210 > :nth-child(1)').click();
    cy.wait(10000);
    cy.get('.nav > :nth-child(4) > a').contains('Gateway').click();
  });
  it('Gateway-> HTTP Gateway', () => {
    cy.wait(5000);
    cy.get(
      '.row-1 > :nth-child(3) > .plugin-container > .icon-plugin > img'
    ).click();
    //cy.contains('HTTP Gateway');
  });
});

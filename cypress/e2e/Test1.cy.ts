describe('cypress test', () => {
  it('renders default elements on the screen', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="cypress-title"]').should('exist')
    .should('have.text', 'SpaceX Launches')
  })

  it('should display SpaceX launches and allow searching', () => {
    // Visit the app
    cy.visit('http://localhost:3000');

    // Check if the title is present
    cy.get('[data-testid="cypress-title"]').should('exist');

    // Type in the search input
    const searchTerm = 'Falcon';
    cy.get('input[type="text"]').type(searchTerm);

    // Check if the launches are displayed
    cy.get('.app-container').should('exist');

    // Check if the launches are filtered based on the search term
    cy.get('.app-container').contains('.text-gray-700', searchTerm);

    // Click on a launch and check if the modal opens
    cy.get('.cursor-pointer').first().click();
    cy.get('.fixed').should('exist');

    // Close the modal
    cy.get('button:contains("Close")').click();
    cy.get('.fixed').should('not.exist');
  });
})
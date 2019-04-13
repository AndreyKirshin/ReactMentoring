describe('Movie App', function() {
    beforeEach(function(){
        cy.visit('http://localhost:8091/')
    })
})

it('Display Main component', () => {
    cy.get('.container').should('have.length', 1)
})
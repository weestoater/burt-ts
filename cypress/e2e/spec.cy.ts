describe('renders the home page spec', () => {
  it('has <h1>Welcome to burtware</h1>', () => {
    cy.visit('http://localhost:3000')
    .get('h1').contains('Welcome to burtware');  
  })
})
describe('Capita - Main Cypress Testing', () => {

  it('Should have a home page url', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('Should be able to visit the page and render a form with two fields and a submit button', () => {
    cy.get('.search-input').should('be.visible')
    cy.get('.search-exchange').should('be.visible')
    cy.get('.search-submit').should('be.visible')
  })

  it('Should be able to fill out the fields and click submit, displaying search suggestions', () => {
    cy.get('.search-input').type('AA')
    cy.get('.search-exchange').select('NASDAQ')
    cy.get('.search-submit').click({force: true})
  })

  it('After submitting the search, suggestion links pop up that a user can click to view the stock details', () => {
    cy.get('.link-stock').eq(1).should('be.visible')
    cy.get('.link-stock').eq(2).should('be.visible')
  })

  it('A user can then click one of these links to view the stock details', () => {
    cy.get('.link-stock').eq(1).click()
    cy.get('.ticker-title').contains('ISAA')
    cy.get('.company-title').contains('Iron Spark I Inc.')
    cy.get('.latest-price').contains('Latest Price')
  })

  it('After a user navigates to view a stock detail, the URL changes to reflect that stock', () => {
    cy.url().should('eq', 'http://localhost:3000/stock/ISAA&Iron%20Spark%20I%20Inc.')
  })

  it('If a user clicks the favorite button, then navigates to favorites, a button will appear to link to the stock', () => {
    cy.get('.favorite-stock').click({force: true})
    cy.get('.heart-icon').click()
    cy.get('.favorited-link').click()
    cy.get('.chart-container').should('be.visible')
    cy.get('.company-title').contains('Iron Spark I Inc.')
  })

  it('When a user clicks the nav icons, the url changes to reflect the current page.', () => {
    cy.get('.heart-icon').click()
    cy.url().should('eq', 'http://localhost:3000/favorites')
    cy.get('.page-title').contains('Favorite Stocks')
    cy.get('.chart-icon').click()
    cy.url().should('eq', 'http://localhost:3000/explore')
  })

  it('When a user navigates to the explore page, they should see a title and coming soon text', () => {
    cy.get('.page-title').contains('Explore Stocks')
    cy.get('.coming-soon').contains('Coming Soon...')
  })
})
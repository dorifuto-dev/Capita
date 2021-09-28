describe('Capita - Network flows', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should perform a fetch call when a user hits submit on search', () => {
    cy.get('.search-input').type('FCEL')
    cy.get('.search-exchange').select('NASDAQ')
    cy.get('.search-submit').click({force: true})
    cy.intercept('https://financialmodelingprep.com/api/v3/search-ticker?query=FCEL&limit=20&exchange=NASDAQ&apikey=1c2f080351d9a4329c6b22ef21dc46dc',
      {
        statusCode: 201,
      })
    cy.get('.stock-link-symbol').should('contain', 'FCEL')
    cy.get('.stock-link-name').should('contain', 'FuelCell Energy, Inc.')
  })

  it('Should fail to display suggestions if the network is down', () => {
    cy.get('.search-input').type('FCEL')
    cy.get('.search-exchange').select('NASDAQ')
    cy.get('.search-submit').click({force: true})
    cy.intercept('https://financialmodelingprep.com/api/v3/search-ticker?query=FCEL&limit=20&exchange=NASDAQ&apikey=1c2f080351d9a4329c6b22ef21dc46dc',
      {
        statusCode: 500,
      })
    cy.get('.stock-link-symbol').should('not.exist')
    cy.get('.stock-link-name').should('not.exist')
  })

  it('Should perform another fetch call when a user clicks on the search result', () => {
    cy.get('.search-input').type('FCEL')
    cy.get('.search-exchange').select('NASDAQ')
    cy.get('.search-submit').click({force: true})
    cy.get('.link-stock').click()
    cy.intercept('https://financialmodelingprep.com/api/v3/historical-chart/15min/FCEL?apikey=1c2f080351d9a4329c6b22ef21dc46dc',
      {
        statusCode: 201,
      })
    cy.get('.ticker-title').contains('FCEL')
    cy.get('.company-title').contains('FuelCell Energy, Inc.')
    cy.get('.latest-price').contains('Latest Price')
  })

  it('Should not display a stock if the server is down', () => {
    cy.get('.search-input').type('FCEL')
    cy.get('.search-exchange').select('NASDAQ')
    cy.get('.search-submit').click({force: true})
    cy.get('.link-stock').click()
    cy.intercept('https://financialmodelingprep.com/api/v3/historical-chart/15min/FCEL?apikey=1c2f080351d9a4329c6b22ef21dc46dc',
      {
        statusCode: 500,
      })
    cy.get('.ticker-title').should('not.exist')
    cy.get('.company-title').should('not.exist')
    cy.get('.latest-price').should('not.exist')
  })

  it('Should not display a stock if the path is not found', () => {
    cy.get('.search-input').type('FCEL')
    cy.get('.search-exchange').select('NASDAQ')
    cy.get('.search-submit').click({force: true})
    cy.get('.link-stock').click()
    cy.intercept('https://financialmodelingprep.com/api/v3/historical-chart/15min/dingdong?apikey=1c2f080351d9a4329c6b22ef21dc46dc',
      {
        statusCode: 404,
      })
    cy.get('.ticker-title').should('not.exist')
    cy.get('.company-title').should('not.exist')
    cy.get('.latest-price').should('not.exist')
  })
})
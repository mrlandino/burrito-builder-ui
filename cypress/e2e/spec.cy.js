describe('Orders Page', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000')
      cy.intercept('GET', 'http://localhost:3001/api/v1/orders', {fixture: 'orders'}).as('orders')
      cy.intercept('POST', 'http://localhost:3001/api/v1/orders', {
            statusCode: 201,
            body: {
                id: 4,
                name: 'Ross',
                ingredients: []
            }
      })
  })
  it('should confirm that true equals true', () => {
    expect(true).to.equal(true)
  })

  it('should have a title of Burrito Builder', () => {
    cy.contains('h1', 'Burrito Builder')
  })


  it('should have a form to add a burrito order to the orders', () => {
    cy.get('input[name="name"]')
      .type('Ross')
      .should("have.value", "Ross")
    cy.get('form').contains('button', 'beans').click()
    cy.get('form').contains('p', 'beans' )
    cy.get('form').contains('button', 'lettuce').click()
    cy.get('form').contains('p', 'beans, lettuce' )
    cy.get('form').contains('button', 'Submit Order').click()
  })

  it('should have orders displayed on the page on page load', () => {
    cy.get('section')
      .contains('.order', 'Ross')
  })
})
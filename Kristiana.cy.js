Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Kristiana', () => {
  beforeEach(() => {
    cy.visit('https://www.kristiana.lt/')
    cy.contains('Kontaktai').should('be.visible')
  
    cy.get('#notice-cookie-block').then(model => {
      if (model.is(':visible')) {
        model.find('#btn-cookie-allow').click()
      }
    })
  })
  
  it("Testing mouse hover function", () => {
    cy.get('[href="https://www.kristiana.lt/oda"]').trigger('mouseover')
    cy.get('[href="https://www.kristiana.lt/oda/veidui/serumai"]').click()
    cy.contains('įvairiems odos tipams').should('be.visible')
  })

  it("Testing filter function", () => {
    cy.get('.block.block-search').click()
    cy.get('#search').type('blaktienų tušai{enter}')
    cy.get('[href="https://www.kristiana.lt/catalogsearch/result/?q=Tu%C5%A1ai"]').should('be.visible').click()
    
    cy.get('.filter-options').contains('CLINIQUE').parent('.item').find('.mgs-layered-checkbox').then(checkbox => {
      cy.wrap(checkbox).click({force:true})
      cy.wrap(checkbox).should('be.checked')
    })

    cy.wait(2000)

    cy.get('.filter-options').contains('CLARINS').parent('.item').find('.mgs-layered-checkbox').then(checkbox => {
      cy.wrap(checkbox).click({force:true})
      cy.wrap(checkbox).should('be.checked')
    })
  })

  it("Testing product cart function", () => {
    cy.get('[href="https://www.kristiana.lt/oda"]').trigger('mouseover')
    cy.get('[href="https://www.kristiana.lt/oda/veidui/veido-kremai"]').should('be.visible').click()
    cy.get('#dk0-sorter').click()
    cy.get('#dk0-price_order_asc').click()
    cy.wait(2000)
    cy.contains('Kaina didėjančia').should('be.visible')
    cy.get('[href="https://www.kristiana.lt/sans-soucis-daily-vitamins-grape-anti-ox-care-dieninis-veido-kremas-50-grape-2470804"]:first').click()
    cy.get('#product-addtocart-button').click()
    cy.wait(2000)
    cy.get('[data-ui-id="message-success"]').should('be.visible')
    cy.get('.minicart-qty-wrapper').click()
    cy.get('#shopping-cart-table').should('be.visible')
  })
})
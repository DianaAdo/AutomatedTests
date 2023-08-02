describe('Steam', () => {
  beforeEach(() => {
    cy.visit('https://store.steampowered.com')
    cy.wait(5000)

    cy.get('#cookiePrefPopup').then(model => {
      if (model.is(':visible')) {
        model.find('#acceptAllButton').click()
      }
    })
  })

  it("Testing mouse hover function", () => {
    cy.get('.pulldown_desktop:last').trigger('mouseover')
    cy.get('[href="https://store.steampowered.com/category/puzzle_matching/?snr=1_4_4__12"]').click()
    cy.get('.Panel.Focusable').contains('Puzzle').should('be.visible')
  })

  it("Testing filter function", () => {
    cy.get('#searchform').type('Race')
    cy.get('#store_search_link').click({force:true})
    cy.get('[data-loc="Special Offers"]:last').should('be.visible').click()
    cy.get('[data-loc="Special Offers"]').find('.tab_filter_control.tab_filter_control_include.checked').should('be.visible')
    cy.get('.block_header').contains('Narrow by number of players').click()
    cy.get('[data-loc="Multi-player"]:last').should('be.visible').click()
    cy.get('[data-loc="Multi-player"]').find('.tab_filter_control.tab_filter_control_include.checked').should('be.visible')
    cy.get('#sort_by_trigger').click()
    cy.get('#Name_ASC').click()
  })
})
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('ASOS', () => {
  beforeEach(() => {
    cy.visit('https://www.asos.com/')
    cy.wait(2000)
    cy.contains('Marketplace').should('be.visible')
      
    cy.get('#onetrust-banner-sdk').then(model => {
      if (model.is(':visible')) {
        model.find('#onetrust-accept-btn-handler').click()
      }
    })
  })
  
  it("Testing mouse hover function", () => {
    cy.get('#women-floor').click()
    cy.get('.yI6sHXc.TYb4J9A.fVdHxMU:eq(8)').trigger('mouseover')
    cy.get('[href="https://www.asos.com/women/sportswear/leggings/cat/?cid=27163#nlid=ww|sportswear|shop+by+product|leggings"]').contains('Leggings').click()
    cy.get('.categoryTitle_r3Kaq').contains("Women's Gym & Sport Leggings").should('be.visible')
  })

  it("Testing filter function", () => {
    cy.get('#men-floor').click()
    cy.get('.yI6sHXc.TYb4J9A.fVdHxMU:eq(16)').trigger('mouseover')
    cy.get('[href="https://www.asos.com/men/designer-brands/cat/?cid=27111#nlid=mw|clothing|shop+by+product|designer"]').contains('Designer').click()
    cy.get('.categoryTitle_r3Kaq').contains("Men's Designer Brands").should('be.visible')

    cy.get('.title_pbGFT').contains('Product Type').click()
    cy.get('.ul_NDd_1.listMoreThan4Items_qcxkF').contains('T-shirts').should('be.visible')
    cy.get('.value_hLBn8').contains('Hoodies').click()
    cy.get('.label_RBk0j.label_T4OJ1.selected_ZCYlx').contains('Hoodies').should('be.visible')

    cy.get('.title_pbGFT').contains('Colour').click({force:true})
    cy.get('.ul_NDd_1.listMoreThan4Items_qcxkF').contains('Navy').should('be.visible')
    cy.get('.value_hLBn8').contains('Black').click({force:true})
    cy.get('.label_RBk0j.label_T4OJ1.selected_ZCYlx').contains('Black').should('be.visible')
      
    cy.get('.container_q84zd').contains('Size').click({force:true})
    cy.get('.ul_NDd_1.listMoreThan4Items_qcxkF').contains('M').should('be.visible')
    cy.get('.value_hLBn8').contains('L').click({force:true})
    cy.get('.label_RBk0j.label_T4OJ1.selected_ZCYlx').contains('L').should('be.visible')

    cy.get('.value_hLBn8').contains('XL').click({force:true})
    cy.get('.label_RBk0j.label_T4OJ1.selected_ZCYlx').contains('XL').should('be.visible')
      
    cy.get('.overflowFade_zrNEl').contains('The North Face Seasonal back print hoodie in black').click()
    cy.get('#pdp-react-critical-app').contains('The North Face Seasonal back print hoodie in black').should('be.visible')
  })

  it("Testing 'favourite item' function", () => {
    cy.get('#women-floor').click()
    cy.get('.yI6sHXc.TYb4J9A.fVdHxMU:eq(2)').trigger('mouseover')
    cy.get('[href="https://www.asos.com/women/skirts/cat/?cid=2639#nlid=ww|clothing|shop+by+product|skirts"]').contains('Skirts').click()
    cy.get('.description_JnSzY').contains("Whether it’s maxi, midi or mini").should('be.visible')
    cy.get('#pta-product-204219124-0').click()
    cy.get('.AGXyD.GIdCP').click()
    cy.get('.iLXCo.product-heartfull.P458p').should('be.visible')
    cy.get('.KH34gk4.TYb4J9A.mSjTvvT:eq(1)').click({force:true})
    cy.get('.itemCount_ftSVY').contains('1 item').should('be.visible')
  })
})
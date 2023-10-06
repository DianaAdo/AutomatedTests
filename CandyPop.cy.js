describe('CandyPop', () => {
  beforeEach(() => {
    cy.visit('https://candypop.lt/')
    cy.contains('© 2023 CandyPOP.lt Visos teisės saugomos.').should('be.visible')
  })

  it("Testing mouse hover function", () => {
    cy.get('[href="https://candypop.lt/k/saldumynai/"]').contains('Saldumynai').trigger('mouseover')
    cy.get('[href="https://candypop.lt/k/saldumynai/guminukai/"]').contains('Guminukai').click({force:true})
    cy.get('.woocommerce-products-header__title.page-title').contains('Guminukai').should('be.visible')
  })

  it("Testing filter function", () => {
    cy.get('[href="https://candypop.lt/k/gerimai/"]').contains('Gėrimai').click()
    cy.get('.cat-item.cat-item-304').contains('Be cukraus').click()
    cy.get('.woocommerce-products-header__title.page-title').contains('Be cukraus').should('be.visible')

    cy.get('#perpage').select('Rodyti visus produktus').should('have.value', '-1')
    cy.get('.orderby').select('Rikiuoti nuolaidas viršuje', {force:true}).should('have.value', 'on_sale_first')
    cy.get('.onsale').contains('-46%').should('be.visible')
  })

  it("Testing search function", () => {
    cy.get('.searchform.mini-widget-searchform:first').type('nerds')
    cy.get('.search-icon:first').click()
    cy.get('.woocommerce-products-header__title.page-title').contains('Paieškos rezultatai: “nerds”').should('be.visible')
    cy.get('[href="https://candypop.lt/p/saldainiai-nerds-rope-rainbow-26g/"]').contains('Saldainiai NERDS').should('be.visible')
  })
})
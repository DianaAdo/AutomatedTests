describe('Pigu', () => {
  beforeEach(() => {
    cy.visit('https://pigu.lt/lt/')
    cy.contains('Pirkėjo paskyra').should('be.visible')

    cy.get('.cookies_tbl').then(model => {
      if (model.is(':visible')) {
        model.find('[widget-attachpoint="agree"]').click()
      }
    })
  })
   
  it("Testing filter function", () => {
    cy.wait(500)
    cy.get('#department-48').contains('Kompiuterinė technika').click()
    cy.get('[href="https://pigu.lt/lt/plansetiniai-kompiuteriai-plansetes"]').contains('Planšetiniai kompiuteriai, el.skaityklės').click()
    cy.get('[href="https://pigu.lt/lt/plansetiniai-kompiuteriai/plansetes-tablets"]').contains('Planšetiniai kompiuteriai').click()
    cy.get('[rel-widget-id="categoryBranch"]').contains('Planšetiniai kompiuteriai').should('be.visible')
    cy.get('#filter-checkbox-5819879').click({force:true})
    cy.get('.c-filter-item__name').contains('Apple').click()
    cy.get('.c-filter-item__name').contains('Lenovo').click()
    cy.get('.c-filter-item__name').contains('10+').click()
    cy.get('.c-filter-item__name').contains('2360 x 1640').click()
    cy.get('[href="https://pigu.lt/lt/plansetiniai-kompiuteriai/plansetes-tablets/plansetinis-kompiuteris-apple-ipad-air-109-wi-fi-cellular?id=52715994"]:first').click({force:true})
    cy.get('.c-product__name').contains('Purple 5th Gen MME93HC/A').should('be.visible')
  })

  it("Testing product cart function", () => {
    cy.wait(500)
    cy.get('#department-82').contains('Kvepalai, kosmetika').click()
    cy.get('[href="https://pigu.lt/lt/kvepalai/kvepalai-pigiau"]').contains('Kvepalai').click()
    cy.get('[href="https://pigu.lt/lt/kvepalai-pigiau/kvepalai-moterims"]').contains('Kvepalai moterims').click()
    cy.get('[href="https://pigu.lt/lt/kvepalai-pigiau/kvepalai-moterims/tualetinis-vanduo-dolce-gabbana-3-limperatrice-edt?id=3939686"]:first').click({force:true})
    cy.get('[widget-attachpoint="addToCart"]').contains('Į krepšelį').click()
    cy.get('#add-to-cart-modal-header').contains('Prekė įtraukta į krepšelį').should('be.visible')
    cy.get('#buy').contains('Pirkti').click()
    cy.get('.info_cell.product-info-cell').contains('Tualetinis vanduo Dolce & Gabbana 3').should('be.visible')
  })

  it("Testing search function", () => {
    cy.wait(500)
    cy.get('#searchInput').type('lego')
    cy.get('.c-icon--search').click()
    cy.get('.filter-header-title.clearfix').contains('LEGO® konstruktoriai').should('be.visible')
    cy.get('[href="https://pigu.lt/lt/kudikiams-ir-vaikams/zaislai/konstruktoriai-ir-kaladeles/10311-lego-icons-orchideja?id=54051889"]:first').click({force:true})
    cy.get('.c-product__name').contains('10311 LEGO® Icons Orchidėja').should('be.visible')
  })
})
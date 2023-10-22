import "cypress-real-events"

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Cropp', () => {
  beforeEach(() => {
    cy.visit('https://www.cropp.com/lt/lt/')
    cy.wait(1500)
          
    cy.get('#cookiebanner').then(model => {
      if (model.is(':visible')) {
        model.find('#cookiebotDialogOkButton').click()
      }
    })
  
    cy.contains('LPP LITHUANIA UAB, J. Balčikonio street 3, Vilnius').should('be.visible')
  })

  it("Testing mouse hover function", () => {
    cy.get('[href="https://www.cropp.com/lt/lt/moterims"]').realHover()
    cy.get('.inner-link__StyledInnerLink-j7xczh-1.jIQEec').contains('Džinsai').click({force:true})
    cy.get('[href="https://www.cropp.com/lt/lt/cargo-dzinsai-7757w-90m"]').contains('Cargo džinsai').click({force:true})
    cy.get('.product-name').contains('Cargo džinsai').should('be.visible')
  })

  it("Testing filter function", () => {
    cy.get('[href="https://www.cropp.com/lt/lt/vyrams"]').click()
    cy.get('[href="https://www.cropp.com/lt/lt/vyrams/drabuziai?manbrickclothes"]').click({force:true})
    cy.get('.sidebar__Url-sc-4xriee-2.dedhmb').contains('Džemperiai').click({force:true})
    cy.get('.group__GroupLabelComponent-sc-1gjkxco-2.OrOzZ').contains('Rūšiuoti pagal').click({force:true})
    cy.get('.label__LabelCompontent-c6osh4-0.fmKiCA').contains('Naujausias').click({force:true})
    cy.get('.primary__PrimaryButtonComponent-sc-1pct4vx-0.lFhuW').contains('Rūšiuoti').click({force:true})

    cy.get('.group__GroupLabelComponent-sc-1gjkxco-2.OrOzZ').contains('Dydžiai').click({force:true})
    cy.get('#sizes-l').click({force:true})

    cy.get('.primary__PrimaryButtonComponent-sc-1pct4vx-0.lFhuW').contains('Rūšiuoti').click({force:true})
    cy.get('.group__GroupLabelComponent-sc-1gjkxco-2.OrOzZ').contains('Spalvos').click({force:true})
    cy.get('#colors-black').click({force:true})
    cy.get('.primary__PrimaryButtonComponent-sc-1pct4vx-0.lFhuW').contains('Rūšiuoti').click({force:true})

    cy.get('[href="https://www.cropp.com/lt/lt/dzemperis-su-gobtuvu-2-5466w-99x"]:first').click({force:true})
    cy.get('[src="https://static.cropp.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/5/4/5466W-99X-001-2-739270_1.jpg"]').should('be.visible')
  })
})
describe('Housebrand', () => {
    beforeEach(() => {
      cy.visit('https://www.housebrand.com/lt/lt/')
      cy.wait(2000)
      cy.contains('Pagalba ir Kontaktai').should('be.visible')
      
      cy.get('#cookiebanner').then(model => {
        if (model.is(':visible')) {
          model.find('#cookiebotDialogOkButton').click()
        }
      })
    })

    it("Testing mouse hover function", () => {
      cy.get('.menu-link__MenuLink-sc-1q9icnp-0.crxiHB').contains('Moteris').trigger('mouseover')
      cy.get('.menu-link__MenuLink-sc-1q9icnp-0.cQIgWv').contains('Naujienos').click()
      cy.get('.sc-fKFxtB.jIUvDL.es-category-title').contains('Naujienos jai').should('be.visible')
    })
  
    it("Testing filter function", () => {
      cy.get('.menu-link__MenuLink-sc-1q9icnp-0.crxiHB').contains('Vyras').trigger('mouseover')
      cy.get('[href="https://www.housebrand.com/lt/lt/vyrams/apranga/bliuzonai"]').contains('Bliuzonai').click({force:true})
      cy.get('.sc-fKFxtB.jIUvDL.es-category-title').contains('Vyriški džemperiai su gobtuvu ir sportiniai nertiniai').should('be.visible')
      cy.get('.group__GroupLabelComponent-sc-1gjkxco-2.iVPyNM').contains('Dydžiai').click()
      cy.get('#sizes-l').click({force:true})
      cy.get('.label__LabelCompontent-c6osh4-0.brweDy.active').find('#sizes-l').should('be.checked')
      cy.get('#sizes-xl').click({force:true})
      cy.get('.label__LabelCompontent-c6osh4-0.brweDy.active').find('#sizes-xl').should('be.checked')
      cy.get('.primary__PrimaryButtonComponent-sc-1pct4vx-0.hbyPzF').contains('Filtras').click()
      cy.wait(2000)
      cy.get('.group__StyledGroupComponent-sc-1gjkxco-0.fSNSsz:eq(1)').contains('(2)').should('be.visible')
      cy.get('.group__GroupLabelComponent-sc-1gjkxco-2.iVPyNM').contains('Spalvos').click()
      cy.get('#colors-cream').click({force:true})
      cy.get('.label__LabelCompontent-c6osh4-0.brweDy.active').find('#colors-cream').should('be.checked')
      cy.get('#colors-grey').click({force:true})
      cy.get('.label__LabelCompontent-c6osh4-0.brweDy.active').find('#colors-grey').should('be.checked')
      cy.get('.primary__PrimaryButtonComponent-sc-1pct4vx-0.hbyPzF').contains('Filtras').click({force:true})
      cy.wait(2000)
      cy.get('.group__StyledGroupComponent-sc-1gjkxco-0.fSNSsz:eq(2)').contains('(2)').should('be.visible')
    })
  })
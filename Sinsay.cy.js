Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

function DenySubscription () {
  cy.wait(1000)
  cy.get('body').then(body => {
    if (body.$('.newsletterPopupOverlay').length > 0) {
      body.$('.newsletterPopupOverlay button').click()
    }
  })
}

describe('Sinsay', () => {
    beforeEach(() => {
      cy.visit('https://www.sinsay.com/lt/lt/')
        
      cy.get('#cookiebanner').then(model => {
        if (model.is(':visible')) {
          model.find('#cookiebotDialogOkButton').click()
        }
      })

      cy.contains('SINSAY PREKĖS ŽENKLAS').should('be.visible')
    })
    
    it("Testing filter function", () => {
      cy.wait(3000)
      cy.get('body').then(body => {
        if (body.$('.newsletterPopupOverlay').length > 0) {
          body.$('.newsletterPopupOverlay button').click()
        }
      })

      cy.get('[href="https://www.sinsay.com/lt/lt/moterims"]').contains('Moterims').click({force:true})
      cy.get('.group__GroupLabelComponent-sc-1gjkxco-2.gVXaQB').contains('Rūšiuoti pagal').click()
      cy.get('.radio__RadioContainer-frao3x-0.jhOwtN.radio-container').contains('Kainos nuo mažiausios iki didžiausios').click({force:true})
      cy.get('.primary__PrimaryButtonComponent-sc-1pct4vx-0.fDECVK').contains('Rūšiuoti').click()

      cy.get('.group__GroupLabelComponent-sc-1gjkxco-2.gVXaQB').contains('Spalvos').click()
      cy.get('.item__StyledItemComponent-sc-1b1qw41-0.fSzaQe').contains('juoda').click()
      cy.get('.item__StyledItemComponent-sc-1b1qw41-0.fSzaQe').contains('rausva').click({force:true})
      cy.get('.primary__PrimaryButtonComponent-sc-1pct4vx-0.fDECVK').contains('Rūšiuoti').click({force:true})

      cy.get('.group__GroupLabelComponent-sc-1gjkxco-2.gVXaQB').contains('TIPAS').click()
      cy.get('.label__LabelCompontent-c6osh4-0.jFTrYo').contains('megztinis').click()
      cy.get('.primary__PrimaryButtonComponent-sc-1pct4vx-0.fDECVK').contains('Rūšiuoti').click({force:true})
      cy.get('[href="https://www.sinsay.com/lt/lt/trikotazinis-kardiganas-7388j-99s"]:first').click()
      DenySubscription();
      cy.get('.product-name-wrapper').contains('Trikotažinis kardiganas').should('be.visible')
    })

    it("Testing product cart function", () => {
      cy.get('[href="https://www.sinsay.com/lt/lt/vyrams"]').contains('Vyrams').click({force:true})
      cy.get('[href="https://www.sinsay.com/lt/lt/dekoratyvinio-rasto-megztinis-0477a-9mm"]:first').click()
      DenySubscription();
      cy.get('.product-name-wrapper').contains('Dekoratyvinio rašto megztinis').should('be.visible')
      cy.get('.XdIne').contains('XS').click()
      cy.get('.add-to-cart-button').click()
      cy.get('.modal-header').contains('Į jūsų pirkinių krepšelį trauktas vienas produktas').should('be.visible')
      cy.get('.go-to-cart').contains('APMOKĖTI').click()
      cy.get('.headline__HeadlineComponent-cvuah5-0.jwgzuL').contains('Dekoratyvinio rašto megztinis').should('be.visible')
    })
})

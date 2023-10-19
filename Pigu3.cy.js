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
     
  it("MP registration form", () => {
    cy.get('[href="https://pigu.lt/lt/marketplace"]').contains('Prekiaukite per Pigu.lt').click()
    cy.get('.register').contains('Registruotis konsultacijai').click()
    cy.get('.mp_title.tac.mb15').contains('Registruokitės ir prekiaukite per Pigu.lt').should('be.visible')
    cy.get('#name').type('Jonas Jonaitis')
    cy.get('#phone').type('111111111111')
    cy.get('#email').type('jonasjonaitisgmail.com')
    cy.get('.icheckbox.icheck-item').click()
    cy.get('.icheckbox.icheck-item input').should('be.checked')
    cy.get('.btn-mp-register').contains('Registruotis konsultacijai').click()
    cy.get('#company_name').contains('Patikrinkite, ar teisingai įvedėte').should('be.visible')
    cy.get('#phone').contains('Patikrinkite, ar teisingai įvedėte (Pvz.: +37066105555)').should('be.visible')
    cy.get('#email').contains('Patikrinkite, ar teisingai įvedėte').should('be.visible')
    cy.get('#categories_selected').contains('Patikrinkite, ar teisingai įvedėte').should('be.visible')
    cy.get('#recommendation_comment').contains('Patikrinkite, ar teisingai įvedėte').should('be.visible')
  })
})
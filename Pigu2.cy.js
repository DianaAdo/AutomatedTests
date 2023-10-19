import "cypress-real-events"

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
     
  it("Registration form", () => {
    cy.get('.c-icon--profile:first').realHover()
    cy.get('[href="https://pigu.lt/lt/u/register"]').contains('Registruotis').click({force:true})
    cy.get('.form-row.has-icon:eq(3) input').type(`${Date.now()}@gmail.com`)
    cy.get('.form-row.has-icon:eq(4) input').type('testpassword')
    cy.get('.form-row.has-icon:eq(5) input').type('testpassword')
    cy.get('.icheckbox.icheck-item:first').click()
    cy.get('.modal-header').contains('Patvirtinu').should('be.visible')
    cy.get('.col-1-of-2').contains('Taip').click()
    cy.get('.icheckbox.icheck-item:first input').should('be.checked')
    cy.get('.form-controls:last').click()
    cy.get('.form-default.login-form').contains('El. pašto patvirtinimas').should('be.visible')
  })
})
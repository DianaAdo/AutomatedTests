Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('OP-GG-Valorant', () => {
    it("Checking SEN Tenz stats", () => {
      cy.visit('https://www.op.gg')
      cy.get('.css-1kmtcjv.e1ua6u350').contains('Valorant').should('be.visible').click()
      cy.get('#search-player-big').type('SEN Tenz', {delay: 200})
      cy.get('[href="/profile/SEN%20TenZ-81619"]').click()
      cy.get('.player-favorite-button').click()
      cy.reload()
      cy.wait(500)
      cy.get('.player-favorite-button.player-favorite-button--active').should('be.visible')
      cy.get('[data-value="summary"]').should('have.attr', 'href').and('eq', '/profile/SEN%20TenZ-81619')
      cy.get('[data-value="agents"]').should('have.attr', 'href').and('eq', '/profile/SEN%20TenZ-81619/agents')
      cy.get('[data-value="weapons"]').should('have.attr', 'href').and('eq', '/profile/SEN%20TenZ-81619/weapons')
      cy.get('[data-value="maps"]').should('have.attr', 'href').and('eq', '/profile/SEN%20TenZ-81619/maps')
      cy.get('[data-key="update_button"]').should('have.css', 'background-color', 'rgb(232, 64, 87)')
      cy.get('.css-sxadkk').should('be.visible').each((button) => { button.click() })
      cy.get('.participant').its('length').should('eq', 100)
    })
})
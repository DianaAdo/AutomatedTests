describe('Amazon', () => {
  it('Product cart test', () => {
    cy.visit('https://www.amazon.com')
    cy.contains('Deliver to').should('be.visible')
    cy.get('#nav-hamburger-menu').should('be.visible').click()
    cy.get('[data-ref-tag="nav_em_1_1_1_29"]').should('be.visible').click()
    cy.contains('eGift cards').should('be.visible').click()
    cy.contains('Amazon Reload').should('be.visible').click()
    cy.get('#a-autoid-1-announce').should('be.visible').click()
    cy.get('[aria-labelledby="gcui-asv-reload-buynow-button-announce"]').should('be.visible').click()
    cy.contains('Email or mobile phone number').should('be.visible')
  })
})
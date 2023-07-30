describe('TESTAVIMO SCENARIJUS', () => {
  it('TESTAVIMO ATVEJIS', () => {
    cy.visit('https://www.duckduckgo.com')
    cy.contains('Tired of being tracked online?')
    cy.get('#searchbox_input').type('Speedtest by ookla')
    cy.get('.searchbox_searchButton__F5Bwq').click()
    cy.contains('The Global Broadband Speed Test')
    cy.get('.js-badge-main-msg > .ddgsi').click()
    cy.contains('Take control of your personal data!').should('not.be.visible')
    //cy.get('.js-badge-main-msg > .ddgsi').should('not.be.visible')
  })
})
describe('OP-GG', () => {
    it("Checking Elosanta's stats", () => {
      cy.visit('https://www.op.gg')
      cy.get('[title="Naafiri"]').should('be.visible')
      cy.get('.css-bc9ut9.e5qh6tw2').click()
      cy.contains('Europe West').click()
      cy.get('#searchHome').type('twitchtvELOSANTA', {delay: 200})
      cy.get('[alt="twitchtvELOSANTA"]').should('be.visible').click()
      cy.get('.css-2rvemq.e10wh5kk2').click()
      cy.get('.css-13itnp3.e5qh6tw2').should('be.visible')
      cy.get('.css-8ri8qc.e1g0z3cq0').contains('Ranked Solo').should('be.visible').click()
      cy.get('.css-8xctw3.exo2f213').contains('Karthus').should('be.visible')
      cy.get('.css-8xctw3.exo2f213').screenshot()
    })
})
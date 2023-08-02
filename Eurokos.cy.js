Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Eurokos', () => {
  beforeEach(() => {
    cy.visit('https://www.eurokos.lt/', {
      headers: {
        'user-agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:70.0) Gecko/20100101 Firefox/70.0',
      }
    })

    cy.get('.e_cookie_info').then(model => {
      if (model.is(':visible')) {
        model.find('.btn.btn-primary.float-none.float-md-left.submit-all-settings-btn').click()
      }
    })
  })

  const logIntoAccount = () => {
    cy.get('.icon-user:last').should('be.visible').click()
    cy.get('#loginUser').type('tobidol297@inkiny.com')
    cy.get('#loginPwd').type('123456789lol')
    cy.get('.btn.red-btn').click()
    cy.get('[title="Mano paskyra"]').should('be.visible')
  }

  it('Testing login function', () => {
    logIntoAccount()
  })

  const goToProductPage = () => {
    cy.get('#searchParam').type('deoproce green tea fresh')
    cy.get('.icon-search:last').click()
    cy.get('.prd-img.image-hover-scale.image-container').click()
  }

  it('Testing search function and product page', () => {
    goToProductPage()

    cy.get('.label-naujiena:first').then(label => {
      cy.wrap(label).should('be.visible').should('have.css', 'background-color', 'rgb(117, 164, 154)')
      cy.wrap(label).should('have.css', 'color', 'rgb(255, 255, 255)')
      cy.wrap(label).contains('Naujiena').should('be.visible')
    })
  })

  it('Testing favorite product function', () => {
    logIntoAccount()
    goToProductPage()

    cy.get('#product-to-noticelist').should('be.visible').click()
    cy.wait(5000)
    cy.get('.compare-qty.wishlist-header-qty:last').should('be.visible')
    cy.get('[title="Mėgstamiausios"]:last').click()
    cy.get('.prd-title').contains('DEOPROCE GREEN TEA FRESH odos drėkiklis, 30 ml').should('be.visible')
  })
})
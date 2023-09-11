Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('H&M', () => {
    beforeEach(() => {
      cy.visit('https://www.hm.com/entrance.ahtml?goeorguri=%2Findex.html')
      cy.get('.listblock--header').contains('Europe').should('be.visible')
      cy.get('#link_lt_lt').click()
      
      cy.get('#onetrust-banner-sdk').then(model => {
        if (model.is(':visible')) {
          model.find('#onetrust-accept-btn-handler').click()
        }
      })
    })
    
    it("Testing mouse hover function", () => {
      cy.get('[href="/en_eur/ladies.html"]').contains('Ladies').trigger('mouseover')
      cy.get('[href="/en_eur/ladies/shop-by-product/cardigans-and-jumpers.html"]').click({force:true})
      cy.get('.heading').contains('CARDIGANS & JUMPERS').should('be.visible')
    })

    it("Testing filter function", () => {
      cy.get('[href="/en_eur/men.html"]').contains('Men').trigger('mouseover')
      cy.get('[href="/en_eur/men/shop-by-product/hoodies-sweatshirts.html"]').click({force:true})
      cy.get('.heading').contains('HOODIES & SWEATSHIRTS FOR MEN').should('be.visible')

      cy.get('.dropdown-btn.js-dropdownbtn').contains('Sort by').click()
      cy.get('.dropdown-btn.js-dropdownbtn.is-open').contains('Sort by').should('be.visible')
      cy.get('#dropdown-sort-newest').click()
      cy.get('#dropdown-sort-newProduct').should('be.checked')

      cy.get('.dropdown-btn.js-dropdownbtn:eq(1)').contains('Colour').click({force:true})
      cy.get('#dropdown-colorWithNames-black000000').click({force:true})
      cy.get('#dropdown-colorWithNames-pinkffc0cb').click({force:true})
      cy.get('#dropdown-colorWithNames-black000000').should('be.checked')
      cy.get('#dropdown-colorWithNames-pinkffc0cb').should('be.checked')

      cy.get('.dropdown-btn.js-dropdownbtn').contains('Size').click({force:true})
      cy.get('#dropdown-sizes').should('be.visible')
      cy.get('[for="dropdown-sizes-370l3menswear"]').contains('l').click({force:true})
      cy.get('#dropdown-sizes-370l3menswear').should('be.checked')

      cy.get('[href="/en_eur/productpage.1193373002.html"]:first').click()
      cy.get('#js-product-name').contains('Loose Fit Hoodie').should('be.visible')
    })

    it("Testing 'favourite item' function", () => {
      cy.get('[href="/en_eur/ladies.html"]').contains('Ladies').trigger('mouseover')
      cy.get('[href="/en_eur/ladies/shop-by-product/jeans.html"]').click({force:true})
      cy.get('.heading').contains("WOMEN'S JEANS").should('be.visible')
      cy.get('[href="/en_eur/productpage.0941666052.html"]:first').click()
      cy.get('#js-product-name').contains('Slim Mom High Ankle Jeans').should('be.visible')
      cy.get('.BodyText-module--meta__5XWBG').contains('Not saved to favorites').click({force:true})
      cy.get('.BodyText-module--meta__5XWBG').contains('Saved to favorites').should('be.visible')
      cy.get('.ModalTitle-module--heading__1Qpi8').contains('Item not added to Favourites').should('be.visible')
    })
})
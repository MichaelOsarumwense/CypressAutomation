/// <reference types="Cypress" />
//node_modules\.bin\cypress open

describe('My 2 Test Suite', function() {
    it('my second test case', function() {

        cy.visit("https://www.rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        
       //coverting web element to varibles
        cy.get('.products').as('productelement')
    // parent child chaining
       cy.get('@productelement').find('.product').each(($el, index, $list) => {

        const textveg= $el.find('h4.product-name').text()
        if (textveg.includes('Cashews'))
        {
        $el.find('button').click()
        }
    })
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    //cy.pause()
    //cy.contains('Place Order').click()

    })

  })
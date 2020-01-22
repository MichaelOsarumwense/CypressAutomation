/// <reference types="Cypress" />
//node_modules\.bin\cypress open

describe('My 1 Test Suite', function() {
    it('my first test case', function() {

        cy.visit("https://www.rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        //parent child chaining 
        cy.get('.products').as('productelement')
        cy.get('@productelement').find('.product').should('have.length',4)
     // returns array of the product which is 3rd on the list
        cy.get('@productelement').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
        console.log('Mike')
        })
    // finding unique element by name 
       cy.get('@productelement').find('.product').each(($el, index, $list) => {

        const textveg= $el.find('h4.product-name').text()
        if (textveg.includes('Cashews'))
        {
        $el.find('button').click()
        }
    })
    //Assert
    cy.get('p > strong').should('have.text', 'GreenKart')
    //handling assync with then
    cy.get('p > strong').then(function(logoelement)
    {
         cy.log(logoelement.text())
    })
    const logo=cy.get('p > strong')
    })

  })
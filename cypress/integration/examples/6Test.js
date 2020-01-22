/// <reference types="Cypress" />
//node_modules\.bin\cypress open

describe('My six Test Suite', function() {
    it('my 6 test case', function() {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")

            //mouse hover -- show method
            cy.get('div.mouse-hover-content').invoke('show') //hovers over
            cy.contains('Top').click(/*{force:true}*/)
            cy.url().should('include', 'top')
    })

})

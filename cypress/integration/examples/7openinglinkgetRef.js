/// <reference types="Cypress" />
//node_modules\.bin\cypress open

describe('My seven Test Suite', function() {
    it('my 7 test case', function() {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")

        cy.get('#opentab').then(function(el) {
            const url=el.prop('href')
            cy.log(url)
             cy.visit(url)
        })

    })

})

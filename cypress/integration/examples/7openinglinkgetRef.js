/// <reference types="Cypress" />
//node_modules\.bin\cypress open

describe('My First Test Suite', function() {
    it('my first test case', function() {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")

        cy.get('#opentab').then(function(el) {
            const url=el.prop('href')
            cy.log(url)
             cy.visit(url)
        })

    })

})

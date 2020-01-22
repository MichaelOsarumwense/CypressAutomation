/// <reference types="Cypress" />
//node_modules\.bin\cypress open

describe('My First Test Suite', function() {
    it('Proquest', function() {
        cy.visit("https://www.google.co.uk")
        cy.get('.gLFyf').type('proquest')
        cy.get('.FPdoLc > center > .gNO89b').click({force:true})
        cy.contains('ProQuest | Databases, EBooks and Technology for Research').click()
        cy.get('.hidden-xs > .dropdown-toggle > .fa').click()
        cy.get('#search-form > .input-group > .twitter-typeahead > .form-control').type('QA')
        cy.get('#search-form > .input-group > .input-group-btn > .btn > .fa').click()

      

    })

})
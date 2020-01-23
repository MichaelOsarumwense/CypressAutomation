/// <reference types="Cypress" />
//node_modules\.bin\cypress open
//The route command is for listening and capturing while request explicitly hitting that service

describe('My 1 Test Suite', function() {
    it('my first test case', function() {
        
       cy.visit('https://example.cypress.io/commands/network-requests')
    
        cy.server()

        cy.route({
            method: 'PUT',
            url: 'comments/*',
            status: 404,
            response: {
            error: "Hey, i understood Cyprus" 
             },
            delay: 1000
             }).as('UpdateComment')

             cy.get('.network-put').click()
             //get the info from the dev team what the css for the error message would be
             cy.get('.network-put-comment').should('contain', "Hey, i understood Cyprus")

    })})
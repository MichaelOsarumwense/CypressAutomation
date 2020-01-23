/// <reference types="Cypress" />
//node_modules\.bin\cypress open
//The route command is for listening and capturing while request explicitly hitting that service

describe('My 1 Test Suite', function() {
    it('my first test case', function() {

        cy.request('Post', 'http://216.10.245.166/Library/Addbook.php', {
            "name": "MichaelTesto",
            "isbn":"bcdidxx",
            "aisle": "223k1",
            "author":"Mikolo"


        }).then(function(response)
        {
            expect (response.body).to.have.property("Msg","successfully added"),
            expect(response.status).to.eq(200)
            cy.log(response)
        })



    })})
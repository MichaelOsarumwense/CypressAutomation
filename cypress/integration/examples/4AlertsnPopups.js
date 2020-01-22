/// <reference types="Cypress" />
//node_modules\.bin\cypress open

describe('My fourth Test Suite', function() {
    it('my 4 test case', function() {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        cy.on('window:alert', (str)=>
        {
         expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm', (str)=>
        {
         expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //invoke (opening another page on the same window)
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.wait(4000)
        // get url of current active page
        cy.url().should('include', 'rahulshettyacademy')

        //navigation browser contor, going back
        cy.go('back')

    })

})

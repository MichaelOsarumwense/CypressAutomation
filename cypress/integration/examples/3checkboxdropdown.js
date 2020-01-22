/// <reference types="Cypress" />
//node_modules\.bin\cypress open

describe('My First Test Suite', function() {
    it('my first test case', function() {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        // check boxes
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])

        // Static drop down
        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2')

         // dynamic dropdown
         cy.get('#autocomplete').type('ind')
        //.classname space and tagname where the value is contained 
         cy.get('.ui-menu-item div').each(($e1, index, $list) => {

            if($e1.text()=="India")
            {
                $e1.click()
            }

         })
         // Autocomplete
            cy.get('#autocomplete').should('have.value', 'India')
// Visible invisible
            cy.get('#displayed-text').should('be.visible')
            cy.get('#hide-textbox').click()
            cy.get('#displayed-text').should('not.be.visible')
            cy.get('#show-textbox').click()
            cy.get('#displayed-text').should('be.visible')

            //Radio buttons
            cy.get('input[value="radio2"]').check().should('be.checked')

    })

})

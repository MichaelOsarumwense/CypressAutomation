/// <reference types="Cypress" />
//node_modules\.bin\cypress open

describe('My fith Test Suite', function() {
    it('my 5 test case', function() {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
// table 
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
            
            const text=$e1.text()
            if(text.includes("Python"))
            {
               //siblings
               cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
               {
                 const priceTxt = price.text()
                 expect(priceTxt).to.equal('25')
               })
         }

     

         })
    })

})

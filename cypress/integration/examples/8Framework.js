/// <reference types="Cypress" />
//node_modules\.bin\cypress open
import HomePage from '../../support/pageObject/HomePage'
import ProductPage from '../../support/pageObject/productPage'

before(function(){
    cy.fixture('example').then(function(data) 
    {
      this.data=data
    })

})

describe('My First Test Suite', function() {
    it('my first test case', function() {
        //Cypress.config('pageLoadTimeout',6000)
        const homePage= new HomePage()
        const productpage = new ProductPage()
        cy.visit(Cypress.env('url'))
        homePage.getNameEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getNameEditBox().should('have.attr', 'minlength','2')
        homePage.getRadioButton().should('be.disabled')
      

        homePage.getShopTab().click()

     this.data.ProductName.forEach(function(element) {
         cy.selectProduct(element)

     });
        productpage.checkOutButton().click()
 
        var sum=0
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            const amount =$el.text()
            var res = amount.split(" ")
            res=res[1].trim()
            sum= Number(sum)+Number(res)
         
        }).then(function(){
            cy.log(sum)

        })
       cy.get('h3 strong').then(function(element){
        const amount =element.text()
        var res = amount.split(" ")
        var total =res[1].trim()
        expect(Number(total)).to.equal(sum)

       })

        cy.contains('Checkout').click()
        cy.get('#country').type('ind')
        cy.get('.suggestions > :nth-child(1) > li > a').click()
        cy.get('.checkbox').click()
        cy.get('.ng-untouched > .btn').click()
        //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function(element){
           const actualTxt=element.text()
            expect(actualTxt.includes("Success")).to.be.true

        })
    })

})
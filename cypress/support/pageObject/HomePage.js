 class HomePage {

    getNameEditBox()
    {
        return cy.get(':nth-child(1) > .form-control')
    }

    getGender()
    {
        return  cy.get('#exampleFormControlSelect1')
    }

    getRadioButton()
    {
        return cy.get('#inlineRadio3')
    }

    
    getTwoWayDataBinding()
    {
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getShopTab()
    {
        return cy.get(':nth-child(2) > .nav-link')
    }

}
export default HomePage;
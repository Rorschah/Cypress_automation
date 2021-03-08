/// <reference types="cypress" />

describe('PricingPage', () => 
{
    // GIVEN
    // Web page with {URL} is launched for the first time
    context('Pricing', () => {
        beforeEach(() => {
            cy.visit('https://www.alfa.smartlook.cloud/pricing/?currencyCode=CZK')
        })

    it('WebsitePackagesTestCase', () => 
    {
        //WHEN
        // Web page opens

        //THEN
        // Check prices of website Startup package and Business package, that they are 350 CZK and 1592 CZK
        cy.get(".package__price").contains('CZK 350')
        cy.get(".package__price").contains('CZK 1,592')
    })

    it('MobilePackages', () => 
    {
        //WHEN
        // Web page opens

        //THEN
        // Check prices of mobile Startup package and Business package, that they are 960 CZK and 1960 CZK
        cy.get('.button-group').click()

        cy.get(".package__price").contains('CZK 960')
        cy.get(".package__price").contains('CZK 1,960')
    })

    it('BuiltAPlanButton', () => 
    {
        //WHEN
        // Web page opens

        //THEN
        // Check prices of mobile Startup package and Business package, that they are 960 CZK and 1960 CZK
        cy.get('.button--primary[id="business-package-button"]').first().click()
        cy.get('.input').first().select('50,000')

        cy.get(".modal-price").contains('CZK 1,099')
    })
  })
})

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
        // Native mobile app button is clicked
        cy.get('.button-group').click()

        //THEN
        // Check prices of mobile Startup package and Business package, that they are 960 CZK and 1960 CZK
        cy.get(".package__price").contains('CZK 960')
        cy.get(".package__price").contains('CZK 1,960')
    })

    it('BuiltAPlanButton', () => 
    {
        //WHEN
        // Web page opens
        // Build a plan button on startup box is clicked
        // Is selected session limit 50,000
        cy.get('.button--primary[id="business-package-button"]').first().click()
        cy.get('.input').first().select('50,000')

        //THEN
        // Check that price is 1099 CZK
        cy.get(".modal-price").contains('CZK 1,099')
    })
  })
})

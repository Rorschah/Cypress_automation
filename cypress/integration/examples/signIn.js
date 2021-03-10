/// <reference types="cypress" />

describe('signIn', () => 
{
    // GIVEN
    // Web page with {URL} is launched for the first time
    context('Pricing', () => {
        beforeEach(() => {
            cy.visit('https://app.alfa.smartlook.cloud/sign/in')
        })

    it('ShouldShowSignInPage', () => 
    {
        //WHEN
        // Web page opens

        //THEN
        // signIn page is shown (if LogIn button exists)
        cy.get("#sign-in-form--submit").should('exist')
    })

        it('ShouldNotAllowSignInWithIncorrectEmail', () => 
    {
        //WHEN
        // Web page opens
        // User fill in incorrect email
        cy.get("#sign-in-form--email-input--inner").clear().type('hokuspokus')

        //THEN
        // Error message appears
        cy.get("[data-cy=email-input-error]").contains("That doesn't look like a valid email address")
    })

    it('ShouldNotAllowTooShortPassword', () => 
    {
        //WHEN
        // Web page opens
        // User fill in short password
        cy.get("#sign-in-form--password-input--inner").clear().type('abc')

        //THEN
        // Error message appears
        cy.get("[data-cy=password-input-error]").contains("Your password must be at least 6 characters long")
    })
  })
})

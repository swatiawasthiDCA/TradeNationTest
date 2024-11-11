/// <reference types="cypress" />

export class HomePage {

    loadAndAcceptCookie() {
        cy.visit('./')
        cy.get('[id="onetrust-accept-btn-handler"]').click()
    }

    clickSignUp() {
        cy.get('span').contains('Sign up / Log in').click()
    }
}

export const onHomePage = new HomePage()
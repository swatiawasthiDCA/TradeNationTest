/// <reference types="cypress" />

import { onHomePage } from "../support/page_Objects/homePage"

describe('Trade Nation Home Page Test Suite', () => {

    beforeEach('Open Trade Nation Page and accept default cookie', () => {
        onHomePage.loadAndAcceptCookie()
    })

    it('Home page title ', () => {
        cy.get('[data-testid="logo"]').click().then(title =>
            cy.wrap(title)
                .title()
                .should('eq', 'Trade Nation UK – Low-Cost Spread Betting and Forex Broker')
        )
    })
})
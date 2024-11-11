/// <reference types="cypress" />

export class SignUpPage {

    enterEmail(emailId) {
        cy.get('#email').then(email => cy.wrap(email).type(emailId))
    }

    containInvalidEmailErrorMsg(index, errorMsg) {
        cy.get('[data-test-id="emailTextfield"]')
            .find('p.MuiFormHelperText-root')
            .eq(index)
            .invoke('text').then(errormessage =>
                expect(errormessage).to.contains(errorMsg, { matchCase: true })
            )
    }

    enterPassword(pwd) {
        cy.get('#password').then(password => cy.wrap(password).type(pwd))
    }

    containInvalidPasswordErrorMsg(index, errorMsg) {
        cy.get('[data-test-id="passwordTextfield"]')
            .find('p.MuiFormHelperText-root')
            .eq(index)
            .invoke('text').then(errormessage => {
                expect(errormessage).to.contains(errorMsg, { matchCase: true })
            }
            )
    }

}

export const onSignUpPage = new SignUpPage()
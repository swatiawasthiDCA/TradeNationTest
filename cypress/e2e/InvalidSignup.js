/// <reference types="cypress" />

import { onHomePage } from "../support/page_Objects/homePage"
import { onSignUpPage } from "../support/page_Objects/signUpPage"

describe('Negative Invalid Sign Up Suite', () => {

    beforeEach('Open Trade Nation Page and goto Signup page', () => {
        onHomePage.loadAndAcceptCookie()
        onHomePage.clickSignUp()
    })

    it('invalid email', () => {
        onSignUpPage.enterEmail('abc@gmail.c')
        onSignUpPage.containInvalidEmailErrorMsg(0, 'Wrong email format')
    })

    it('valid email and invalid password', () => {
        onSignUpPage.enterEmail('abc@gmail.com')

        onSignUpPage.enterPassword('pwd')
        onSignUpPage.containInvalidPasswordErrorMsg(0, 'Must have at least 8 characters')
        onSignUpPage.containInvalidPasswordErrorMsg(1, 'Must contain upper and lower case characters')
        onSignUpPage.containInvalidPasswordErrorMsg(2, 'Must contain a number and a symbol (!@#$%^&*)')
    })
})
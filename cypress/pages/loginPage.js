class LoginPage {

    selectorsList() {
        const selectors = {
            formLoginButton: "nav",
            usernameField: "[data-cy='email']",
            passwordField: "[data-cy='password']",
            loginButton: "form button",
            failConfirm: ".text-red-500"
        }

        return selectors
    }

    accessLoginPage() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.window().then((win) => {
            win.sessionStorage.clear()
        })
        
        cy.visit('/')

    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().formLoginButton).click()
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    loginFail(failMessage) {
        cy.get(this.selectorsList().failConfirm).should('be.visible').and('contain', failMessage)
    }

}

export default LoginPage

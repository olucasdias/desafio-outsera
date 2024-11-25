export const ELEMENTS = {
    urlIndex: 'https://www.saucedemo.com/',
    username: '[id=user-name]',
    password: '[id=password]',
    loginButton: '[id=login-button]',
    appLogo: '.app_logo',
    urlInventory: 'inventory.html'
}

const element = ELEMENTS;

class loginUser {
    acessPage(){
        cy.visit(element.urlIndex) 
        cy.get(element.username).should('be.visible')
    }

    logWithValidUser(){
        cy.get(element.username).type('standard_user')
        cy.get(element.password).type('secret_sauce')
        cy.get(element.loginButton).click()
    }

    validInitialPage(){
        cy.url().should('include', element.urlInventory)
        cy.get(element.appLogo).should('be.visible')
    }
}

export default new loginUser();
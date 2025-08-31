class loginPage{
    visitPage(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    inputUsername(username){
        cy.get('[name="username"]').type(username)
    }
    inputPassword(password){
        cy.get('[name="password"]').type(password)
    }
    interceptLogin(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('loginRequest')
    }
    clickLoginButton(){
        cy.get('.oxd-button').should('be.visible').click()
    }
    verifyIntercept(){
        cy.wait('@loginRequest').its('response.statusCode').should('eq',200)
    }
    assertionLogin(){
        cy.url().should('include', '/dashboard/index')
    }
}

export default new loginPage()
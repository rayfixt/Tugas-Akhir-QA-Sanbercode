describe('Skenario Lupa Password', () => {
    it('TC 001 Lupa Password',() => {
        //Visit alamat website OrangeHRM
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //Klik perintah "Forgot your password?"
        cy.get('.orangehrm-login-forgot > .oxd-text').click()
        //Input username yang mengharuskan diis dengan kata "Admin"
        cy.get('[name="username"]').type('Admin').should('have.value', 'Admin')
        //Klik tombol "Reset Password"
        cy.get('.oxd-button--secondary').click()
    })
})
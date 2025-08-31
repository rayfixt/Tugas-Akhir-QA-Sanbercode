describe('Skenario Lupa Password', () => {
    it('TC 004 - Lupa Password',() => {
        //Visit alamat website OrangeHRM
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //Klik perintah "Forgot your password?"
        cy.get('.orangehrm-login-forgot > .oxd-text').click()
        
        //Input username yang mengharuskan diisi dengan kata "Admin"
        cy.get('[name="username"]').type('Admin').should('have.value', 'Admin')
        
        //Klik tombol "Reset Password"
        cy.get('.oxd-button--secondary').click()

        //Assertion sudah kirim link reset password
        cy.url().should('include','/auth/sendPasswordReset')
    })
})
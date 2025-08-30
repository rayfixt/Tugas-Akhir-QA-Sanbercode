describe('Skenario Login', () => {
    it('TC -002 Login Dengan Password yang Tidak Valid',() => {
        //Visit alamat website OrangeHRM
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //Mengisikan username
        cy.get('[name="username"]').type('Admin')
        //Mengisikan password yang tidak valid
        cy.get('[name="password"]').type('admin1234')
        //Klik tombol "Login"
        cy.get('.oxd-button').should('be.visible')
        cy.get('.oxd-button').click()
    })
})
describe('Skenario Login', () => {
    it('TC -001 Login Dengan Username yang Tidak Valid',() => {
        //Visit alamat website OrangeHRM
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //Mengisikan username yang tidak valid
        cy.get('[name="username"]').type('SalahUser')
        //Mengisikan password
        cy.get('[name="password"]').type('admin123')
        //Klik tombol "Login"
        cy.get('.oxd-button').should('be.visible')
        cy.get('.oxd-button').click()
    })
})
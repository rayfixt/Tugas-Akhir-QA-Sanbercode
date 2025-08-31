describe('Skenario Login', () => {
    it('TC 001 - Login Dengan Username dan Password yang Valid',() => {
        //Visit alamat website OrangeHRM
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //Mengisikan username yang mengharuskan diisi dengan kata "Admin"
        cy.get('[name="username"]').type('Admin').should('have.value', 'Admin')
        
        //Mengisikan password
        cy.get('[name="password"]').type('admin123')
        
        ////Klik tombol "Login" dan sebelum klik login tombol login harus tampil terlebih dahulu
        cy.get('.oxd-button').should('be.visible')
        cy.get('.oxd-button').click()

        //Assertion sudah login dan memastikan menuju halaman dashboard
        cy.url().should('include', '/dashboard/index')
    })
})
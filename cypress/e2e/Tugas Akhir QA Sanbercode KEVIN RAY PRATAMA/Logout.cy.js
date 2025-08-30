describe('Skenario Logout', () => {
    it('TC 001 Login Dengan Username dan Password yang Valid',() => {
        //Visit alamat website OrangeHRM
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //Mengisikan username yang mengharuskan diisi dengan kata "Admin"
        cy.get('[name="username"]').type('Admin').should('have.value', 'Admin')
        //Mengisikan password yang mengharuskan diisi dengan kata "admin123"
        cy.get('[name="password"]').type('admin123').should('have.value', 'admin123')
        //Klik tombol "Login" dan memastikan menuju halaman dashboard
        cy.get('.oxd-button').should('be.visible')
        cy.get('.oxd-button').click()
        cy.url().should('include', '/dashboard/index')
        cy.get('.oxd-userdropdown-tab > .oxd-icon').select()
    })
})
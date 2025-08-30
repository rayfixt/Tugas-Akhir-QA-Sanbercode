describe('Skenario Login', () => {
    it('TC 001 Login Dengan Username dan Password yang Valid',() => {
        //Visit alamat website OrangeHRM
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //Mengisikan username yang mengharuskan diisi dengan kata "Admin"
        cy.get('[name="username"]').type('Admin').should('have.value', 'Admin')
        //Mengisika password yang mengharuskan diisi dengan kata "admin123"
        cy.get('[name="password"]').type('admin123').should('have.value', 'admin123')
        //Klik tombol "Login" dan memastikan menuju halaman dashboard
        cy.get('.oxd-button').should('be.visible')
        cy.get('.oxd-button').click()
        cy.url().should('include', '/dashboard/index')
    })

    it('TC -001 Login Dengan Username yang Tidak Valid',() => {
        //Visit alamat website OrangeHRM
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //Mengisikan username yang tidak valid
        cy.get('[name="username"]').type('SalahUser')
        //Mengisika password yang mengharuskan diisi dengan kata "admin123"
        cy.get('[name="password"]').type('admin123').should('have.value', 'admin123')
        //Klik tombol "Login"
        cy.get('.oxd-button').click()
    })

    it('TC -002 Login Dengan Password yang Tidak Valid',() => {
        //Visit alamat website OrangeHRM
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //Mengisikan username yang mengharuskan diisi dengan kata "Admin"
        cy.get('[name="username"]').type('Admin')
        //Mengisika password yang tidak valid
        cy.get('[name="password"]').type('admin1234')
        //Klik tombol "Login"
        cy.get('.oxd-button').click()
    })
})
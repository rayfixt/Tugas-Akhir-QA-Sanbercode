describe('Skenario Login', () => {
    it('TC 010 Intercept Login Menggunakan Username Baru',() => {
        //Visit alamat website OrangeHRM
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //Mengisikan username yang mengharuskan diisi dengan kata "Admin"
        cy.get('[name="username"]').type('kevinrpratama').should('have.value', 'kevinrpratama')
        
        //Mengisikan password yang mengharuskan diisi dengan kata "kevin123"
        cy.get('[name="password"]').type('kevin123').should('have.value', 'kevin123')
        
        //Intercept permintaan login
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('loginRequest')

        //Klik tombol "Login" dan memastikan menuju halaman dashboard
        cy.get('.oxd-button').should('be.visible')
        cy.get('.oxd-button').click()

        //Tunggu respon dari request login
        cy.wait('@loginRequest').its('response.statusCode').should('eq',200)

        //Assertion sudah login
        cy.url().should('include', '/dashboard/index')
    })
})
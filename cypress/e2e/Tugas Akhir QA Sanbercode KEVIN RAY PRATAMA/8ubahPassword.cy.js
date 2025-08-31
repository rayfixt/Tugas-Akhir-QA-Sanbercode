describe('Skenario Ubah Password', () => {
    it('TC 008 - Merubah Password',() => {
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
        
        //Klik dorpdown pada profil
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()

        //Klik tombol "Change Password"
        cy.get(':nth-child(3) > .oxd-userdropdown-link').click()

        //Mengisikan password sekarang yang mengharuskan mengisi dengan kata "admin123"
        cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123').should('have.value','admin123')

        //Mengisikan password baru "admin12345"
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin12345')

        //Konfirmasi password baru yang mengharuskan mengisi dengan kata  "admin12345"
        cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin12345').should('have.value','admin12345')

        //Klik tombol save merubah password
        cy.get('.oxd-button--secondary').click()
    })
})
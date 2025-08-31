describe('Skenario Cuti', () => {
    it('TC 009 - Tambah Karyawan',() => {
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

        //Klik tombol PIM
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()

        //Klik "Add Employee"
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()

        //Isi Nama Depan
        cy.get('[name="firstName"]').type('Kevin')

        //Isi Nama Tengah
        cy.get('[name="middleName"]').type('Ray')

        //Isi Nama Belakang
        cy.get('[name="lastName"]').type('Pratama')

        //Isi Employee ID
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type(123456)

        //Select Detail Login
        cy.get('.oxd-switch-input').click()

        //Isi Username
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('kevinrpratama')

        //Isi Password
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('kevin123')

        //Konfirmasi Password
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('kevin123').should('have.value','kevin123')

        //Klik "Save"
        cy.get('.oxd-button--secondary').should('be.visible')
        cy.get('.oxd-button--secondary').click()
    })
})
import loginPage from "./loginPage"
import loginData from "./loginData.json"

describe('Skenario Login', () => {
    it('TC 005 - Login Dengan Username dan Password yang Valid',() => {
        //Visit alamat website OrangeHRM
        loginPage.visitPage()

        //Mengisikan username
        loginPage.inputUsername(loginData.validUsername)

        //Mengisika password
        loginPage.inputPassword(loginData.validPassword)

        //Klik tombol "Login"
        loginPage.clickLoginButton()
    })
})
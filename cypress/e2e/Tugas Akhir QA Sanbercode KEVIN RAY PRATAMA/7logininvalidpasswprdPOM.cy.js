import loginPage from "./loginPage"
import loginData from "./loginData.json"

describe('Skenario Login', () => {
    it('TC 007 - Login Dengan Username Valid dan Password yang Invalid',() => {
        //Visit alamat website OrangeHRM
        loginPage.visitPage()

        //Mengisikan valid username
        loginPage.inputUsername(loginData.validUsername)

        //Mengisika invalid password
        loginPage.inputPassword(loginData.invalidPassword)

        //Klik tombol "Login"
        loginPage.clickLoginButton()
    })
})
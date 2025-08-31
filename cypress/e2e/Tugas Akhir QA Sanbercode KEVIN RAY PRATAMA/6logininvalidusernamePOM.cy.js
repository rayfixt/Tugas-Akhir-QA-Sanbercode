import loginPage from "./loginPage"
import loginData from "./loginData.json"

describe('Skenario Login', () => {
    it('TC 006 - Login Dengan Username Invalid dan Password yang Valid',() => {
        //Visit alamat website OrangeHRM
        loginPage.visitPage()

        //Mengisikan invalid username
        loginPage.inputUsername(loginData.invalidUsername)

        //Mengisika valid password
        loginPage.inputPassword(loginData.validPassword)

        //Klik tombol "Login"
        loginPage.clickLoginButton()
    })
})
//var validacao = require('assert');
//var faker = require('faker');

const {I, home_page, login_page} = inject()

Feature('Login User');

//Antes de tudo
/*BeforeSuite(() => {
    I.amOnPage('/')
})*/

//Antes de cada cenário
/*Before(() => {
    I.amOnPage('/')
})*/

//Depois de cada cenário
/*After(() => {
    I.amOnPage('/')
})*/

//Depois de tudo
/*AfterSuite(() => {
    I.amOnPage('/')
})*/

Scenario('Login with success', ({login}) => {

    login('user')

    /*home_page.accessLoginPage()

    I.fillField('#user','João das Neves')
    I.fillField('#email',faker.internet.email())
    I.fillField('#password','123456')

    I.click('#btnRegister')

    //var title = await I.grabTitle()
    //validacao.equal(title,'Cadastro realizado!')
    I.see('Cadastro realizado!')

    //I.dontSee('O campo nome deve ser prenchido')
    //I.wait(10)
*/
})
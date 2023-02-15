/*const { I } = inject();

module.exports = {

  // insert your locators and methods here
}*/

var validacao = require('assert');
var faker = require('faker');
//const login = require('../pages/login_page');

const   {I, home_page, create_user_page} = inject()

Feature('Create User');

Scenario('Create new account',  async () => {

    I.amOnPage('/')

    //home de cadastro
    home_page.accessCadastroPage()

    username = faker.name.firstName() + ' ' + faker.name.lastName()
    //create user
    create_user_page.fillFields(username, faker.internet.email())
    create_user_page.createUser()

    //Check success
    create_user_page.validateUserCreated()

})

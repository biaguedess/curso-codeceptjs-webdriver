const { I } = inject();

module.exports = {

  // insert your locators and methods here
  fields:{

  },

  buttons: {
    cadastro: 'Cadastro',
    login: 'Login'
  },

  messages:{

  },

  accessCadastroPage(){
    I.click(this.buttons.cadastro)
  },

  accessLoginPage(){
    I.click(this.buttons.login)
  }

}

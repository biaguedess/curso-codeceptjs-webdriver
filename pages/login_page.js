const { I } = inject();

module.exports = {

  // insert your locators and methods here
  fields:{
    nameRegisterField: '#user',
    emailAddressRegisterField: '#email',
    passwordRegisterField: '#password'
  },

  buttons: {
    createAccountButton: 'btnRegister'
  },

  messages:{

  },

  submitCreateNewAccount(name, email){
    I.fillField(this.fields.nameRegisterField, name)
    I.fillField(this.fields.emailAddressRegisterField, email)
    I.fillField(this.fields.passwordRegisterField,'123456')

    I.click(this.buttons.createAccountButton)
  }

}

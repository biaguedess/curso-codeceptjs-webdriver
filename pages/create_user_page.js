const { I } = inject();

module.exports = {

  // insert your locators and methods here
  fields:{
    nameRegisterField: '#user',
    emailAddressRegisterField: '#email',
    passwordRegisterField: '#password'
  },

  buttons: {
    createAccountButton: '#btnRegister'
  },

  messages:{
    successMessage: 'Cadastro realizado!'
  },

  fillFields(name, email){
    I.wait(5)  
    I.fillField(this.fields.nameRegisterField, name)
    I.fillField(this.fields.emailAddressRegisterField, email)
    I.fillField(this.fields.passwordRegisterField,'123456')    
  },

  createUser(){
    I.click(this.buttons.createAccountButton)
  },

  validateUserCreated(){
    I.see(this.messages.successMessage)
  }


}

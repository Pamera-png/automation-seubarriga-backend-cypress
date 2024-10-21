/// <reference types="cypress" />
import loginModel from '../login/loginModel';
import ClassLoginModel from '../login/loginModel'
class LoginLogic{
realizarLogin(){
    cy.request({
        method: 'POST',
url: '/signin',
        body:{
            email: loginModel.getEmail(),
            redirecionar: loginModel.getRedirecionar(),
            senha: loginModel.getSenha()
        }
    }).its('body.token').should('not.be.empty')
    .then(token =>{
        Cypress.env('token', token)
return token
    })
}
}
export default new LoginLogic;
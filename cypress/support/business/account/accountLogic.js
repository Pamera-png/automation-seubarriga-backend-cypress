/// <reference types="cypress" />
import AccountModel from '../account/accountModel'
class AccountLogic{
inserirConta(){
    cy.request({
url: '/contas',
method: 'POST',
//headers: {
    //Authorization: `JWT ${AccountModel.getToken()}`
  //},

body: {
nome: AccountModel.getNomeConta()
}
    }).as('response')

    cy.get('@response').then(res=>{
    expect(res.status).to.be.equal(201)
            expect(res.body).to.have.property('id')
            expect(res.body).to.have.property('nome', 'Conta via rest')
        })
}

obterConta(){
return cy.request({
    method: 'get',
    url: '/contas',
//headers: {
//Authorization: `JWT ${AccountModel.getToken()}`
//},
qs:{
    nome: AccountModel.getContaByName()
}
})
.then(res =>{
    return res.body[0].id
})
}

atualizarConta(){
    this.obterConta().then(contaId => {
cy.request({
    url: `/contas/${contaId}`,
    method: 'PUT',
    //headers: {
        //Authorization: `JWT ${AccountModel.getToken()}`
        //},              
    body: {
        nome: 'conta alterada via rest'
    }
}).as('response')
    })

    cy.get('@response')
    .its('status')
    .should('be.equal', 200)
}

criarContaRepetida(){
    cy.request({
        method: 'POST',
        url: '/contas',
    //headers: {
    //Authorization: `JWT ${AccountModel.getToken()}`
    //},    
        body: {
nome: AccountModel.getContaRepetida()
        },
failOnStatusCode: false
    }).as('response')

    cy.get('@response').then(res => {
        expect(res.status).to.be.equal(400)
 expect(res.body.error).to.be.equal('Já existe uma conta com esse nome!')
    })
}
}
export default new AccountLogic;
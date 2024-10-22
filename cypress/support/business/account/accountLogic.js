/// <reference types="cypress" />
import AccountModel from '../account/accountModel'
class AccountLogic{
inserirConta(){
    cy.request({
url: '/contas',
method: 'POST',
headers: {
    Authorization: `JWT ${AccountModel.getToken()}`
  },

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

}
export default new AccountLogic;
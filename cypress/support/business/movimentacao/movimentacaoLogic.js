/// <reference types="cypress" />
import MovimentacaoModel from '../movimentacao/movimentacaoModel'
class MovimentacaoLogic{
    obterConta(){
        return cy.request({
            method: 'get',
            url: '/contas',
        headers: {
        Authorization: `JWT ${MovimentacaoModel.getToken()}`
        },
        qs:{
            nome: MovimentacaoModel.getContaByName()
        }
        })
        .then(res =>{
            return res.body[0].id
        })
        }
        
        criarMovimentacao(){
this.obterConta().then(contaId => {
    cy.request({
        method: 'POST',
        url: '/transacoes',
headers: {
    authorization: `JWT ${MovimentacaoModel.getToken()}`
},
body: {
conta_id: contaId,
data_pagamento: Cypress.moment().add({days: 1}).format('DD/MM/YYYY'),
data_transacao: Cypress.moment().format('DD/MM/YYYY'),
descricao: "pagamento aluguel",
envolvido: "inter",
status: true,
tipo: "REC",
valor: "123",
}
    }).as('response')
})
cy.get('@response')
.its('status')
.should('be.equal', 201)

cy.get('@response')
.its('body.id')
.should('exist')
        }

}
export default new MovimentacaoLogic;
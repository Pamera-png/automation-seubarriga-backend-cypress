/// <reference types="cypress" />
import EstratoModel from '../estrato/estratoModel'
class EstratoLogic{
alterarMovimentacao(){
    cy.request({
        url: '/transacoes',
        method: 'GET',
        headers: {
Authorization: `JWT ${EstratoModel.getToken()}`
        },        
        qs: {
            descricao: 'Movimentacao 1, calculo saldo'
        }
    }).then(res => {
console.log(res.body[0])
cy.request({
    url: `/transacoes/${res.body[0].id}`,
    method: 'PUT',
    headers: {
        Authorization: `JWT ${EstratoModel.getToken()}`
                },
    body: {    
    status: true,
    data_transacao: Cypress.moment(res.body[0].data_transacao).format('DD/MM/YYYY'),
                    data_pagamento: Cypress.moment(res.body[0].data_pagamento).format('DD/MM/YYYY'),
                    descricao: res.body[0].descricao,
                    envolvido: res.body[0].envolvido,
                    valor: res.body[0].valor,
                    conta_id: res.body[0].conta_id
    }
})
.its('status')
.should('be.equal', 200)
})
}

removerMovimentacao(){
    cy.request({
        method: 'GET',
        url: '/transacoes',
        headers: {
            Authorization: `JWT ${EstratoModel.getToken()}`
                    },    
        qs:{
descricao: 'Movimentacao para exclusao'
        }
    }).then(res => {
        cy.request({
url: `/transacoes/${res.body[0].id}`,
            method: 'DELETE',
            headers: {
                Authorization: `JWT ${EstratoModel.getToken()}`
                        },    
        })
        .its('status')
        .should('be.equal', 204)
    })
}

}
export default new EstratoLogic;
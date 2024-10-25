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
    url: `/transacoes ${res.body[0].id}`,
method: 'PUT',
headers: {
    Authorization: `JWT ${EstratoModel.getToken()}`
            },
body: {
    status: true,
    //continuar a partir daqui
}    
})
    })
}
}
export default new EstratoLogic;
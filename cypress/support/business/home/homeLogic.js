/// <reference types="cypress" />
import HomeModel from '../home/homeModel'
class HomeLogic{
    resetarConta(){
        cy.request({
            url: '/reset',
        method: 'GET',
        headers: {
            Authorization: `JWT ${HomeModel.getToken()}`
          },
        }).its('status')
        .should('be.equal', 200)
        }
        
        consultarSaldo(){
            cy.request({
                url: '/saldo',
                method: 'GET',
                headers: {
                    Authorization: `JWT ${HomeModel.getToken()}`
                  }
            }).then(res => {
HomeModel.getSaldoConta()
res.body.forEach(c => {
if(c.conta==='Conta para saldo'){
    HomeModel.setSaldoConta(c.saldo)
}
})
expect(HomeModel.getSaldoConta()).to.be.equal('534.00')
            })
        }

}
export default new HomeLogic;
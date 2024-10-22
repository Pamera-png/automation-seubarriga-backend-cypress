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
        
}
export default new HomeLogic;
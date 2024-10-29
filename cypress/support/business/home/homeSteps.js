import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"
import HomeLogic from '../home/homeLogic';

Then('redefino uma conta com sucesso',()=>{
    HomeLogic.resetarConta()
    })

    When('consulto o saldo da conta', () =>{
HomeLogic.consultarSaldo()
    })

    Then('consulto o saldo alterado', () =>{
        HomeLogic.consultarSaldoAlterado()
    })
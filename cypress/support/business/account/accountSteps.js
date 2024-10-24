import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"
import AccountLogic from '../account/accountLogic';

When('insiro uma conta com sucesso', ()=>{
AccountLogic.inserirConta()
})

When('altero uma conta com sucesso', ()=>{
  AccountLogic.atualizarConta()
})

When('crio uma conta com o mesmo nome', ()=>{
AccountLogic.criarContaRepetida()
})
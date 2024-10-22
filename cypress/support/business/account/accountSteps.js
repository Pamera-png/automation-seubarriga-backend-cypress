import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"
import AccountLogic from '../account/accountLogic';

When('insiro uma conta com sucesso', ()=>{
AccountLogic.inserirConta()
})
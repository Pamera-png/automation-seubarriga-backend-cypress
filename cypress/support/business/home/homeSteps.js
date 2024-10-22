import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"
import HomeLogic from '../home/homeLogic';

Then('redefino uma conta com sucesso',()=>{
    HomeLogic.resetarConta()
    })
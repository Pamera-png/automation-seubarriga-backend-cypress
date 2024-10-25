import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"
import EstratoLogic from '../estrato/estratoLogic';

And('altero uma movimentacao', () =>{
EstratoLogic.alterarMovimentacao()
})
